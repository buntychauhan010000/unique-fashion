import React from "react";
import {
  FaTshirt,
  FaSocks,
  FaFemale,
  FaGem,
  FaHandSparkles,
  FaPalette,
  FaShoppingBag,
} from "react-icons/fa";
import { FaCut } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      title: "Designer Sarees",
      desc: "Exclusive handpicked sarees with a blend of tradition and modern elegance.",
      icon: <FaFemale className="text-4xl text-primary" />,
    },
    {
      title: "Custom Tailoring",
      desc: "Perfect fitting for every body type by our skilled professionals.",
      icon: <FaTshirt className="text-4xl text-primary" />,
    },
    {
      title: "Bridal Collection",
      desc: "Premium bridal wear that adds grace and charm to your big day.",
      icon: <FaGem className="text-4xl text-primary" />,
    },
    {
      title: "Accessories",
      desc: "Handmade jewelry and accessories to complete your look.",
      icon: <FaSocks className="text-4xl text-primary" />,
    },
    {
      title: "Fabric Customization",
      desc: "Choose from a wide variety of fabrics, colors, and textures.",
      icon: <FaPalette className="text-4xl text-primary" />,
    },
    {
      title: "Perfect Fit Tailoring",
      desc: "Get your outfits tailored to perfection for ultimate comfort and style.",
      icon: <FaCut className="text-4xl text-primary" />,
    },
    {
      title: "Exclusive Handwork",
      desc: "Detailed embroidery and handwork by expert artisans.",
      icon: <FaHandSparkles className="text-4xl text-primary" />,
    },
    {
      title: "Ready-to-Wear",
      desc: "Trendy and stylish ready-to-wear outfits for all occasions.",
      icon: <FaShoppingBag className="text-4xl text-primary" />,
    },
  ];

  return (
    <section className="bg-gray-50 py-16" id="services">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-4"
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Our Services
        </h2>
        <p
          className="text-center text-gray-600 max-w-2xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-Kaisei)" }}
        >
          Discover our range of fashion services designed to make you look and
          feel your absolute best.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 80}
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "var(--font-Montserrat)" }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-600 text-sm"
                style={{ fontFamily: "var(--font-Kaisei)" }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
