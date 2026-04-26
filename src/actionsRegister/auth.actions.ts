"use server"
import {  RegisterForm } from "@/Schemas/auth.registerSchema";

export async function userRegister(data : RegisterForm) {
  try{
 
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup' , 
      {
        method:"POST",
        body:JSON.stringify(data),
        headers:{'Content-Type': 'application/json'}
  
      }
    );
    const result = await res.json();
    console.log("Result from API:", result);
    return res.ok
  
  }catch(error){
  }

}
