"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import sareeImg from "../../public/assets/img/bluesare.png";
import PrimaryButton from "./common/PrimaryButton";

function SpeakStyle() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Image */}
        <motion.div
          className="w-full md:w-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={sareeImg}
            alt="Saree"
            width={500}
            height={500}
            className="w-full max-w-sm md:max-w-lg object-contain"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-2/5 space-y-5 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bold text-4xl lg:text-5xl">
            Sarees That Speak Style
          </h1>
          <p className="text-sm sm:text-base text-gray-500 max-w-[520px] mx-auto lg:mx-0 font-Abhaya">
            We celebrate the beauty of Indian tradition through elegant,
            handcrafted sarees. Each piece in our collection blends timeless
            designs with quality fabrics — made to make every woman feel
            confident, graceful, and truly herself.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <PrimaryButton label="Book Now" href={"bookNow"} />
            <PrimaryButton label="Explore" href={"shop"} />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SpeakStyle;
