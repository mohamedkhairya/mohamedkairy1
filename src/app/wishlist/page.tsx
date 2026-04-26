
import { Heart , ArrowRight} from 'lucide-react'
import Link from 'next/link'
import React, { } from 'react'

const Wishlist = () => {


  return (
   <>
    <div className="bg-white rounded-[3rem] p-20  my-20 text-center border border-dashed border-gray-200">
            <Heart size={40} className="text-red-200 mx-auto mb-6" />
            <h2 className="text-2xl font-black text-gray-900">Your wishlist is empty</h2>
            <Link href="/" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold mt-8 hover:bg-green-600 transition-all">
              Explore Products <ArrowRight size={18} />
            </Link>
          </div>
   
   
   </>
  )
}

export default Wishlist