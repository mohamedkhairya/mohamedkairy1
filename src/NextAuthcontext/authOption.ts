import { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { jwtDecode } from 'jwt-decode';



export const authOptions: NextAuthOptions = {
  providers: [

    Credentials({
      name: "myLogin",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "example@example.com" },
        password: { label: "Password", type: "*********" }
      },

      async authorize(credentials, req) {

        try {
          const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signin', {
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
            
            headers: { 'Content-Type': 'application/json' }
          });

          const result = await res.json();
          console.log(result)
         
          if(!res.ok){
            throw new Error(result.message || "Invalid Login")
          }
        
          const decoded:{id : string} = jwtDecode(result.token);
          

          return {
            id:decoded.id,
            name:result.user.name,
            email:result.user.email,
            accessToken:result.token,
          };

        } catch (error) {
          console.error("Auth Error:", error);
          throw new Error((error as Error).message || "Invalid credentials")
        }
      }
    })
  ],

  callbacks:{
    jwt(param){

      if(param.user){
          param.token.touteToken = param.user.accessToken
        param.token.id = param.user.id
      }

        return param.token
    },
    
    session({token , session}){

            session.id = token.id
        
        return session
    }
  },
  

  pages: {
    signIn: '/login', 
  },
};