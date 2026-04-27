import ProductSlider from '@/app/_comp-nav/productSlider/ProductSlider';
import { getSinglePost } from '@/servicesApi/Api';
import React from 'react'
import Qunantity from './Qunantity';
import Retingpro from '@/app/_comp-nav/retingpro/Retingpro';
import ProductReview from './ProductReview';
import { RotateCcw, ShieldCheck, Van } from 'lucide-react';

interface PageProps {
  params: Promise<{ id: string }>;
}

const ProductDetiles = async (props: PageProps) => {

const { id } = await props.params;

  const productdetiles = await getSinglePost(id);

  return (
    <>
    <div>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 my-7 items-start px-4 lg:px-0'>
      
      <div className='col-span-1 border-2 border-gray-200 rounded-2xl px-4 lg:px-6 lg:sticky lg:top-5 '>
        <ProductSlider images={productdetiles?.images || []} />
      </div>

      <div className='lg:col-span-2 py-7 border-2 border-gray-200 rounded-2xl px-5 lg:px-8 '>
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className='text-green-600 font-medium bg-green-100 py-1.5 px-3 rounded-full text-sm'>
            {productdetiles?.category?.name}
          </span>
          <span className='text-gray-700 font-medium bg-gray-200 py-1.5 px-3 rounded-full text-sm'>
            {productdetiles?.brand?.name}
          </span>
        </div>

        <h2 className='text-2xl lg:text-4xl font-extrabold mt-3 text-slate-900'>
          {productdetiles?.title}
        </h2>

        <div className='mt-3'>
          <Retingpro value={productdetiles?.ratingsAverage} />
        </div>

        <h1 className='text-2xl lg:text-3xl font-bold text-gray-800 mt-4'>
          {productdetiles?.price} EGP
        </h1>

        <span className="flex items-center gap-2 my-5 w-fit text-green-600 font-medium bg-green-50 py-1.5 px-4 rounded-full border border-green-100">
          <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></span>
          <span className="text-xs md:text-sm">In Stock</span>
        </span>

        <hr className='border-gray-100 my-6' />

        <p className='text-gray-600 leading-relaxed text-sm lg:text-base'>
          {productdetiles?.description}
        </p>

        {/* Quantity */}
        <div className='mt-8 p-4 lg:p-0 bg-gray-50 lg:bg-transparent rounded-xl'>
          <h3 className='text-lg font-bold mb-3'>Quantity</h3>
          <Qunantity product={productdetiles} />
        </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3 px-4">
  
  {/* Feature 1 */}
  <div className="flex items-center gap-4  p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
      <Van size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">Free Delivery</h2>
      <p className="text-sm text-slate-500 font-medium">Orders over $50</p>
    </div>
  </div>

  {/* Feature 2 */}
   <div className="flex items-center gap-4  p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-green-100 p-3 rounded-xl text-green-600">
      <ShieldCheck size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">30 Days Return</h2>
      <p className="text-sm text-slate-500 font-medium">Money back</p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex items-center gap-4  p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
      <RotateCcw size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">Secure Payment</h2>
      <p className="text-sm text-slate-500 font-medium">100% Protected</p>
    </div>
  </div>

  

</div>
      </div>
    </div>
    {/* Product Review */}
        <div className='my-10'>
          <ProductReview />
        </div>
    </div>
    </>
  )
}

export default ProductDetiles