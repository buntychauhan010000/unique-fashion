"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { girlimages } from "./common/Helper";
import Image from "next/image";


function DrapeElegance() {
  return (
    <div className="bg-[#F8F5F0] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900">
          Drape Elegance, Wear Tradition
        </h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
          Celebrate the timeless beauty of sarees that blend cultural richness
          with modern grace. Every piece in our collection is crafted to make
          you feel confident, beautiful, and connected to your roots. Celebrate
          the timeless beauty of sarees that blend cultural richness with modern
          grace. Every piece in our collection is crafted to make you feel
          confident, beautiful, and connected to your roots.
        </p>
      </div>

      {/* Swiper Slider for girlimages */}
      <div className="mt-12">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 0, // no pause
            disableOnInteraction: false,
          }}
          speed={4000} // smooth continuous speed
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 }, // Mobile
            640: { slidesPerView: 2 }, // Tablet
            1024: { slidesPerView: 3 }, // Desktop
          }}
          className="pb-8 custom-swiper"
        >
          {girlimages.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full max-h-96 object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 flex justify-center items-center gap-3 text-2xl md:text-5xl font-semibold container mx-auto">
        <span>Professional</span>
        <span className="bg-[#B44B4B] text-white px-4 py-1 rounded-full">
          50+
        </span>
        <span>Staff</span>
      </div>
    </div>
  );
}

export default DrapeElegance;
