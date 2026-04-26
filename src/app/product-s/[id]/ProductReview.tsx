import React from 'react'

const ProductReview = () => {
  return (
    <>
    <div>
        <h2 className='text-2xl font-bold text-gray-800 mb-5'>About this Product</h2>
        <p className='mt-5 font-semibold text-gray-400'>Material Polyester
             Blend Colour Name Multicolour Department Women</p>

         <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
            <div className='col-span-1 border-2 border-gray-200 rounded-lg p-4 shadow-sm shadow-black-200'>

            <h3 className='text-lg font-bold mb-2'>Product Information</h3>
            <div className='flex items-center justify-between p-1'>
                <div>
                    <p className='text-gray-600 text-sm mt-3'>Category</p>
                    <p className='text-gray-600 text-sm mt-3'>Subcategory</p>
                    <p className='text-gray-600 text-sm mt-3'>Brand</p>
                    <p className='text-gray-600 text-sm mt-3'>Items Sold</p>
                </div>
                <div>
                    <p className=' font-medium mt-3'>Women's Fashion</p>
                    <p className=' font-medium mt-3'>Women's Clothing</p>
                    <p className=' font-medium mt-3'>DeFacto</p>
                    <p className=' font-medium mt-3'>700+ sold</p>
                </div>
            </div>

            </div>

            <div className='col-span-1 border-2 border-gray-200 rounded-lg p-4 shadow-sm shadow-black-200'>

            <h3 className='text-lg font-bold mb-2'>Key Features</h3>
            <div className='p-1'>
                
                    <p className=' font-medium mt-3'>Premium Quality Product</p>
                    <p className=' font-medium mt-3'>100% Authentic Guarantee</p>
                    <p className=' font-medium mt-3'>Fast & Secure Packaging</p>
                    <p className=' font-medium mt-3'>Quality Tested</p>
                </div>

            </div>
            
            </div>    
    </div>
    
    </>
  )
}

export default ProductReview