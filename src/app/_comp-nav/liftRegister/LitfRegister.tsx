import React from 'react';
import { Star, ShieldCheck, Truck, Award } from 'lucide-react';

const FeatureItem = ({ icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-4  ">
    <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-800 leading-tight">{title}</h3>
      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const LitfRegister = () => {
  return (
    <div className=" bg-white p-8 md:p-16 flex flex-col justify-center rounded-[2.5rem] shadow-2xl overflow-hidden">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
          Welcome to <span className="text-green-600">FreshCart</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-md leading-relaxed">
          Join thousands of happy customers who enjoy fresh groceries delivered right to their doorstep.
        </p>
      </div>

      {/* Features List */}
      <div className="space-y-10">
        <FeatureItem 
          icon={<Award className="text-green-600" size={24} />} 
          title="Premium Quality" 
          desc="Premium quality products sourced from trusted suppliers." 
        />
        <FeatureItem 
          icon={<Truck className="text-green-600" size={24} />} 
          title="Fast Delivery" 
          desc="Same-day delivery available in most areas." 
        />
        <FeatureItem 
          icon={<ShieldCheck className="text-green-600" size={24} />} 
          title="Secure Shopping" 
          desc="Your data and payments are completely secure." 
        />
      </div>

      {/* Testimonial Card */}
      <div className="mt-14 p-6 bg-green-50 rounded-2xl border border-green-100 shadow-sm relative">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-white">
            <img 
              src="https://i.pravatar.cc/150?u=sarah" 
              alt="Sarah" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-bold text-gray-800 text-sm">Sarah Johnson</h4>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
            </div>
          </div>
        </div>
        <p className="text-gray-600 italic text-sm leading-relaxed">
          "FreshCart has transformed my shopping experience. The quality of products is outstanding, and the delivery is always on time."
        </p>
      </div>
    </div>
  );
};

export default LitfRegister;