"use client"
import React, { useState } from 'react'
import { Eye, Heart, RefreshCw } from 'lucide-react'
import Retingpro from '../retingpro/Retingpro'
import Image from 'next/image';
import Link  from 'next/link';
import { Daum} from '@/interface/interface.pordact';
import Btn from './addBtn/Btn';

const productcart = ({ item} : { item: Daum }) => {

const [isFavorite, setIsFavorite] = useState(false)
  
  return (
    <>
    <div 
        key={item._id} 
        className="group relative overflow-hidden rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-gray-100"
      >
<div className="relative overflow-hidden rounded-lg bg-gray-50 group">
  <Image 
    src={item.imageCover} 
    alt={item.title} 
    width={300} 
    height={300} 
    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
  />

  {item.priceAfterDiscount && (
    <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-[15px] font-bold px-2.5 py-1 rounded-full shadow-sm">
      -{Math.round(((item.price - item.priceAfterDiscount) / item.price) * 100)}%
    </div>
  )}

  <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 translate-x-12 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
    
    <button 
     id={item.id}
      onClick={() => setIsFavorite(!isFavorite)} 
      className={`
        p-2 rounded-full shadow-md transition-all duration-300 transform active:scale-125 cursor-pointer
        ${isFavorite 
          ? 'bg-red-50 text-red-500 scale-110' 
          : 'bg-white text-gray-500 hover:text-red-400' 
        }
      `}
    >
      <Heart 
        size={18} 
        // fill بتخلي القلب "مليان" لو هو Favorite
        fill={isFavorite ? "currentColor" : "none"} 
      />
    </button>

    <button className="bg-white cursor-pointer p-2 rounded-full shadow-md text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors">
      <RefreshCw size={18} />
    </button>
    <Link href={'/product-s/' + item.id}>
    <button className="bg-white cursor-pointer p-2 rounded-full shadow-md text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors">
      <Eye size={18} />
    </button>
    </Link>
  </div>
</div>

        {/* محتوى النص */}
        <div className="mt-4 space-y-1">
          <span className="text-xs font-medium text-gray-800 uppercase tracking-wider">
            {item.category?.name}
          </span>
          
          <h2 className="text-lg font-bold line-clamp-2 text-gray-800 ">
            {item.title}
          </h2>


         <div className="flex items-center gap-1 text-lg">
              <Retingpro value={item?.ratingsAverage}/>
              
              <span className="text-gray-500 text-sm font-semibold"> 
              ({item.ratingsQuantity})
              </span>
          </div>


          <div className="flex items-center justify-between gap-5">

          <div className={`flex items-center gap-2 ${item.priceAfterDiscount ? 'text-green-600' : ''}`}>
  <span className={`text-lg font-extrabold ${item.priceAfterDiscount ? 'text-green-600' : 'text-gray-900'}`}>
    {item.priceAfterDiscount ? item.priceAfterDiscount : item.price} 
    <small className="ml-1 text-xs font-bold uppercase">EGP</small>
  </span>

  {item.priceAfterDiscount && (
    <span className="text-sm font-medium text-gray-400 line-through">
      {item.price}
    </span>
  )}
</div>
{/* *******************************88 */}
            <Btn 
              id={item.id}
              word="Add to cart" 
              classes="w-10 h-10 sm:w-full opacity-0 translate-x-10 transition-all duration-300 group-hover:translate-x-0
              group-hover:opacity-100 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-md flex items-center
              justify-center gap-2 px-2 cursor-pointer" 
            />
            </div>

        </div>


      </div>
    </>
  )
}

export default productcart