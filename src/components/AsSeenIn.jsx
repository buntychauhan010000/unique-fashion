"use client"; // Swiper client side pe chalta hai

import React from "react";
import { clients, mediaLogos } from "./common/Helper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaStar } from "react-icons/fa";
import Image from "next/image"; // ✅ Image optimization

function AsSeenIn() {
  return (
    <div className="bg-cream py-10">
      <div className="container mx-auto px-3">
        {/* Title */}
        <div className="max-w-[720px] mx-auto text-center">
          <p className="text-5xl font-medium font-Kaisei mb-3">As Seen In</p>
          <p className="text-gray-600 font-Abhaya">
            We work with skilled artisans and trusted beauty brands to ensure
            quality, comfort, and confidence in every product. Whether you're
            dressing up for a celebration or simply pampering your skin,
          </p>
        </div>
      </div>

      {/* Media Logos Slider */}
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="mySwiper mt-8 bg-[#fcf8f2] py-6 custom-swiper "
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          780: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
        }}
      >
        {mediaLogos.map((logo) => (
          <SwiperSlide
            key={logo.id}
            className="flex justify-center items-center"
          >
            <Image
              src={logo.image} // public folder path e.g. "/assets/img/logo1.png"
              alt={logo.alt}
              width={200}
              height={60}
              className="max-h-16 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Clients Slider */}
      <div className="py-12 px-4 text-center">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="mySwiper mb-12 custom-swiper"
          breakpoints={{
            0: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            780: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div
                className={`flex flex-col items-center ${
                  client.featured
                    ? "bg-white p-4 rounded-full shadow-lg scale-110 z-10"
                    : ""
                }`}
              >
                <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow">
                  <Image
                    src={client.image} // public folder path e.g. "/assets/img/client1.png"
                    alt={client.name}
                    width={160}
                    height={160}
                    className="object-cover w-full h-full"
                  />
                </div>
                {client.featured && (
                  <div className="flex justify-center mt-2 text-yellow-500">
                    {[...Array(client.stars)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                )}
                <p
                  className={`mt-2 text-sm font-semibold ${
                    client.featured ? "text-[#a55245]" : "text-gray-800"
                  }`}
                >
                  {client.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Client Count */}
        <div className="text-3xl md:text-5xl font-medium text-gray-900 font-Kaisei">
          Happy{" "}
          <span className="bg-[#a55245] text-white px-5 py-2 rounded-full mx-2 text-2xl md:text-4xl font-semibold">
            20K+
          </span>{" "}
          Clients
        </div>

        {/* Description */}
        <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto font-Abhaya">
          Join the excitement and discover why the world can't stop talking
          about Christo's unparalleled expertise in curly hair care.
        </p>
      </div>
    </div>
  );
}

export default AsSeenIn;
