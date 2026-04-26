import React from 'react';
import Image from 'next/image';
import img4 from '@images/img4.jpg'; 
import { ChartPie , Truck, ShieldCheck } from 'lucide-react'

const Liftlogin = () => {
  return (
   
   <div className="h-full bg-white rounded-[2.5rem] shadow-2xl flex flex-col justify-between border border-gray-100 overflow-hidden relative">
      
      <div className="relative w-full flex-1 min-h-[350px]">
        <Image 
          src={img4} 
          alt="Fresh Products" 
          fill 
          sizes="(max-w: 768px) 100vw, 50vw" 
          className="object-cover object-center" 
          priority 
        />
      </div>

      <div className="w-full p-8 md:p-12 bg-white/90 backdrop-blur-sm border-t border-gray-100 mt-auto rounded-b-[2.5rem]">
        <h2 className="text-3xl md:text-3xl text-center font-extrabold text-gray-800 leading-tight">
          FreshCart - Your One-Stop Shop for <span className="text-green-600">Fresh Products</span>
        </h2>
        
        <p className="text-gray-500 text-lg text-center mt-3 max-w-xl mx-auto">
          Join thousands of happy customers who trust FreshCart for their daily grocery needs.
        </p>

        <div className="flex items-center justify-center gap-8 md:gap-12 mt-10">
          
          
          {/* أيقونة التوصيل */}
            <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-100 text-green-600 shadow-sm transition-transform hover:scale-110">
              <Truck size={28} />
            </div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Free Delivery</span>
          </div>


           {/* أيقونة الأمان */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-100 text-green-600 shadow-sm transition-transform hover:scale-110">
              <ShieldCheck size={28} />
            </div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Secure Payment</span>
          </div>

        {/* أيقونة الجودة */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center border border-green-100 text-green-600 shadow-sm transition-transform hover:scale-110">
              <ChartPie size={28} />
              
            </div>
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">24/7 Support</span>
          </div>

         

        </div>
      </div>
        
    </div>
  );
};

export default Liftlogin;