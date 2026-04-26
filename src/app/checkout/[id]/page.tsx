// "use client"
// import React, { useState } from 'react'
// import { ShoppingBag, CreditCard, Truck, ShieldCheck, MapPin, ChevronLeft, CheckCircle2 } from 'lucide-react'
// import Link from 'next/link'

// const Checkout = () => {
//   // 1. إضافة State لتحديد طريقة الدفع
//   const [paymentMethod, setPaymentMethod] = useState('cash');

//   return (
//     <div className="min-h-screen bg-gray-50 rounded-3xl  py-12 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Header Section */}
//         <div className="flex items-center gap-4 mb-10">
//           <Link href="/cart" className="p-2 hover:bg-white rounded-full transition-all text-gray-400 hover:text-green-600 shadow-sm">
//             <ChevronLeft size={24} />
//           </Link>
//           <div>
//             <h1 className="text-3xl font-black text-gray-900 tracking-tight">Checkout</h1>
//             <p className="text-gray-500 text-sm">Fill in your details to complete the order</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
//           {/* Left Side: Shipping & Payment Form */}
//           <div className="lg:col-span-8 space-y-8">
            
//             {/* Shipping Address Section */}
//             <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="bg-green-100 p-3 rounded-2xl text-green-600">
//                   <MapPin size={24} />
//                 </div>
//                 <h2 className="text-xl font-bold text-gray-800">Shipping Address</h2>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
//                   <input type="text" placeholder="John Doe" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-5 focus:outline-none focus:border-green-600 focus:bg-white transition-all" />
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
//                   <input type="tel" placeholder="+20 123 456 7890" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-5 focus:outline-none focus:border-green-600 focus:bg-white transition-all" />
//                 </div>
//                 <div className="md:col-span-2 space-y-2">
//                   <label className="text-sm font-bold text-gray-700 ml-1">Detailed Address</label>
//                   <textarea placeholder="Street name, Building number, Apartment..." rows={3} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-5 focus:outline-none focus:border-green-600 focus:bg-white transition-all"></textarea>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="text-sm font-bold text-gray-700 ml-1">City</label>
//                   <input type="text" placeholder="Cairo" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-3 px-5 focus:outline-none focus:border-green-600 focus:bg-white transition-all" />
//                 </div>
//               </div>
//             </section>

//             {/* Payment Method Section - التعديل هنا */}
//             <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
//               <div className="flex items-center gap-4 mb-8">
//                 <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
//                   <CreditCard size={24} />
//                 </div>
//                 <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
//               </div>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {/* Cash Option */}
//                 <div 
//                   onClick={() => setPaymentMethod('cash')}
//                   className={`group relative flex items-center gap-4 p-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${
//                     paymentMethod === 'cash' 
//                     ? "border-green-600 bg-green-50/30 shadow-md shadow-green-100" 
//                     : "border-gray-100 hover:border-gray-200"
//                   }`}
//                 >
//                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'cash' ? "border-green-600" : "border-gray-300"}`}>
//                     {paymentMethod === 'cash' && <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>}
//                   </div>
//                   <div className="flex flex-col">
//                     <span className={`font-bold transition-colors ${paymentMethod === 'cash' ? "text-green-700" : "text-gray-800"}`}>Cash on Delivery</span>
//                     <span className="text-xs text-gray-500">Pay when you receive order</span>
//                   </div>
//                   {paymentMethod === 'cash' && <CheckCircle2 className="ml-auto text-green-600" size={20} />}
//                 </div>

