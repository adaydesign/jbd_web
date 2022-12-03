import { ChakraProvider } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { theme } from "~/styles/theme"
import PublicLayout from "./layouts/PublicLayout";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

type DocumentProps = {
  children?: React.ReactNode;
};

const Document = ({children}:DocumentProps)=>{
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <Document>
      <PublicLayout>
        <Outlet />
      </PublicLayout>
    </Document>
  );
}
