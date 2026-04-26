
import { decode } from "next-auth/jwt"
import { cookies } from "next/headers"

export async function myAddcartToken (){
    const addAd = await cookies()
const cartToken = addAd.get("next-auth.session-token")?.value
const decodeToken = await decode({token :cartToken  , secret : process.env.NEXTAUTH_SECRET!})
const token = decodeToken?.touteToken

return token
}