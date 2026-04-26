"use client"
import { Daum } from '@/interface/interface.pordact'
import React, { useState } from 'react'
import { ShoppingCart, Heart, Share2,} from 'lucide-react'; 
import Btn from '@/app/_comp-nav/productcart/addBtn/Btn';
const Qunantity = ({ product }: { product: Daum }) => {

    const [cont, setCont] = useState(1);
  return (
    <>
    <div className='mt-4'>

        <div className='flex items-center gap-4'>
        
        <div className="flex items-center border border-gray-200 rounded-lg w-fit overflow-hidden bg-white shadow-sm">
        <button 
            className="px-4 py-2  bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border-r border-gray-200 font-bold text-xl active:scale-95 cursor-pointer"

            onClick={() => setCont(cont - 1)}
            disabled={cont === 1}
        >
            −
        </button>

        <span className="px-6 py-2 text-lg font-semibold text-gray-800 min-w-[50px] text-center">
            {cont}
        </span>

        <button 
            className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-[#10b981] transition-colors border-l border-gray-200 font-bold text-xl active:scale-95 cursor-pointer"
            onClick={() => setCont(cont + 1)}
            disabled={cont === product?.quantity}
        >
            +
        </button>

        </div>
        <div>
            <h5>
                {product?.quantity} 
            </h5>
        </div>
        </div>
        <div className="text-end">
        <p className='text-2xl font-bold text-gray-800 mt-3'>{product?.price * cont}EGP</p>
        </div>

        {/* button */}
    <div className="flex flex-col gap-5 p-1 w-full mt-5">
  
  <div className="flex items-center gap-3 w-full">
    
    {/* <Link 
      href="/cart" 
      className="flex-1 flex items-center justify-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white py-4 px-6 rounded-xl font-bold transition-all duration-150 shadow-sm active:scale-[0.98]"
    >
      <ShoppingCart size={22} strokeWidth={2.5} />
      <span className="text-lg">Add to Cart</span>
    </Link> */}

    <Btn 
    id={product.id}
    word="Add to Cart"
    icon={<ShoppingCart size={22} strokeWidth={2.5} />}
    classes="flex-1 flex items-center h-[60px] justify-center gap-2.5 bg-[#10b981] hover:bg-[#059669] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-150 shadow-sm active:scale-[0.98] cursor-pointer"
  />

    <button className="flex-1 flex items-center h-[60px] justify-center gap-2.5 bg-[#191C2D] hover:bg-[#252a3a] text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-150 shadow-sm active:scale-[0.98] cursor-pointer">
  <span>Buy Now</span>
  <span className="text-xl">⚡</span>
</button>
  </div>

  <div className="flex items-center gap-4 w-full">
    <button className="flex-[2] flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-700 py-4 px-6 rounded-xl font-medium transition-colors duration-150 border border-gray-200 shadow-sm active:scale-[0.98]">
      <Heart size={20} strokeWidth={2} className="text-gray-400" />
      <span className="text-base text-gray-800">Add to Wishlist</span>
    </button>

    <button className="flex-none p-4 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors duration-150 border border-gray-100 active:scale-[0.98]">
      <Share2 size={22} strokeWidth={2} />
    </button>
  </div>
</div>
    </div>
    
    </>
  )
}

export default Qunantity