//                 {/* Visa Option */}
//                 <div 
//                   onClick={() => setPaymentMethod('visa')}
//                   className={`group relative flex items-center gap-4 p-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${
//                     paymentMethod === 'visa' 
//                     ? "border-green-600 bg-green-50/30 shadow-md shadow-green-100" 
//                     : "border-gray-100 hover:border-gray-200"
//                   }`}
//                 >
//                   <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'visa' ? "border-green-600" : "border-gray-300"}`}>
//                     {paymentMethod === 'visa' && <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>}
//                   </div>
//                   <div className="flex flex-col">
//                     <span className={`font-bold transition-colors ${paymentMethod === 'visa' ? "text-green-700" : "text-gray-800"}`}>Card Payment</span>
//                     <span className="text-xs text-gray-500">Visa, Mastercard, etc.</span>
//                   </div>
//                   {paymentMethod === 'visa' && <CheckCircle2 className="ml-auto text-green-600" size={20} />}
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Right Side: Summary Card */}
//           <div className="lg:col-span-4">
//             <div className="bg-[#191C2D] text-white rounded-[2.5rem] p-8 sticky top-32 shadow-2xl shadow-blue-900/20 overflow-hidden relative border border-white/5">
//               <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-600/20 rounded-full blur-3xl"></div>
              
//               <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
//                 <ShoppingBag className="text-green-500" />
//                 Order Summary
//               </h2>

//               <div className="space-y-4 mb-8">
//                 <div className="flex justify-between text-gray-400">
//                   <span>Subtotal</span>
//                   <span className="text-white font-bold">1,250 EGP</span>
//                 </div>
//                 <div className="flex justify-between text-gray-400 pb-4 border-b border-white/10">
//                   <span>Shipping</span>
//                   <span className="text-green-500 font-bold uppercase text-xs">Free</span>
//                 </div>
//                 <div className="flex justify-between items-center pt-2">
//                   <span className="text-lg font-bold">Total</span>
//                   <span className="text-3xl font-black text-green-500 tracking-tighter">1,250 <small className="text-xs">EGP</small></span>
//                 </div>
//               </div>

//               {/* تحديث نص الزرار بناءً على الاختيار */}
//               <button className="w-full bg-green-600 hover:bg-green-500 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-green-900/40 active:scale-95 flex items-center justify-center gap-3 mb-6 group">
//                 {paymentMethod === 'cash' ? "Place Cash Order" : "Pay with Card"}
//                 <ShieldCheck size={24} className="group-hover:rotate-12 transition-transform" />
//               </button>

//               <div className="flex flex-col gap-3 text-[10px] text-gray-400">
//                 <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
//                   <Truck size={16} className="text-green-500" />
//                   <span>Delivery in 2-4 business days</span>
//                 </div>
//                 <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
//                   <ShieldCheck size={16} className="text-green-500" />
//                   <span>Secure SSL Encrypted Payment</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Checkout






// "use client";
// import React from 'react';
// import { UserPlus } from 'lucide-react';
// import Link from 'next/link';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons';
// import { Input } from '@/components/ui/input';
// import { Controller, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';

// import { CheckoutSchema, CheckoutForm } from './../../CheckoutSchemas/Checkout.Schemas';

// const Checkout = () => {
//   const form = useForm<CheckoutForm>({
//     defaultValues: {
//       details: "",
//       phone: "",
//       city: "",
//     },
//     resolver: zodResolver(CheckoutSchema) 
//   });

//   const { handleSubmit, control, formState: { errors } } = form;

//   async function mySubmit(data: CheckoutForm) {
//     console.log("Form Data:", data);
//   }

//   return (
//     <>
//     <div className="w-full bg-white p-4 md:p-8">
//       {/* Header */}
//       <div className="text-center mb-10">
//     <h2 className="text-4xl font-extrabold text-gray-800"><span className="text-green-600">Fresh</span>Cart</h2>
//         <h2 className="text-4xl font-extrabold text-gray-800">Welcome Back!</h2>
//         <p className="text-gray-500 text-base mt-3">Sign in to continue your fresh shopping experience</p>
//       </div>

//       {/* Social Login */}
//         <div className="grid grid-cols-2 gap-4 mb-8">
//         {/* زرار جوجل */}
//         <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all text-base font-bold text-gray-700">
//             <FontAwesomeIcon icon={faGoogle} className="text-[#DB4437] text-xl" />
//             Google
//         </button>

