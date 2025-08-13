import React from "react";
import { FaCheck } from "react-icons/fa";
import girl from "../../../public/assets/img/girl.png";
import { sareeData } from "./Helper";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

function SareeShowcaseWithHero() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between rounded-3xl mx-auto gap-6 md:gap-3 lg:gap-6 mt-5 py-5 xs:py-10 lg:py-16"
      data-aos="fade-up"
    >
      {/* Left Section - Image */}
      <div
        className="relative w-full md:w-2/5 xl:w-1/2 flex justify-center"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <Image
          src={girl}
          alt="Woman smiling"
          className="rounded-3xl w-full h-auto object-cover object-center max-h-[450px]"
        />
      </div>

      {/* Right Section - Saree Cards + Button */}
      <div
        className="flex flex-col lg:flex-row items-center justify-around gap-6 md:gap-2 lg:gap-6 w-full md:w-3/5 xl:w-1/2 bg-[#fcf8f2] rounded-4xl p-3"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        {/* Saree Cards */}
        <div
          className="flex justify-between gap-4 md:gap-2 lg:gap-4"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          {sareeData.map((saree, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center"
            >
              <div className="max-w-24 sm:max-w-28 max-h-36 sm:max-h-40 overflow-hidden rounded-full">
                <Image
                  src={saree.image}
                  alt={saree.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-2 text-xs sm:text-sm hidden xs:flex md:hidden lg:flex font-semibold text-center font-Abhaya">
                {saree.title}
              </p>
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div data-aos="fade-up" data-aos-delay="400">
          <PrimaryButton label={"Learn More"} href={"shop"} />
        </div>
      </div>
    </div>
  );
}

export default SareeShowcaseWithHero;
