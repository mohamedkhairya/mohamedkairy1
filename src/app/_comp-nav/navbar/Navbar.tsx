"use client"; 
import React, { useState , useContext} from 'react';
import { Search, ShoppingCart, Heart, User, Headphones, Menu, X, ChevronDown, LogOut } from 'lucide-react';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { contextcreat } from '@/context/Craetcontext';
const Navbar = () => {

const { navNumber, setnavNumber } = useContext(contextcreat);

const {data:mySession , status} = useSession()


function mysignOut (){
   signOut({redirect:true , callbackUrl:"/login"})
}

  const [isOpen, setIsOpen] = useState(false); 
    const linkclassname = "hover:text-green-600 text-lg font-bold"
    const linkclassCategories = "block px-4 py-2 hover:bg-green-50 hover:text-green-600"

  return (
    <header className="w-full border-b border-gray-100 font-sans sticky top-0 bg-white z-[150]">
      <div className="hidden sm:flex bg-gray-50 py-2 px-4 md:px-10 justify-between items-center text-xs text-gray-500">
        <div className="flex gap-4">
          <span>Free Shipping on Orders 500 EGP</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>+1 (800) 123-4567</span>

          {status ==="unauthenticated"?(
   <div className="flex gap-2 ml-4">
             <Link href="/login" className="hover:text-green-600 font-bold">Sign In</Link>
             <span>|</span>
             <Link href="/Register" className="hover:text-green-600 font-bold">Sign Up</Link>
          </div>
          ):(
            <div className="flex items-center ">
    <span className="text-gray-600 font-medium">
      Welcome,<span className='text-green-600 font-bold'>{mySession?.user?.name || "User"}!</span> 
    </span>
  </div>
          )}
       
        </div>
      </div>

      {/* 2. Main Navbar */}
      <div className="py-4 px-4 md:px-10 flex items-center justify-between gap-4">
        
        <button 
          className="lg:hidden text-gray-700 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="flex items-center gap-2">
          <Link href="/" className="text-black font-bold text-2xl md:text-3xl flex items-center">
            <ShoppingCart size={32} className="mr-2" /> Fresh<span className='text-green-600'>Cart</span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-lg relative items-center mx-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full border-3 border-gray-200 rounded-full py-2 px-5 focus:outline-none focus:border-green-600"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-green-600 text-white px-3 rounded-full">
            <Search size={18} />
          </button>
        </div>

        {/* Icons Area */}
        <div className="flex items-center gap-3 md:gap-7 text-gray-700">
          <nav className="hidden lg:flex gap-6 font-medium">
            <Link href="/" className={linkclassname}>Home</Link>
            <Link href="/shop" className={linkclassname}>Shop</Link>

            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center cursor-pointer text-lg font-bold  hover:text-green-600">
                Categories <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 rounded-lg overflow-hidden">
                <Link href="/products/categories" className={linkclassCategories}>All Categories</Link>
                <Link href="/products/electronics" className={linkclassCategories}>Electronics</Link>
                <Link href="/products/women" className={linkclassCategories}>Women's Fashion</Link>
                <Link href="/products/men" className={linkclassCategories}>Men's Fashion</Link>
                <Link href="/products/beauty" className={linkclassCategories}>Beauty & Health</Link>
              </div>
            </div>
           <Link href="/brands" className={linkclassname}>Brands</Link>

          </nav>

                    <div className="flex items-center gap-4 ml-4">
            <div className="hidden xl:flex items-center gap-2 text-xs">
              <Headphones  size={30} className="text-green-600" />
              <div>
                <p className="text-gray-400">Support</p>
                <p className="font-bold">24/7 Help</p>
              </div>
            </div>


            <Link href="/wishlist">
              <button className="hover:text-green-600 cursor-pointer">
                <Heart size={30} />
              </button>
            </Link>

            <Link href="/cart">
            <button className="hover:text-green-600 relative cursor-pointer">
              <ShoppingCart size={30} />
              
              {navNumber && navNumber > 0 ? (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 border-2 border-white shadow-sm">
                  {navNumber}
                </span>
              ) : null}
            </button>
          </Link>

               {status === "unauthenticated" ? (
              <Link href="/login">
                <button className="bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition font-bold cursor-pointer">
                  <User size={20} /> Sign In
                </button>
              </Link>
            ) : (
              <button
                onClick={mysignOut}
                className="bg-green-600 text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-red-600 transition font-bold cursor-pointer"
              >
                <LogOut size={20} /> Logout
              </button>
            )}
               

            </div>
            
          </div>
        </div>

     <div className={`fixed inset-0 bg-black/20 bg-opacity-50 z-[150] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"} lg:hidden`} onClick={() => setIsOpen(false)}>
  <div 
    className={`fixed left-0 top-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    onClick={(e) => e.stopPropagation()} 
  >
    
    {/* 1. Header القائمة الجانبية */}
    <div className="p-5 border-b flex justify-between items-center bg-white">
  {/* اللوجو داخل القائمة */}
  <div className="flex items-center gap-2">
    <div className="bg-green-50 p-2 rounded-lg">
      <ShoppingCart size={24} className="text-green-600" />
    </div>
    <span className="text-green-600 font-extrabold text-xl tracking-tight">
      FreshCart
    </span>
  </div>

  {/* زرار القفل */}
  <button 
    onClick={() => setIsOpen(false)}
    className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
    aria-label="Close Menu"
  >
    <X size={24} className="text-gray-400" />
  </button>
</div>
    
    <div className="flex flex-col h-full overflow-y-auto pb-20">
      
              {status ==="unauthenticated"?(
   <div className="flex gap-2 p-3">
             <Link href="/login" className="hover:text-green-600 font-bold">Sign In</Link>
             <span>|</span>
             <Link href="/Register" className="hover:text-green-600 font-bold">Sign Up</Link>
          </div>
          ):(
            <div className="flex items-center p-3 ">
    <span className="text-gray-600 font-medium">
      Welcome,<span className='text-green-600 font-bold'>{mySession?.user?.name || "User"}!</span> 
    </span>
  </div>
          )}
       

<div className="p-5">
  <div className="relative flex items-center">
    <input
      type="text"
      placeholder="Search for products..."
      className="w-full bg-gray-100 border border-transparent rounded-full py-2.5 px-5 pr-12 focus:outline-none focus:bg-white focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all text-sm"
    />
    <button className="absolute right-1.5 p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center">
      <Search size={16} strokeWidth={3} />
    </button>
  </div>
</div>

      {/* 3. Navigation Links */}
      <nav className="flex flex-col px-5 gap-2 font-medium">
        <Link href="/" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-50 hover:text-green-600 flex items-center justify-between">
          Home
        </Link>
        <Link href="/shop" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-50 hover:text-green-600 flex items-center justify-between">
          Shop
        </Link>
        <Link href="/brands" onClick={() => setIsOpen(false)} className="py-3 border-b border-gray-50 hover:text-green-600 flex items-center justify-between">
          Brands
        </Link>
        
        {/* Mobile Categories */}
        <div className="mt-4 mb-2 text-gray-400 text-[11px] uppercase tracking-wider font-bold">Categories</div>
        <div className="flex flex-col gap-1">
          <Link href="/products/categories" onClick={() => setIsOpen(false)} className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">All Categories</Link>
          <Link href="/products/electronics" onClick={() => setIsOpen(false)} className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">Electronics</Link>
          <Link href="/products/women" onClick={() => setIsOpen(false)} className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">Women's Fashion</Link>
          <Link href="/products/men" onClick={() => setIsOpen(false)} className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">Men's Fashion</Link>
          <Link href="/products/beauty" onClick={() => setIsOpen(false)} className="py-2 px-2 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors">Beauty & Health</Link>
        </div>
        
        {/* Auth Button */}
<div className=" mt-2">  
             {status === "unauthenticated" ? (
            <Link href="/login" className="w-full">
              <button className="bg-green-600 w-full text-white px-5 py-2.5 my-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-all font-bold cursor-pointer shadow-sm active:scale-95">
                <User size={20} /> 
                <span>Sign In</span>
              </button>
            </Link>
          ) : (
            <button
              onClick={mysignOut}
              className="bg-green-600 w-full text-white px-5 py-2.5 my-4 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition-all font-bold cursor-pointer shadow-sm active:scale-95"
            >
              <LogOut size={20} /> 
              <span>Logout</span>
            </button>
          )}
          </div>
      </nav>
    </div>
  </div>
</div>
    </header>
  );
};

export default Navbar;