//         {/* زرار فيسبوك */}
//         <button className="flex items-center justify-center gap-3 py-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all text-base font-bold text-gray-700">
//             <FontAwesomeIcon icon={faFacebookF} className="text-[#1877F2] text-xl" />
//             Facebook
//         </button>
//         </div>

//       {/* Separator */}
//       <div className="relative my-10">
//         <div className="absolute inset-0 flex items-center">
//           <span className="w-full border-t border-gray-100"></span>
//         </div>
//         <div className="relative flex justify-center text-sm uppercase">
//           <span className="bg-white px-4 text-gray-400 font-semibold tracking-widest">OR CONTINUE WITH EMAIL</span>
//         </div>
//       </div>

//       {/* Form Fields */}
//       <form className="space-y-6" onSubmit={handleSubmit(mySubmit)}>
        
     

//         {/* details Field */}
//             <Controller
//   name="details"
//   control={control}
//   render={({ field, fieldState }) => (
//     <div className="space-y-2">
//       {/* Label */}
//       <label 
//         htmlFor="details" // ✅ تم التعديل: أصبحت "details" كنص
//         className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
//       >
//         Details
//       </label>

//       {/* Input */}
//       <Input
//         {...field}
//         id="details" // ✅ تم التعديل: أصبحت "details" كنص
//         type="text"
//         placeholder="Enter details"
//         className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
//           fieldState.invalid 
//             ? "border-red-500 focus-visible:ring-red-500" 
//             : "border-gray-200 focus-visible:ring-green-500"
//         }`}
//       />

//       {/* Error Message */}
//       {fieldState.error && (
//         <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
//           {fieldState.error.message}
//         </p>
//       )}
//     </div>
//   )}
// />
    
//             {/* phone Section */}
//             <Controller
//   name="phone"
//   control={control}
//   render={({ field, fieldState }) => (
//     <div className="space-y-2">
//       {/* Label */}
//       <label 
//         htmlFor="phone"  // ✅ تم التعديل من {phone} لـ "phone"
//         className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
//       >
//         Phone
//       </label>

//       {/* Input */}
//       <Input
//         {...field}
//         id="phone"      // ✅ تم التعديل من {phone} لـ "phone"
//         type="text"
//         placeholder="Enter phone number"
//         className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
//           fieldState.invalid 
//             ? "border-red-500 focus-visible:ring-red-500" 
//             : "border-gray-200 focus-visible:ring-green-500"
//         }`}
//       />

//       {/* Error Message */}
//       {fieldState.error ? (
//         <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
//           {fieldState.error.message}
//         </p>
//       ) : (
//         <p className="text-xs text-gray-400 ml-1">
//           Egyptian number starting with 010, 011, 012, or 015
//         </p>
//       )}
//     </div>
//   )}
// />

//           {/* city Section */}
//            <Controller
//   name="city"
//   control={control}
//   render={({ field, fieldState }) => (
//     <div className="space-y-2">
//       {/* Label */}
//       <label 
//         htmlFor="city" // ✅ تم التصحيح: "city" بدل {city}
//         className="text-[13px] font-bold text-gray-600 uppercase tracking-wider ml-1"
//       >
//         City
//       </label>

//       {/* Input */}
//       <Input
//         {...field}
//         id="city"      // ✅ تم التصحيح: "city" بدل {city}
//         type="text"
//         placeholder="Enter your city"
//         className={`w-full h-auto px-5 py-4 text-base bg-gray-50 border transition-all outline-none shadow-sm flex rounded-2xl focus-visible:ring-2 focus-visible:ring-offset-0 focus:bg-white placeholder:text-gray-300 ${
//           fieldState.invalid 
//             ? "border-red-500 focus-visible:ring-red-500" 
//             : "border-gray-200 focus-visible:ring-green-500"
//         }`}
//       />

