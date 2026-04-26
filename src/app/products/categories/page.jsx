import React from 'react';
import { getCategories } from '@/servicesApi/Api';
import Image from 'next/image';

const Category = async () => {
  const categories = await getCategories();

  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-12 px-4 ">
      <div >
        {/* شبكة الكروت: 4 كروت في الصف على الشاشات الكبيرة */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category._id || index}
              className="group relative flex flex-col items-center justify-between p-8 h-[300px] rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 bg-gray-50"
            >
              {/* حاوية الصورة: تأخذ معظم المساحة العلوية */}
            <div className="relative w-full h-[250px] rounded-[2rem] overflow-hidden">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover" 
            />
          </div>

              <div className="text-center mt-4">
                <h3 className="text-xl md:text-lg font-black text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                  {category.name}
                </h3>
                {/* خط تزييني صغير يظهر عند الهوفر */}
                <div className="w-0 group-hover:w-12 h-1 bg-green-500 mx-auto mt-2 rounded-full transition-all duration-500" />
              </div>

              {/* تأثير الطبقة الزجاجية عند الهوفر */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;