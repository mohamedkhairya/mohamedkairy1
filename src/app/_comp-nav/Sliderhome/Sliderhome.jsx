"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Sliderhome = ({ images }) => {
  if (!images || images.length === 0) return null;

  return (
    <section className="w-full h-[50vh] md:h-[70vh] lg:h-[70vh] relative overflow-hidden group rounded-[2rem] shadow-xl">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full h-full"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            
            {item.type === 'video' ? (
              <video
                src={item.url}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <Image 
                src={item.url} 
                alt={item.title} 
                fill
                priority={index === 0} 
                className="object-cover object-center" 
                sizes="100vw"
              />
            )}
            
            <div className="absolute inset-0 bg-green-500/70 mix-blend-multiply z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

            <div className="absolute bottom-12 left-8 md:bottom-20 md:left-16 z-30 flex flex-col items-start gap-4 pointer-events-auto">
              <h2 className="text-white text-lg md:text-4xl font-extrabold drop-shadow-2xl leading-tight max-w-lg text-left">
                {item.title}
              </h2>
              <p className="text-white text-base md:text-lg font-medium drop-shadow-md">
                {item.description}
              </p>
              <div className="flex gap-3">
                <button className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg active:scale-95">
                  {item.buttonText}
                </button>
                <button className="bg-white/20 hover:bg-white/30 cursor-pointer text-white border border-white/40 backdrop-blur-md px-8 py-3 rounded-full font-bold transition-all active:scale-95">
                  المزيد
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper-pagination {
          text-align: right !important;
          padding-right: 30px !important;
          z-index: 40 !important;
        }

        .swiper-button-next, .swiper-button-prev {
          color: #fff !important;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          width: 35px !important; 
          height: 35px !important;
          border-radius: 12px; 
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s ease;
          opacity: 0;
          z-index: 40;
        }
        
        .swiper-button-prev { left: 10px; transform: translateX(-10px); }
        .swiper-button-next { right: 10px; transform: translateX(10px); }

        .group:hover .swiper-button-next,
        .group:hover .swiper-button-prev {
          opacity: 1;
          transform: translateX(0);
        }

        .swiper-button-next:hover, .swiper-button-prev:hover {
          background: #16a34a !important; 
        }

        .swiper-pagination-bullet { background: #fff !important; opacity: 0.5; }
        .swiper-pagination-bullet-active {
          background: #22c55e !important; 
          opacity: 1;
          width: 20px !important;
          border-radius: 10px !important;
        }

        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev { display: none !important; }
          .swiper-pagination { text-align: center !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

export default Sliderhome;