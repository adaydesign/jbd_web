// app/sessions.js
import { createCookieSessionStorage, redirect } from "@remix-run/node" // or "@remix-run/cloudflare"
import "dotenv/config"

const sessionSecret =
  process.env.SESSION_SECRET || "kdk@ke!WoW2JBDOIXs23Llsk232qqDwE"
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "fbd_login",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 86400,
    expires: new Date(Date.now() + 86400_000),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  },
})

export const getUserSession = (request: any) => {
  return storage.getSession(request.headers.get("Cookie"))
}

export async function getUserNameAndId(request: any) {
  const session = await getUserSession(request)
  const userId = session.get("user_id")
  if (!userId || typeof userId !== "string") return null

  const userFullName = session.get("user_fullname")
  if (!userFullName || typeof userFullName !== "string") return null

  return { userId: parseInt(userId), userFullName }
}

export const requireUserId = async (
  request: any,
  redirectTo = new URL(request.url).pathname
) => {
  const session = await getUserSession(request)
  const userId = session.get("user_id")
  if ((!userId || typeof userId !== "string") && redirectTo) {
    throw redirect(redirectTo)
  }
  return userId
}

export const requireEditorRole = async (request: any) => {
  const session = await getUserSession(request)
  const isEditor = session?.get("is_editor")
  return isEditor
}

export const logout = async (request: any) => {
  const session = await getUserSession(request)
  // redirect to sso
  return redirect("/?action=logout", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  })
}

const isEditor = (data: any) => {
  const officeCode = data.office_code
  const roleId = data.role_id
  //0000011 - เทคโน , 0000022 - ส่งเสริม
  //3 - admin หน่วยงาน และ 5 - หัวหน้า
  if (!officeCode || typeof officeCode !== "string") return null
  if (!roleId || typeof roleId !== "string") return null

  // เฉพาะเทคโนกับส่งเสริม role admin กับ หัวหน้า
  return (officeCode === "0000011" || officeCode === "0000022") && (roleId === "3" || roleId === "5") // fix

  // new -- ให้สิทธิหัวหน้า ทุกคนสามารถเป็น Editor ได้
  //return roleId === "3" || roleId === "5" // fix
}

export const createUserSession = async (authenData: any, redirectTo: any) => {
  const session = await storage.getSession()
  session.set("office_code", authenData.office_code)
  session.set("office_id", authenData.office_id)
  session.set("office_name", authenData.office_name)
  session.set("program_id", authenData.program_id)
  session.set("role_id", authenData.role_id)
  session.set("token", authenData.token)
  session.set("user_fullname", authenData.user_fullname)
  session.set("user_id", authenData.user_id)
  session.set("user_username", authenData.user_username)
  // role
  const editor = isEditor(authenData)
  session.set("is_editor", editor)
  session.set("role_name", editor ? "admin" : "user") // fix

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  })
}
