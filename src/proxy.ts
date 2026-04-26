// gate batween server & client

import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function proxy (request : NextRequest){

const protectedRoutes = ["/wishlist", "/cart", "/checkout" , "/allorders"];
const outhRuote = ["/login" , "/Register"]
// gate path name
const myPath = request.nextUrl.pathname

 const alltoken = await getToken({
    req :request, 
    secret: process.env.NEXTAUTH_SECRET,
    secureCookie : process.env.NODE_ENV === "production",
 })

const token =  alltoken?.touteToken 

if(!token && protectedRoutes.some((path)=> myPath.startsWith(path))){
    return NextResponse.redirect(new URL("/login" , request.url ))
}
if(token && outhRuote.some((path)=> myPath.startsWith(path))){
    return NextResponse.redirect(new URL("/" , request.url ))
}

return NextResponse.next();


}


export const config = {
  matcher: [
    "/wishlist/:path*", 
    "/cart/:path*", 
    "/checkout/:path*", 
    "/allorders/:path*", 
    "/login", 
    "/Register"
  ],
};