//       {/* Error Message */}
//       {fieldState.error && (
//         <p className="text-red-500 text-xs font-bold ml-1 animate-in fade-in slide-in-from-top-1">
//           {fieldState.error.message}
//         </p>
//       )}
//     </div>
//   )}
// />
    

     

    

//         {/* Terms */}
//         <div className="flex items-start gap-3 pt-2">
//           <input type="checkbox" className="mt-1 w-5 h-5 accent-green-600 rounded border-gray-300 cursor-pointer" />
//           <label className="text-sm text-gray-500 leading-relaxed cursor-pointer select-none">
//             Keep me signed in
//           </label>
//         </div>

//         {/* Submit Button */}

//             <button 
//               type="submit" 
//               className="w-full cursor-pointer bg-green-600 hover:bg-green-700 text-white font-black text-lg py-4.5 rounded-2xl transition-all flex items-center justify-center gap-3 mt-8 shadow-xl shadow-green-100 active:scale-[0.98]"
//             >
//               <UserPlus size={22} strokeWidth={2.5} />
//               Sign In to FreshCart
//             </button>
//       </form>

//       {/* Footer Link */}
//         <p className="text-center mt-10 text-base text-gray-500">
//         New to FreshCart?{" "}
//         <Link href="/Register" className="text-green-600 font-black cursor-pointer hover:underline">
//             Create an account
//         </Link>
//         </p>
//     </div>
//     </>
//   );
// };

// export default Checkout;



