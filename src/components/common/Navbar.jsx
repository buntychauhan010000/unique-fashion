"use client";
import { useState } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../../public/assets/img/logo.png";
import Navitems from "./items/Navitems";
import PrimaryButton from "./PrimaryButton";
import Image from "next/image";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="container mx-auto px-3 py-4"
      data-aos="fade-down"
      data-aos-duration="600"
    >
      {/* Main Row */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Image
          width={95}
          height={58}
          src={logo}
          alt="Logo"
         
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="600"
          
        />

        {/* Desktop Menu */}
        <ul
          className="hidden md:flex gap-8"
          data-aos="fade-down"
          data-aos-delay="150"
          data-aos-duration="600"
        >
          <Navitems />
        </ul>

        {/* Right Section */}
        <div
          className="hidden md:flex gap-5 items-center"
          data-aos="fade-down"
          data-aos-delay="200"
          data-aos-duration="600"
        >
          <BsHandbagFill className="size-6 text-primary hover:scale-110 transition-transform" />
          <PrimaryButton label="Contact Us" href={"bookNow"} />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        data-aos="fade-left"
        data-aos-duration="500"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl text-primary"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Drawer Content */}
        <div className="flex flex-col gap-6 p-6 mt-10">
          <Navitems direction="column" onClick={() => setIsOpen(false)} />
          <BsHandbagFill
            className="size-6 text-primary cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
          <PrimaryButton label="Contact Us" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
