"use client"; // ضروري لأننا نستخدم framer-motion

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Homecartmap = ({ cart }: { cart: any[] }) => {
  return (
    <>
      {/* العنوان يظهر مرة واحدة فقط */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="relative text-4xl font-bold flex items-center gap-x-3">
            <span className="block h-12 w-[8px] rounded-full bg-gradient-to-b from-green-500 to-green-900" />
            <span>
              Shop By <span className="text-green-600">Category</span>
            </span>
          </h2>
        </div>
        
        <Link href="/products/categories" className="flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all underline underline-offset-4">
          View All Categories <ArrowRight size={18} />
        </Link>
      </div>

      {/* عرض العناصر داخل الجريد */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {cart?.map((cat: any, index: number) => (
          <motion.div
            key={cat._id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group cursor-pointer"
          >
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group-hover:shadow-md group-hover:border-green-200 transition-all flex flex-col items-center text-center h-full">
              <div className="w-24 h-24 mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 bg-green-50 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                
                <Image 
                src={cat?.image} 
                alt={cat?.name}
                fill // يأخذ مساحة الأب بالكامل
                sizes="96px"
                className="object-cover rounded-full z-10 p-1 group-hover:scale-110 transition-transform"
            />
              </div>
              
              <h3 className="font-bold text-slate-700 group-hover:text-green-600 transition-colors line-clamp-1">
                {cat.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Homecartmap;