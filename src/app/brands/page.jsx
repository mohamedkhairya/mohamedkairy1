import React from 'react'
import { getBrands } from '@/servicesApi/Api';
import Image from 'next/image';

const page =async ()=> {

  const brands = await getBrands();

if (!brands || brands.length === 0) return null;
  return (
    <>
        <section className="py-12 px-4 ">
              <div >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                  {brands.map((brand, index) => (
                    <div 
                      key={brand._id || index}
                      className="group relative flex flex-col items-center justify-between p-8 h-[250px] rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 border border-gray-100 bg-gray-50"
                    >
                    <div className="relative w-full h-[80px] md:h-[120px] lg:h-[100px] rounded-[2rem]  overflow-hidden">
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      fill
                      className="object-cover" 
                    />
                  </div>
        
                      <div className="text-center mt-4">
                        <h3 className="text-xl md:text-lg font-black text-gray-800 transition-colors duration-300 group-hover:text-green-600">
                          {brand.name}
                        </h3>
                        <div className="w-0 group-hover:w-12 h-1 bg-green-500 mx-auto mt-2 rounded-full transition-all duration-500" />
                      </div>
        
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </>
  )
}

export default page