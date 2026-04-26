import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm z-[999]">
      {/* الـ Spinner الخارجي */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-green-100 border-t-green-600 rounded-full animate-spin"></div>
        
        {/* أيقونة صغيرة أو نقطة في المنتصف تعطي لمسة جمالية */}
        <div className="absolute w-8 h-8 bg-green-500/20 rounded-full animate-pulse"></div>
      </div>
      
      {/* نص التحميل */}
      <h2 className="mt-4 text-xl font-bold text-gray-800 tracking-tight">
        Fresh<span className="text-green-600">Cart</span>
      </h2>
      <p className="text-gray-400 text-sm animate-pulse">جاري تحضير المنتجات الطازجة...</p>
    </div>
  );
};

export default Loading;