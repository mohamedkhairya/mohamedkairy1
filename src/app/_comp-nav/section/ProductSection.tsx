import React from 'react'
import { getAllPosts } from '@/servicesApi/Api';
import ProductCart from './../productcart/productcart'; 

const ProductSection = async () => {

  const pordacts = await getAllPosts() as any[];

  return (
    <>
      <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 p-4">
        {pordacts?.map((item: any) => { 
          return <ProductCart key={item._id} item={item} />
        })}
      </div>
    </>
  )
}

export default ProductSection;










// import React from 'react'
// import { getAllPosts } from '@/servicesApi/Api';
// import ProductCart from './../productcart/productcart'; 

// const ProductSection = async () => {

//   const pordacts = await getAllPosts();

//   return (
//     <>
//       <div className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-6 p-4">
//         {pordacts?.map((item) => {
//           return <ProductCart key={item._id} item={item} />
//         })}
//       </div>
//     </>
//   )
// }

// export default ProductSection