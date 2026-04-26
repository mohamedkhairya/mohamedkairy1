import React from 'react';
import { getWomensProducts } from '@/servicesApi/Api';
import ProductCard from './../../_comp-nav/productcart/productcart';

const Women =async () => {


    const products = await getWomensProducts();
  
  return (
    <>
    
    
    <div className="p-6">
          <div className="mb-10">
            <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
              Women's  <span className="text-green-600">Fashion</span>
            </h1>
            <p className="text-gray-500 mt-2">Browse products in Women's Fashion</p>
          </div>
    
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {products && products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} item={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                 <p className="text-xl font-medium text-gray-400">No  products in Women's Fashion.</p>
              </div>
            )}
          </div>
        </div>
    
    
    </>
  )
}

export default Women