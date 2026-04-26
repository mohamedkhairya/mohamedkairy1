"use client"

import React, { useEffect, useState , useContext } from 'react'
import { Trash2, Plus, Minus, ShoppingCart, LogIn  ,Loader2 } from 'lucide-react'
import Link from 'next/link'
import { getCartAction, getUpdateAction , getDELETEAction , getClearAction} from '@/actionsRegister/cart.action'
import { toast } from 'sonner'; 
import { Alltypes } from './dataType';
import { contextcreat } from '@/context/Craetcontext';

const Cart = () => {
  const [productData, setproductData] = useState <null | Alltypes>(null)
  const [disabledData, setdisabledData] = useState(false)
  const [loadingData, setloadingData] = useState(false)
  const [loadingCurrnet, setloadinCurrnet] = useState <null | string>(null)
  const [loading, setLoading] = useState(true) 
  const { navNumber, setnavNumber } = useContext(contextcreat);
  const [cartId , setcartid] = useState("")

  async function UserCart() {
    try {
      const res = await getCartAction()
      if (res.status === "success") {
        setproductData(res.data)
        setcartid(res.cartId)
      }
    } catch (error) {
      console.error("Error fetching cart:", error)
    } finally {
      setLoading(false)
    }
  }

  async function Updata(id:string , newCount:number , sign:string){
    setloadinCurrnet(id)
    setdisabledData(true)
    setloadingData(true)
  const pluscount =await getUpdateAction(id , newCount )

  if(pluscount.status==="success"){
    setproductData(pluscount.data)
    setdisabledData(false)
    setloadingData(false)
    if(sign ==="+"){
      setnavNumber(navNumber +1)
    }else{
      setnavNumber(navNumber -1)
    }
  }else{
    setdisabledData(false)
    setloadingData(false)

  }
  }


 async function deleteProduct(productId: string , count:number) {
    const toastId = toast.loading("Deleting product from cart...");

    try {
      const res = await getDELETEAction(productId);

      if (res.status === "success") {
        setproductData(res.data);

        toast.success("Product removed", {
          id: toastId, 
          description: "Item has been deleted from your cart.",
          duration: 3000,
          style: {
            padding: '16px 20px',
            borderRadius: '16px',
            background: '#2b9348',
            color: '#ffffff',
            border: 'none'
          },
        });
        setnavNumber(navNumber - count)

      } else {
        toast.error(res.message || "Failed to delete item", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error, please try again", { id: toastId });
    }
  }

async function ClearAction(){
  const clear = await getClearAction();
  console.log(clear)
  if(clear.status === "success"){
    
setproductData(clear.data)
setnavNumber(0)
  }
}

  useEffect(() => {
    UserCart()
  }, [])

if (loading) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-6">
      {/* Animated Icon Container */}
      <div className="relative">
        {/* Outer Pulsing Circle */}
        <div className="absolute inset-0 rounded-full bg-green-100 animate-ping opacity-75"></div>
        
        {/* Inner Spinner Container */}
        <div className="relative bg-white p-6 rounded-3xl shadow-xl border border-gray-50">
          <ShoppingCart className="text-green-600 animate-bounce" size={48} />
          
          {/* Circular Spinner around the icon */}
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-green-600 rounded-full animate-spin"></div>
        </div>
      </div>

      {/* Loading Text with Typing Animation */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-black text-gray-800 tracking-tight animate-pulse">
          Preparing Your Cart
        </h2>
        <p className="text-gray-400 font-medium flex items-center justify-center gap-1">
          Checking stock availability 
          <span className="flex gap-1">
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
            <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
          </span>
        </p>
      </div>

      {/* Simple Progress Bar Overlay */}
      <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-green-600 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
      </div>

      {/* Tailwind Keyframes custom styles (add to global.css or tailwind config if not exists) */}
      <style jsx>{`
        @keyframes loading {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 100%; transform: translateX(0); }
          100% { width: 0%; transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}


  return (
    <>
   {/* Header */}
          <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-8">
  <div className="flex items-center gap-5">
    <div className="relative">
      <div className="bg-green-600 p-4 rounded-2xl text-white shadow-xl shadow-green-200 transform -rotate-3">
        <ShoppingCart size={32} strokeWidth={2.5} />
      </div>
      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-100 rounded-full -z-10 animate-pulse"></div>
    </div>
    
    <div>
      <h1 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
        Shopping Cart
      </h1>
      <p className="text-gray-500 font-medium flex items-center gap-2 mt-1">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
        Manage your selected items and checkout
      </p>
    </div>
  </div>

  <div className="bg-white border border-gray-200 px-5 py-2.5 rounded-2xl shadow-sm flex items-center gap-3 self-start md:self-center">
    <span className="flex h-3 w-3 relative">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
    <p className="text-gray-700 font-bold text-sm md:text-base whitespace-nowrap">
      Total: <span className="text-green-600">{productData?.products?.length || 0}</span> 
      {productData?.products?.length === 1 ? " Item" : " Items"}
    </p>
  </div>
</div>
    
      {productData?.products.length > 0 ? (
        <div className='my-5'>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side: Cart Items List */}
            <div className="lg:col-span-2 space-y-4">
              {productData.products.map((item) => (
                <div key={item._id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-6 relative">
                  
                  {/* Product Image */}
                  <div className="w-32 h-32 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.imageCover} 
                      alt={item.product.title} 
                      className="w-full h-full object-contain p-2" 
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 text-center md:text-left w-full">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 line-clamp-1">
                      {item.product.title}
                    </h3>
                    <span className="inline-block bg-green-50 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full mt-1">
                      {item.product.category?.name || "General"}
                    </span>
                    <p className="text-green-600 font-extrabold text-lg mt-2 md:mt-3">{item.price} EGP</p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-center md:justify-start gap-0 border border-gray-200 rounded-xl w-full max-w-[140px] mx-auto md:mx-0 mt-4 bg-white overflow-hidden">

                      <button
                       disabled={disabledData}
                       onClick={() => Updata(item.product.id, item.count - 1 , "-")}
                       className="flex-1 cursor-pointer p-3 disabled:bg-gray-200 hover:bg-gray-50 text-gray-500 transition-colors border-r border-gray-200 active:bg-gray-100">
                        <Minus size={16} className="mx-auto" />
                      </button>
                      {loadingData && item.product.id === loadingCurrnet ? <Loader2 className="animate-spin text-green-600 mx-2" size={25} /> :
                      <span className="px-4 font-bold text-gray-800">{item.count}</span>
                       }

                      <button
                      disabled={disabledData}
                      onClick={() => Updata(item.product.id, item.count + 1 , "+")}
                       className="flex-1 p-3 cursor-pointer hover:bg-gray-50 disabled:bg-gray-200 text-green-600 transition-colors border-l border-gray-200 active:bg-gray-100">
                        <Plus size={16} className="mx-auto" />
                      </button>
                    </div>
                  </div>

                  {/* Total & Delete */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-gray-50 gap-4">
                    <div className="text-left md:text-right">
                      <span className="text-[10px] text-gray-400 block font-bold uppercase tracking-wider">Total</span>
                      <span className="text-xl font-black text-gray-800">
                        {item.price * item.count} <small className="text-xs text-gray-400 font-normal">EGP</small>
                      </span>
                    </div>

                    <button 
                    onClick={()=> deleteProduct(item.product.id , item.count)}
                    className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 border border-gray-100 rounded-xl transition-all cursor-pointer active:scale-90">
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6">
                 <Link href="/" className="text-green-600 font-bold flex items-center gap-2 hover:underline transition-all order-2 sm:order-1">
                    ← <span className="text-sm md:text-base">Continue Shopping</span>
                 </Link>
                 <button
                 onClick={()=>ClearAction()}
                  className="text-gray-400 cursor-pointer font-bold flex items-center gap-2 hover:text-red-500 transition-all text-sm md:text-base order-1 sm:order-2 bg-gray-50 sm:bg-transparent w-full sm:w-auto justify-center py-2 sm:py-0 rounded-lg">
                    <Trash2 size={18} /> Clear all items
                 </button>
              </div>
            </div>

            {/* Right Side: Order Summary */}
           <div className="lg:col-span-1">
  <div className="bg-[#ffffff] rounded-3xl overflow-hidden shadow-2xl sticky top-32 border border-gray-100">
    
    {/* Header - Dark Section */}
    <div className="px-6 py-5 border-b bg-[#191C2D] border-gray-700/50">
      <h2 className="text-xl font-bold text-white">Order Summary</h2>
    </div>

    <div className="p-6">
      {/* Price Details */}
      <div className="space-y-4 border-b border-gray-100 pb-6">
        <div className="flex justify-between text-gray-900 font-medium">
          <span>Subtotal ({productData?.products.length} items)</span>
          
          <span className="text-gray-500">{productData?.totalCartPrice} EGP</span>
        </div>
        <div className="flex justify-between text-gray-900 font-medium">
          <span>Shipping</span>
          <span className="text-green-600 text-sm font-bold">Free Shipping</span>
        </div>
      </div>

      {/* Total & Action */}
      <div className="py-6 space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-900 font-semibold">Estimated Total</span>
          <span className="text-2xl font-black text-green-600">
            {productData?.totalCartPrice} <small className="text-xs">EGP</small>
          </span>
        </div>

        {/* Checkout */}
        <Link 
          href={`/checkout/${cartId} `}
          className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all active:scale-[0.97] shadow-lg shadow-green-900/20"
        >
          <LogIn size={20} />
          Proceed to Checkout
        </Link>
        
        <p className="text-center text-sm text-gray-600">
          Ready to finish? <span className="text-gray-400">Secure checkout powered by Route</span>
        </p>
      </div>

      {/* Benefits Section - Static items but polished */}
      <div className="space-y-3 pt-6 border-t border-gray-100">
        {[
          "Your cart items will be saved",
          "Track your orders easily",
          "Access exclusive member deals"
        ].map((benefit, idx) => (
          <div key={idx} className="flex items-center gap-3 text-xs text-gray-700">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-green-600 text-[10px]">✓</span>
            </div>
            {benefit}
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      ) : (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 animate-in fade-in zoom-in duration-500">
  {/* Icon Container with Floating Animation */}
  <div className="relative mb-8">
    <div className="absolute inset-0 bg-green-100 rounded-full scale-150 blur-3xl opacity-50"></div>
    <div className="relative bg-white p-8 rounded-[40px] shadow-2xl shadow-green-100 border border-green-50 animate-bounce [animation-duration:3s]">
      <ShoppingCart size={80} className="text-gray-300" strokeWidth={1} />
      {/* Small X mark to indicate empty */}
      <div className="absolute top-6 right-6 w-6 h-6 bg-red-100 rounded-full flex items-center justify-center border-2 border-white">
        <span className="text-red-500 text-xs font-bold">!</span>
      </div>
    </div>
  </div>

  {/* Text Content */}
  <div className="max-w-md space-y-4">
    <h2 className="text-4xl font-black text-gray-900 tracking-tight">
      Your cart is <span className="text-green-600">lonely.</span>
    </h2>
    <p className="text-gray-500 font-medium text-lg leading-relaxed">
      Looks like you haven't added anything to your cart yet. 
      Explore our latest deals and find something you love!
    </p>
  </div>

  {/* Action Button */}
  <div className="mt-10">
    <Link 
      href="/" 
      className="group relative inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all hover:shadow-xl hover:shadow-green-200 active:scale-95"
    >
      <Plus size={22} className="group-hover:rotate-90 transition-transform duration-300" />
      Start Shopping Now
    </Link>
  </div>

  {/* Decorative Background Elements (Optional) */}
  <div className="mt-12 flex gap-4">
    {[1, 2, 3].map((i) => (
      <div key={i} className={`w-2 h-2 rounded-full bg-gray-200 animate-pulse [animation-delay:${i * 200}ms]`} />
    ))}
  </div>
</div>
      )}
    </>
  )
}

export default Cart