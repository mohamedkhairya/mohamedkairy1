 
 import * as z from "zod";

 
 export const registerSchema = z.object({
    name:z.string().min(3 , "Name must be at least 3 characters").
    max(20 , "Name must be at most 20 characters").
    nonempty("Name is required"), 

    email:z.email("Invalid email address").
    nonempty("Email is required"),

    phone: z
  .string()
  .min(1, "Phone number is required") 
  .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),

    password:z.string().nonempty("Password is required").
    min(8 , "Password must be at least 8 characters").
    regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    , "Password must contain a number"),

    rePassword:z.string().nonempty("Confirm Password is required")


  }).refine( (object)=> {
    
    return object.password === object.rePassword
  },{
    error:"Password & rePasswords don't matched ",
    path:["rePassword"]
  })


export type RegisterForm = z.infer<typeof registerSchema>




 export const LoginSchema = z.object({
   
    email:z.email("Invalid email address").
    nonempty("Email is required"),

    password:z.string().nonempty("Password is required").
    min(8 , "Password must be at least 8 characters").
    regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    , "Password must contain a number"),

  

  })


export type LoginForm = z.infer<typeof LoginSchema>
