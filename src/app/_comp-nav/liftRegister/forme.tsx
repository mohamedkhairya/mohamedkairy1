"use client";
import React from 'react';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGoogle ,faFacebookF } from  '@fortawesome/free-brands-svg-icons'
import { Input } from '@/components/ui/input';
import { useForm , Controller } from 'react-hook-form';
// import { Field,FieldError, FieldLabel } from '@/components/ui/field';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterForm, registerSchema } from '@/Schemas/auth.registerSchema';
import { userRegister } from '@/actionsRegister/auth.actions';
import { toast } from "sonner"
import { useRouter } from 'next/navigation';


const Forme = () => {

const ruoter = useRouter();


  const form = useForm({
   defaultValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
   },
   resolver:zodResolver(registerSchema)

  })



  const { handleSubmit , control } = form;


        
async function mySubmit(data : RegisterForm){

  console.log(data);
   const isRegistersuccess = await userRegister(data)
    if(isRegistersuccess){ 

   toast.success("Added to FreshCart", {
  description: "Your product is waiting in the cart.",
  duration: 3000,
  position: "top-center",
 style: {
  padding: '16px 20px',
  borderRadius: '16px', 
  background: '#2b9348', 
  backdropFilter: 'blur(12px)', 
  color: '#ffffff', 
  border: '1px solid rgba(255, 255, 255, 0.4)', 
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '-0.02em', 
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
},
});

  setTimeout(()=>{
     ruoter.push("/login")
  },3000)

    }else{
        toast.error("Couldn't add to cart", {
  description: "Something went wrong. Please try again.",
  duration: 3000,
 style: {
  padding: '16px 20px',
  borderRadius: '16px', 
  background: '#c1121f', 
  backdropFilter: 'blur(12px)', 
  color: '#ffffff', 
  border: '1px solid rgba(255, 255, 255, 0.4)', 
  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  fontSize: '14px',
  fontWeight: '600',
  letterSpacing: '-0.02em', 
  display: 'flex',
  alignItems: 'center',
  gap: '12px'
},
})
    }
}

  return (
    <>

    <div className="w-full bg-white p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800">Create Your Account</h2>
        <p className="text-gray-500 text-base mt-3">Start your fresh journey with us today</p>
      </div>

      {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {/* زرار جوجل */}
            <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-base font-bold text-gray-700">
              <FontAwesomeIcon icon={faGoogle} className="text-[#DB4437] text-xl" />
              Google
            </button>

            {/* زرار فيسبوك */}
            <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-base font-bold text-gray-700">
              <FontAwesomeIcon icon={faFacebookF} className="text-[#1877F2] text-xl" />
              Facebook
            </button>
          </div>

      {/* Separator */}
      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-100"></span>
        </div>
        <div className="relative flex justify-center text-sm uppercase">
          <span className="bg-white px-4 text-gray-400 font-semibold tracking-widest">or</span>
        </div>
      </div>

      {/* Form Fields */}
      <form className="space-y-6" onSubmit={handleSubmit(mySubmit)}>
        
        {/* Name Field */}
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              <label 
                htmlFor={field.name} 
                className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
              >
                Name
              </label>

              <Input
                {...field}
                id={field.name}
                type="text"
                placeholder="Enter name"
                className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
                  fieldState.invalid 
                    ? "border-red-500 focus-visible:ring-red-500" 
                    : "border-gray-200 focus-visible:ring-green-500"
                }`}
              />

              {fieldState.error && (
                <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />


        {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                {/* Label */}
                <label 
                  htmlFor={field.name} 
                  className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
                >
                  Email*
                </label>

                {/* Input */}
                <Input
                  {...field}
                  id={field.name}
                  type="email"
                  placeholder="ali@example.com"
                  className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
                    fieldState.invalid 
                      ? "border-red-500 focus-visible:ring-red-500" 
                      : "border-gray-200 focus-visible:ring-green-500"
                  }`}
                />

                {/* Error Message */}
                {fieldState.error && (
                  <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

        {/* Password Section */}
        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              {/* Label */}
              <label 
                htmlFor={field.name} 
                className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
              >
                Password*
              </label>

              {/* Input */}
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="••••••••"
                className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
                  fieldState.invalid 
                    ? "border-red-500 focus-visible:ring-red-500" 
                    : "border-gray-200 focus-visible:ring-green-500"
                }`}
              />

              

              {/* Error Message & Hints */}
              {fieldState.error ? (
                <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
                  {fieldState.error.message}
                </p>
              ) : (
                <p className="text-xs text-gray-400 ml-1">
                  Must be at least 8 characters with numbers
                </p>
              )}
            </div>
          )}
        />





        {/* Confirm Password Section */}
        <Controller
          name="rePassword" 
          control={control}
          render={({ field, fieldState }) => (
            <div className="space-y-2">
              {/* Label */}
              <label 
                htmlFor={field.name} 
                className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
              >
                Confirm Password*
              </label>

              {/* Input */}
              <Input
                {...field}
                id={field.name}
                type="password"
                placeholder="••••••••"
                className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
                  fieldState.invalid 
                    ? "border-red-500 focus-visible:ring-red-500" 
                    : "border-gray-200 focus-visible:ring-green-500"
                }`}
              />

              {/* Error Message */}
              {fieldState.error && (
                <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
                  {fieldState.error.message}
                </p>
              )}
            </div>
          )}
        />

        {/* Phone Number Field */}
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <div className="space-y-2">
                {/* Label */}
                <label 
                  htmlFor={field.name} 
                  className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
                >
                  Phone Number
                </label>

                {/* Input */}
                <Input
                  {...field}
                  id={field.name}
                  type="tel"
                  placeholder="+20 123 456 7890"
                  className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
                    fieldState.invalid 
                      ? "border-red-500 focus-visible:ring-red-500" 
                      : "border-gray-200 focus-visible:ring-green-500"
                  }`}
                />

                {/* Error Message */}
                {fieldState.error && (
                  <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

        {/* Terms */}
        <div className="flex items-start gap-3 pt-2">
          <Input type="checkbox" className="mt-1 w-5 h-5 accent-green-600 rounded border-gray-300 cursor-pointer" />
          <label className="text-sm text-gray-500 leading-relaxed cursor-pointer select-none">
            I agree to the <span className="text-green-600 font-extrabold hover:underline">Terms of Service</span> and <span className="text-green-600 font-extrabold hover:underline">Privacy Policy</span>
          </label>
        </div>

        {/* Submit Button */}
       <Button 
        type="submit" 
        className="w-full h-[50px] cursor-pointer bg-green-600 hover:bg-green-700 text-white font-black text-lg rounded-2xl transition-all flex items-center justify-center gap-3 mt-8 shadow-xl shadow-green-100 active:scale-[0.98] border-none"
      >
        <UserPlus size={22} strokeWidth={2.5} />
        Create My Account
      </Button>
      </form>

      {/* Footer Link */}
        <p className="text-center mt-10 text-base text-gray-500">
        Already have an account?{" "}
        <Link href="/login" className="text-green-600 font-black cursor-pointer hover:underline">
            Sign In
        </Link>
        </p>
    </div>
    </>
  );
};

export default Forme;