"use client";
import React, { useState } from 'react';
import { ShoppingBag, CreditCard, Truck, ShieldCheck, MapPin, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { CheckoutSchema, CheckoutForm } from '../../../CheckoutSchemas/Checkout.Schemas';
import { getCheckout } from '@/actionsRegister/checkout.value';
import { useParams } from 'next/navigation';

const Checkout = () => {


  const {id} : {id  :string} = useParams()

  const [paymentMethod, setPaymentMethod] = useState('cash');


  const { handleSubmit, control, formState: { errors, isSubmitting } } = useForm<CheckoutForm>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(CheckoutSchema)
  });

  const onMySubmit = async (data: CheckoutForm) => {
    const finalOrder = { ...data, paymentMethod };
    const res = await getCheckout( id, "", data)

  if(res.status ==="success"){
    window.location.href = res.session.url;
  } 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex items-center gap-4 mb-10">
          <Link href="/cart" className="p-2 hover:bg-white rounded-full transition-all text-gray-400 hover:text-green-600 shadow-sm">
            <ChevronLeft size={24} />
          </Link>
          <div>
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              <span className="text-green-600">Fresh</span>Cart Checkout
            </h1>
            <p className="text-gray-500 text-sm">Complete your shipping and payment details</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onMySubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Shipping & Payment */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Shipping Address Section */}
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-green-100 p-3 rounded-2xl text-green-600">
                  <MapPin size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Shipping Details</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


                {/* City Field */}
                <Controller
                  name="city"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label htmlFor="city" className="text-sm font-bold text-gray-700 ml-1">City</label>
                      <Input 
                        {...field}
                        id="city"
                        placeholder="Cairo" 
                        className={`w-full bg-gray-50 border-2 rounded-2xl py-6 px-5 transition-all ${fieldState.invalid ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-100 focus-visible:ring-green-600'}`} 
                      />
                      {fieldState.error && <p className="text-red-500 text-xs font-bold ml-1">{fieldState.error.message}</p>}
                    </div>
                  )}
                />

                {/* Phone Field */}
                <Controller
                  name="phone"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                      <Input 
                        {...field}
                        id="phone"
                        type="tel" 
                        placeholder="010XXXXXXXX" 
                        className={`w-full bg-gray-50 border-2 rounded-2xl py-6 px-5 transition-all ${fieldState.invalid ? 'border-red-500 focus-visible:ring-red-500' : 'border-gray-100 focus-visible:ring-green-600'}`} 
                      />
                      {fieldState.error && <p className="text-red-500 text-xs font-bold ml-1">{fieldState.error.message}</p>}
                    </div>
                  )}
                />

                {/* Detailed Address Field */}
                <Controller
                  name="details"
                  control={control}
                  render={({ field, fieldState }) => (
                    <div className="md:col-span-2 space-y-2">
                      <label htmlFor="details" className="text-sm font-bold text-gray-700 ml-1">Detailed Address</label>
                      <textarea 
                        {...field}
                        id="details"
                        placeholder="Street name, Building number, Apartment..." 
                        rows={3} 
                        className={`w-full bg-gray-50 border-2 rounded-2xl py-4 px-5 focus:outline-none transition-all ${fieldState.invalid ? 'border-red-500 focus:border-red-500' : 'border-gray-100 focus:border-green-600'}`}
                      ></textarea>
                      {fieldState.error && <p className="text-red-500 text-xs font-bold ml-1">{fieldState.error.message}</p>}
                    </div>
                  )}
                />
              </div>
            </section>

            {/* 2. Payment Method Section */}
            <section className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-100 p-3 rounded-2xl text-blue-600">
                  <CreditCard size={24} />
                </div>
                <h2 className="text-xl font-bold text-gray-800">Payment Method</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Cash Option */}
                <div 
                  onClick={() => setPaymentMethod('cash')}
                  className={`group relative flex items-center gap-4 p-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${paymentMethod === 'cash' ? "border-green-600 bg-green-50/30 shadow-md shadow-green-100" : "border-gray-100 hover:border-gray-200"}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'cash' ? "border-green-600" : "border-gray-300"}`}>
                    {paymentMethod === 'cash' && <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold ${paymentMethod === 'cash' ? "text-green-700" : "text-gray-800"}`}>Cash on Delivery</span>
                    <span className="text-xs text-gray-500">Pay when you receive</span>
                  </div>
                </div>

                {/* Visa Option */}
                <div 
                  onClick={() => setPaymentMethod('visa')}
                  className={`group relative flex items-center gap-4 p-6 border-2 rounded-3xl cursor-pointer transition-all duration-300 ${paymentMethod === 'visa' ? "border-green-600 bg-green-50/30 shadow-md shadow-green-100" : "border-gray-100 hover:border-gray-200"}`}
                >
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${paymentMethod === 'visa' ? "border-green-600" : "border-gray-300"}`}>
                    {paymentMethod === 'visa' && <div className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></div>}
                  </div>
                  <div className="flex flex-col">
                    <span className={`font-bold ${paymentMethod === 'visa' ? "text-green-700" : "text-gray-800"}`}>Card Payment</span>
                    <span className="text-xs text-gray-500">Visa, Mastercard</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Side: Summary Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#191C2D] text-white rounded-[2.5rem] p-8 sticky top-32 shadow-2xl border border-white/5">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <ShoppingBag className="text-green-500" /> Order Summary
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span className="text-white font-bold">1,250 EGP</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-3xl font-black text-green-500 tracking-tighter">1,250 <small className="text-xs">EGP</small></span>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-lg shadow-green-900/40 active:scale-95 flex items-center justify-center gap-3 mb-6 group"
              >
                {isSubmitting ? "Processing..." : (paymentMethod === 'cash' ? "Confirm Cash Order" : "Pay with Card")}
                <ShieldCheck size={24} className="group-hover:rotate-12 transition-transform" />
              </button>

              <div className="flex flex-col gap-3 text-[10px] text-gray-400">
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                  <Truck size={16} className="text-green-500" />
                  <span>Delivery to {control._formValues.city || "your city"} in 2-4 days</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5">
                   <ShieldCheck size={16} className="text-green-500" />
                   <span>Secure SSL Encrypted Payment</span>
                </div>
                
              </div>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Checkout;