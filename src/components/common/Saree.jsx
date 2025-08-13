"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // ✅ Ye add karo
import PrimaryButton from "./PrimaryButton";
import heroimg from "../../../public/assets/img/heroimg.png";
import SareeShowcaseWithHero from "./SareeShowcaseWithHero";

function Saree() {
  return (
    <div className="container mx-auto px-3 py-10 sm:py-16 lg:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center lg:justify-between gap-10">
        {/* Text Section */}
        <motion.div
          className="w-full lg:w-1/2 space-y-5 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" font-medium text-4xl lg:text-6xl font-Kaisei">
            Saree. Tradition. Beauty.
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-[600px] font-Abhaya mx-auto lg:mx-0 ">
            From graceful sarees to nourishing skincare, we bring you handpicked
            collections that celebrate your unique charm. Look stunning, feel
            confident — every day. Timeless fashion meets radiant skincare.
            Redefine your style with elegance that feels as good as it looks.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <PrimaryButton label="Book Now" href={"bookNow"}  />
            <PrimaryButton label="Explore" href={"shop"} />
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={heroimg}
            width={527}
            height={508}
            alt="Saree"
            className="w-full max-w-sm md:max-w-lg object-contain"
            priority
          />
        </motion.div>
      </div>
      <SareeShowcaseWithHero />
    </div>
  );
}

export default Saree;
