import React from 'react';
import { getElectronicsProducts } from '@/servicesApi/Api';
import ProductCard from './../../_comp-nav/productcart/productcart';

const Electronics = async () => {
  const products = await getElectronicsProducts();

  return (
    <div className="p-6">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
          Electronics <span className="text-green-600">Category</span>
        </h1>
        <p className="text-gray-500 mt-2">Discover the latest tech and gadgets</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id} item={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-20">
             <p className="text-xl font-medium text-gray-400">No electronics products found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Electronics;