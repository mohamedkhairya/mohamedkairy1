'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/thumbs';

const ProductSlider = ({ images }: { images: string[] }) => {
const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col gap-4 py-7">
      
   <Swiper
  spaceBetween={10}
  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
  modules={[Thumbs]}
  className="w-full rounded-2xl overflow-hidden" 
>
  {images?.map((img, i) => (
    <SwiperSlide key={i}>
      <div className="relative aspect-square w-full bg-gray-100 rounded-2xl overflow-hidden">
        <Image 
          src={img} 
          alt={`Product ${i}`} 
          fill 
          className="object-contain rounded-2xl border-3 border-green-600 " 
          priority={i === 0}
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className="w-full mt-2"
      >
        {images?.map((img, i) => (
          <SwiperSlide 
            key={i} 
            className="cursor-pointer opacity-40 transition-opacity duration-300 [&.swiper-slide-thumb-active]:opacity-100"
          >
            <div className="relative aspect-square w-full border-2 rounded-md overflow-hidden border-green-600">
              <Image 
                src={img} 
                alt={`Thumb ${i}`} 
                fill 
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;