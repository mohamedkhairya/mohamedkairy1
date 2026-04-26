"use client";

import React from 'react';
import { motion } from 'framer-motion'; 
import { Flame, Sparkles, ArrowRight } from 'lucide-react';

const Homecart = () => {
  
  const leftCardVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 0,     
        ease: [0.22, 1, 0.36, 1] as any
      }
    }
  };

  const rightCardVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8, 
        delay: 0,      
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <>
      <main className="my-12 px-4 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Fresh Organic Fruits (From LEFT) */}
          <motion.div 
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-green-500 to-green-700 p-10 md:p-14 text-white"
          >
            {/* Background Decoration */}
            <motion.div 
              animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />
            
            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }} // يظهر بعد اكتمال حركة الكارت
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <Flame size={16} className="text-orange-400" />
                Deal of the Day
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Fresh Organic Fruits</h2>
              <p className="text-green-50 opacity-90 text-lg mb-5">Get up to 40% off on selected organic fruits</p>
              
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-black ">40% OFF</span>
                <span className="text-sm border border-white/40 px-3 py-1 rounded-md uppercase tracking-wider">
                  Use code: <span className="font-bold">ORGANIC40</span>
                </span>
              </div>

              <button className="bg-white text-green-700 px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-lg">
                Shop Now <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Exotic Vegetables (From RIGHT) */}
          <motion.div 
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-orange-400 via-orange-500 to-rose-500 p-10 md:p-14 text-white"
          >
             <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] right-[-5%] w-64 h-64 bg-white/20 rounded-full blur-3xl"
            />

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }} // يظهر بعد اكتمال حركة الكارت الثاني
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              >
                <Sparkles size={16} className="text-yellow-300" />
                New Arrivals
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Exotic Vegetables</h2>
              <p className="text-orange-50 opacity-90 text-lg mb-5">Discover our latest collection of premium vegetables</p>
              
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-black ">25% OFF</span>
                <span className="text-sm border border-white/40 px-3 py-1 rounded-md uppercase tracking-wider">
                  Use code: <span className="font-bold">FRESH25</span>
                </span>
              </div>

              <button className="bg-white text-orange-600 px-8 py-3.5 rounded-full font-bold flex items-center gap-2 shadow-lg">
                Explore Now <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Homecart;