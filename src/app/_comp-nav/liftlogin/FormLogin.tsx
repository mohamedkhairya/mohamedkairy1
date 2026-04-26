"use client";
import React from 'react';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { LoginForm, LoginSchema } from '@/Schemas/auth.registerSchema';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const FormeLogin = () => {
const ruoter = useRouter();


 const form = useForm({
   defaultValues:{
   
    email:"",
    password:"",
   
   },
   resolver:zodResolver(LoginSchema)

  })



const { handleSubmit , control } = form;

async function mySubmit(data: LoginForm) {
  const badge = await signIn("credentials", {
    ...data,
    redirect: false,
    callbackUrl: "/",
  });

  if (badge?.ok) {
    toast.success("Welcome Back!", {
      description: "Signed in successfully. Redirecting...",
      duration: 3000,
      position: "top-center",
      style: {
        padding: '16px 20px',
        borderRadius: '16px',
        background: '#2b9348', 
        color: '#ffffff',
      },
    });

    setTimeout(() => {
      ruoter.push("/");
    }, 2000);
  } else {
    toast.error("Login Failed", {
      description: badge?.error || "Check your email or password and try again.",
      duration: 4000,
      style: {
        padding: '16px 20px',
        borderRadius: '16px',
        background: '#c1121f', 
        color: '#ffffff',
      },
    });
  }
}
  return (
    <>
    <div className="w-full bg-white p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-10">
    <h2 className="text-4xl font-extrabold text-gray-800"><span className="text-green-600">Fresh</span>Cart</h2>
        <h2 className="text-4xl font-extrabold text-gray-800">Welcome Back!</h2>
        <p className="text-gray-500 text-base mt-3">Sign in to continue your fresh shopping experience</p>
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
          <span className="bg-white px-4 text-gray-400 font-semibold tracking-widest">OR CONTINUE WITH EMAIL</span>
        </div>
      </div>

      {/* Form Fields */}
      <form className="space-y-6" onSubmit={handleSubmit(mySubmit)}>
        
     

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
    

     

    

        {/* Terms */}
        <div className="flex items-start gap-3 pt-2">
          <input type="checkbox" className="mt-1 w-5 h-5 accent-green-600 rounded border-gray-300 cursor-pointer" />
          <label className="text-sm text-gray-500 leading-relaxed cursor-pointer select-none">
            Keep me signed in
          </label>
        </div>

        {/* Submit Button */}

            <button 
              type="submit" 
              className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4.5 rounded-2xl transition-all flex items-center justify-center gap-3 mt-8 shadow-xl shadow-green-100 active:scale-[0.98]"
            >
              <UserPlus size={22} strokeWidth={2.5} />
              Sign In to FreshCart
            </button>
      </form>

      {/* Footer Link */}
        <p className="text-center mt-10 text-base text-gray-500">
        New to FreshCart?{" "}
        <Link href="/Register" className="text-green-600 font-black cursor-pointer hover:underline">
            Create an account
        </Link>
        </p>
    </div>
    </>
  );
};

export default FormeLogin;