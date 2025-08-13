"use client";
import React, { useState } from "react";
import bgImage from "../../public/assets/img/bgimg.png";

import { Autoplay } from "swiper/modules";
import "swiper/css";
import { imgdata } from "./common/Helper";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

function OurGallery() {
  const [activeImage, setActiveImage] = useState(0);

  console.log(activeImage, "image");
  return (
    <div className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={activeImage ? activeImage.src : bgImage}
          alt="Gallery background"
          fill
          priority
          quality={100}
          className="object-cover object-top"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="relative z-10">
        {/* Title Section */}
        <div className="max-w-[720px] mx-auto text-center py-12 text-white">
          <p className="text-5xl font-bold">Our Gallery</p>
          <p className="text-white text-base mt-4 font-Abhaya leading-relaxed">
            Explore a curated collection of moments, creations, and
            inspirations. Each piece tells a story, capturing the essence of our
            journey and vision.
          </p>
        </div>

        {/* Full-width Swiper */}
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="mySwiper pb-12 w-full custom-swiper"
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {imgdata.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={`Gallery ${item.id}`}
                  onClick={() => setActiveImage(item.image)}
                  className="w-full h-60 sm:h-72 md:h-80 lg:h-70 xl:h-96 object-cover object-top"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default OurGallery;
