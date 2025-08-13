import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import logo from "../../public/assets/img/logo.png";
import { footerLinks } from "./common/Helper";
import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Grid wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About Section */}
          <div className="order-1 md:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src={logo} alt="Unique Fashion" className="h-10" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Celebrate the timeless beauty of sarees that blend cultural
              richness with modern grace. Every piece in our collection is
              crafted to make you feel confident,
            </p>
            <a
              href="#"
              className="inline-block text-white hover:text-red-500 text-2xl"
            >
              <FaInstagram />
            </a>
          </div>

          {/* Links Section - Mobile par combine, MD par alag */}
          <div className="order-2 sm:grid-cols-3 md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* About Website */}
            <div>
              <h3 className="text-lg font-semibold mb-3">About website</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Services</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} className="hover:text-white">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact us</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <FiPhone className="text-xl" />
                <a href="tel:9416085508" className="hover:text-gray-600">
                  94160 85508
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Unique Fashion. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
