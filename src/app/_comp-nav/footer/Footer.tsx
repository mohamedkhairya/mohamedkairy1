
import { Headset, RotateCcw, ShieldCheck, Truck , Mail, Phone, MapPin} from 'lucide-react'
import React from 'react'

const Footer = () => {
  // هنا تقدر تغير أسماء العواميد واللينكات اللي جوه كل واحد بسهولة
  const footerLinks = [
    {
      title: "Shop",
      links: ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion" , "Women's Fashion"]
    },
    {
      title: "Account",
      links: ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"]
    },
    {
      title: "Support",
      links: ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"]
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  ];

  return (
    <>
      {/* Features Section */}
      <div className="grid grid-cols-1 bg-green-200 sm:grid-cols-2 lg:grid-cols-4 md:px-12 gap-6 px-4">
        {/* Feature 1 */}
        <div className="flex items-center gap-4 p-6 ">
          <div className="bg-green-100 p-3 rounded-xl text-green-600">
            <Truck size={28} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg">Free Shipping</h2>
            <p className="text-sm text-slate-500 font-medium">On orders over 500 EGP</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-4 p-6 ">
          <div className="bg-green-100 p-3 rounded-xl text-green-600">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg">Secure Payment</h2>
            <p className="text-sm text-slate-500 font-medium">100% secure checkout</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-4 p-6 ">
          <div className="bg-green-100 p-3 rounded-xl text-green-600">
            <RotateCcw size={28} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg">Easy Returns</h2>
            <p className="text-sm text-slate-500 font-medium">30 days return policy</p>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="flex items-center gap-4 p-6 ">
          <div className="bg-green-100 p-3 rounded-xl text-green-600">
            <Headset size={28} />
          </div>
          <div>
            <h2 className="font-bold text-slate-800 text-lg">24/7 Support</h2>
            <p className="text-sm text-slate-500 font-medium">Dedicated support team</p>
          </div>
        </div>
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 font-sans text-gray-300">
  <div className="w-[95%] mx-auto">
    <div className="px-5 py-16 flex flex-col lg:flex-row lg:items-start gap-12">
      
{/* الجزء الشمال (Branding Section) */}
<div className="w-full lg:w-[40%] shrink-0 text-center lg:text-left mb-10 lg:mb-0">
  <div className="flex items-center justify-center lg:justify-start text-white font-bold">
    <div className="bg-green-600 p-2 rounded-lg shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    </div>
    <span className="ml-3 text-2xl uppercase tracking-tighter text-white">
      Fresh<span className="text-green-500 font-extrabold">Cart</span>
    </span>
  </div>

  <p className="mt-6 text-base text-gray-400 font-medium leading-relaxed lg:max-w-md">
    FreshCart is your one-stop destination for quality products.
    From fashion to electronics, we bring you the best brands at 
    competitive prices with a seamless shopping experience. 
  </p>

  {/* قسم بيانات التواصل الجديد */}
  <div className="mt-8 space-y-4">
    {/* الهاتف */}
    <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-green-500 transition-colors group cursor-pointer">
      <div className="bg-slate-800 p-2 rounded-md group-hover:bg-green-600/10 transition-colors">
        <Phone size={18} className="text-green-500" />
      </div>
      <span className="text-sm font-medium">+20 123 456 7890</span>
    </div>

    {/* الإيميل */}
    <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-green-500 transition-colors group cursor-pointer">
      <div className="bg-slate-800 p-2 rounded-md group-hover:bg-green-600/10 transition-colors">
        <Mail size={18} className="text-green-500" />
      </div>
      <span className="text-sm font-medium">support@freshcart.com</span>
    </div>

    {/* العنوان (اختياري بس بيدي شكل حلو) */}
    <div className="flex items-center justify-center lg:justify-start gap-3 text-gray-400 hover:text-green-500 transition-colors group cursor-pointer">
      <div className="bg-slate-800 p-2 rounded-md group-hover:bg-green-600/10 transition-colors">
        <MapPin size={18} className="text-green-500" />
      </div>
      <span className="text-sm font-medium">Cairo, Egypt</span>
    </div>
  </div>
  
  <div>
<div className="inline-flex sm:ml-auto sm:mt-0 mt-4 md:mt-7 justify-center sm:justify-start gap-5">
  {[
    { name: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "hover:text-blue-600 hover:bg-blue-50" },
    { name: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "hover:text-sky-400 hover:bg-sky-50" },
    { name: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01", color: "hover:text-pink-500 hover:bg-pink-50", isInsta: true },
    { name: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 2.78 2.78 0 00-.46-5.33zM9.75 15.02V8.48L15.45 11.75l-5.7 3.27z", color: "hover:text-red-600 hover:bg-red-50" }
  ].map((social, i) => (
    <a
      key={i}
      aria-label={social.name}
      className={`group relative p-2 text-gray-500 rounded-xl transition-all duration-500 ease-out border border-transparent cursor-pointer ${social.color} hover:border-current hover:shadow-lg active:scale-90`}
    >
      {/* تأثير التوهج الخلفي (Glow Effect) */}
      <span className="absolute inset-0 rounded-xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>

      <svg
        fill={social.isInsta ? "none" : "currentColor"}
        stroke={social.isInsta ? "currentColor" : "none"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:-translate-y-1"
        viewBox="0 0 24 24"
      >
        {social.isInsta && <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>}
        <path d={social.path}></path>
      </svg>
    </a>
  ))}
</div>
  </div>

</div>

      {/* الجزء اليمين (Links Sections) - خليناه أضيق */}
      <div className="w-full lg:w-[60%] grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
        {footerLinks.map((section, index) => (
          <div key={index} className="w-full">
            <h2 className="title-font font-bold text-white tracking-widest text-xs mb-6 uppercase opacity-90">
              {section.title}
            </h2>
            <nav className="list-none space-y-3">
              {section.links.map((linkName, i) => (
                <li key={i}>
                  <a className="text-gray-400 font-medium hover:text-green-500 transition-all duration-300 cursor-pointer text-sm inline-block hover:translate-x-1">
                    {linkName}
                  </a>
                </li>
              ))}
            </nav>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Bar - باقي الكود كما هو */}
          <div className="border-t border-slate-800">
      <div className="py-8 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">FreshCart</span> — 
          <span className="text-green-600 ml-1 font-medium">Mohamed Khairy</span>
        </p>
        
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-6">
          {[
            { path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z", color: "hover:text-blue-500" },
            { path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z", color: "hover:text-sky-400" },
            { path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01", color: "hover:text-pink-500", type: "rect" }
          ].map((social, i) => (
            <a key={i} className={`text-gray-500 cursor-pointer transition-all duration-300 transform hover:scale-125 ${social.color}`}>
              <svg fill={social.type === 'rect' ? "none" : "currentColor"} stroke={social.type === 'rect' ? "currentColor" : "none"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                {social.type === 'rect' && <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>}
                <path d={social.path}></path>
              </svg>
            </a>
          ))}
        </div>
      </div>
          </div>
  </div>
</footer>
    </>
  )
}

export default Footer