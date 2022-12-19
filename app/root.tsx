// root.tsx
import React, { useContext, useEffect } from "react"
import { withEmotionCache } from "@emotion/react"
import { ChakraProvider } from "@chakra-ui/react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react"
import { MetaFunction, LinksFunction, LoaderFunction } from "@remix-run/node" // Depends on the runtime you choose

import { ServerStyleContext, ClientStyleContext } from "~/context"
import { APP_NAME } from "./constants"
import { theme } from "~/styles/theme"
import { getUserSession, requireUserId } from "./session.server"
import {
  AuthenLayout,
  CatchErrorLayout,
  PublicLayout,
  UnauthenLayout,
} from "./layouts"
import UserContext from "~/contexts/UserContext"

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const action = url.searchParams.get("action")
  if (!action) {
    const checkUserId = await requireUserId(request, "")
    if (parseInt(checkUserId) > 0) {
      const session = await getUserSession(request)
      return { ...session, action: "authorized" }
    }
  }

  return { action }
  //return redirect("/")
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: APP_NAME,
  viewport: "width=device-width,initial-scale=1",
})

export let links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com" },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=K2D:wght@300;400;700&display=swap",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png",
    },
  ]
}

interface DocumentProps {
  children: React.ReactNode
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext)
    const clientStyleData = useContext(ClientStyleContext)

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head
      // re-inject tags
      const tags = emotionCache.sheet.tags
      emotionCache.sheet.flush()
      tags.forEach((tag) => {
        ;(emotionCache.sheet as any)._insertTag(tag)
      })
      // reset cache to reapply global styles
      clientStyleData?.reset()
    }, [])

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    )
  }
)

export default function App() {
  const userData = useLoaderData()

  if (userData.action == "authorized") {
    return (
      <Document>
        <UserContext.Provider value={{ userData }}>
          <AuthenLayout>
            <Outlet />
          </AuthenLayout>
        </UserContext.Provider>
      </Document>
    )
  } else if (userData.action == "invalid" || userData.action == "logout") {
    return (
      <Document>
        <UnauthenLayout action={userData.action} />
      </Document>
    )
  }

  // else -- public
  return (
    <Document>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </Document>
  )
}

export function CatchBoundary() {
  return (
    <Document>
      <CatchErrorLayout />
    </Document>
  )
}
