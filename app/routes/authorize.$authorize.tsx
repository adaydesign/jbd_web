import queryString from "query-string"
import { createUserSession } from "~/session.server"
import { APP_ID } from "~/constants"
import { LoaderFunction, redirect } from "@remix-run/node"

export const loader: LoaderFunction = async ({ params }) => {
  const a = params.authorize || ""

  let base64ToString = Buffer.from(a, "base64").toString()
  const authenData = queryString.parse(base64ToString)

  // if invalid app ID
  if (authenData.program_id != APP_ID || 
    (authenData.office_code != "0000011" && authenData.office_code != "0000022") || 
    (authenData.role_id != "3" && authenData.role_id != "5")) {
      console.log("redirect > /?action=invalid")
    return redirect("/?action=invalid")
  }

  return createUserSession(authenData, "/_")
}
