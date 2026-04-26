
import { Van, Headset, ShieldCheck, RotateCcw,  } from 'lucide-react';

// import ProductSection from "./_comp-nav/section/ProductSection";
import Homecart from "./_comp-nav/home/Homecart";
import Homecarts from "./_comp-nav/home2/Homecarts";
import FreshCartHero from './_comp-nav/home3/Homeforme';
import img2  from '@images/img2.jpg';
import img3  from '@images/img3.jpg';
import Sliderhome from './_comp-nav/Sliderhome/Sliderhome';
import { lazy, Suspense } from 'react';
import Loading from './_comp-nav/loding/Lodeing';

const LazyProductSection = lazy(() => import("./_comp-nav/section/ProductSection"));
export default async function Home() {


const sliderData = [
  {
    url: '/videos/vegetables.mp4',
    type: 'video',
    title: "Fresh Products Delivered to your Door",
    description: "Get the freshest produce delivered to your doorstep every week.",
    buttonText: "Shop Now"
  },
  {
    url: img2,
    title: "Premium Quality Guaranteed",
    description: "Fresh from farm to your table.",
    buttonText: "Explore More"
  },
  {
    url: img3,
    title: "Fast & Free Delivery",
    description: "Same day delivery available.",
    buttonText: "Get Discount"
  }
];


 

  return (

    <>

<div>

    {/* Product Slider */}
    <div>
      <Sliderhome images={sliderData}/>
    </div>

  {/* Features Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 px-4">
  
  {/* Feature 1 */}
  <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
      <Van size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">Free Shipping</h2>
      <p className="text-sm text-slate-500 font-medium">On orders over 500 EGP</p>
    </div>
  </div>

  {/* Feature 2 */}
   <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-green-100 p-3 rounded-xl text-green-600">
      <ShieldCheck size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">Secure Payment</h2>
      <p className="text-sm text-slate-500 font-medium">100% secure checkout</p>
    </div>
  </div>

  {/* Feature 3 */}
  <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
      <RotateCcw size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">Easy Returns</h2>
      <p className="text-sm text-slate-500 font-medium">30 days return policy</p>
    </div>
  </div>

  {/* Feature 4 */}
  <div className="flex items-center gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
    <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
      <Headset size={28} />
    </div>
    <div>
      <h2 className="font-bold text-slate-800 text-lg">24/7 Support</h2>
      <p className="text-sm text-slate-500 font-medium">Dedicated support team</p>
    </div>
  </div>

</div>
{/* Home Carts */}
<div>
  <Homecarts/>
</div>

    <div>
      <Homecart/>
    </div>

<h2 className="relative text-4xl font-bold flex items-center gap-x-1">

  <span className="block h-13 w-[10px] rounded-full bg-gradient-to-b from-green-500 to-green-900" />

  <span>
    Feature<span className="text-green-600">Product</span>
  </span>
</h2>

<div>

<Suspense fallback={<Loading/>}>
<LazyProductSection/>
</Suspense>
</div>
 <div>
    <FreshCartHero/>
 </div>
      </div>
    </>
  );
}
