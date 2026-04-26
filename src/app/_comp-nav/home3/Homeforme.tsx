import React from 'react';
import { Mail, Send, Apple, PlayCircle, Star, CheckCircle2, Truck, Tag } from 'lucide-react';

const FreshCartHero = () => {
  return (
    <div className="bg-gray-50 p-4 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Section: Newsletter */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#10b981] p-3 rounded-xl">
                <Mail className="text-white w-6 h-6" />
              </div>
              <div>
                <p className="text-[#10b981] font-bold text-xs tracking-widest uppercase">Newsletter</p>
                <p className="text-gray-500 text-sm">50,000+ subscribers</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-[#001e2b] mb-4">
              Get the Freshest Updates <br />
              <span className="text-[#10b981]">Delivered Free</span>
            </h1>

            <p className="text-gray-500 text-lg mb-8">
              Weekly recipes, seasonal offers & exclusive member perks.
            </p>

            {/* Features Tags */}
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="flex items-center gap-2 bg-green-50 text-[#10b981] px-4 py-2 rounded-full text-sm font-medium border border-green-100">
                <CheckCircle2 size={16} /> Fresh Picks Weekly
              </span>
              <span className="flex items-center gap-2 bg-green-50 text-[#10b981] px-4 py-2 rounded-full text-sm font-medium border border-green-100">
                <Truck size={16} /> Free Delivery Codes
              </span>
              <span className="flex items-center gap-2 bg-green-50 text-[#10b981] px-4 py-2 rounded-full text-sm font-medium border border-green-100">
                <Tag size={16} /> Members-Only Deals
              </span>
            </div>

            {/* Subscription Input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input 
                type="email" 
                placeholder="you@example.com" 
                className="flex-1 px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10b981] transition-all"
              />
              <button className="bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-green-100">
                Subscribe <Send size={18} />
              </button>
            </div>
            <p className="mt-4 text-xs text-gray-400">
              ✨ Unsubscribe anytime. No spam, ever.
            </p>
          </div>
          
          {/* Decorative Background Element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-50 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* Right Section: Mobile App */}
        <div className="bg-[#0b1319] rounded-3xl p-8 md:p-10 text-white flex flex-col justify-between border border-gray-800 relative overflow-hidden">
          <div>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider flex items-center gap-2 w-fit mb-6 border border-emerald-500/20">
               <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span> Mobile App
            </span>
            
            <h2 className="text-3xl font-bold mb-3">Shop Faster on Our App</h2>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Get app-exclusive deals & 15% off your first order.
            </p>

            <div className="space-y-4">
              {/* App Store Button */}
              <button className="w-full bg-transparent border border-gray-700 hover:border-gray-500 rounded-xl p-4 flex items-center gap-4 transition-all group">
                <Apple className="w-8 h-8 fill-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Download on</p>
                  <p className="text-lg font-semibold leading-tight">App Store</p>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="w-full bg-transparent border border-gray-700 hover:border-gray-500 rounded-xl p-4 flex items-center gap-4 transition-all group">
                <PlayCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                <div className="text-left">
                  <p className="text-[10px] uppercase text-gray-400">Get it on</p>
                  <p className="text-lg font-semibold leading-tight">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          <div className="mt-10">
            <div className="flex items-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-sm font-medium">4.9</span>
            </div>
            <p className="text-gray-500 text-sm">100K+ downloads</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FreshCartHero;