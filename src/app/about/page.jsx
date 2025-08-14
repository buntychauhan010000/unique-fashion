import React from "react";
import Image from "next/image";
import heroimg from "../../../public/assets/img/heroimg.png";

const Page = () => {
  return (
    <div className="bg-[#fff8f5]">
      {/* Top Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Text */}
          <div className="flex-1">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              About Us
            </h1>
            <p
              className="text-lg text-gray-500 leading-relaxed mb-6 text-justify"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              At <span className="font-bold">Unique Fashion</span>, we believe
              every saree tells a story. For years, we’ve worked with skilled
              artisans across India to bring timeless elegance and authentic
              craftsmanship to women worldwide. Our mission is to blend
              tradition with modern style, ensuring every woman feels confident,
              graceful, and beautiful.
            </p>
            <p
              className="text-lg text-gray-500 leading-relaxed text-justify"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              From vibrant silks to delicate cottons, every saree in our
              collection is a masterpiece of art, culture, and dedication. We
              take pride in offering personalized services, custom stitching,
              and global shipping to keep our traditions alive.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src={heroimg}
              alt="About Us Saree"
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "20K+", text: "Happy Clients" },
            { number: "50+", text: "Skilled Staff" },
            { number: "100%", text: "Quality Assurance" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2
                className="text-4xl font-bold text-primary"
                style={{ fontFamily: "var(--font-Abhaya)" }}
              >
                {item.number}
              </h2>
              <p
                className="text-lg text-gray-500"
                style={{ fontFamily: "var(--font-Montserrat)" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-12 text-center text-white">
        <h2
          className="text-3xl font-bold mb-4"
          style={{ fontFamily: "var(--font-Abhaya)" }}
        >
          Drapes That Define Elegance
        </h2>
        <p
          className="max-w-2xl mx-auto mb-6"
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Experience the magic of authentic handwoven sarees, designed to
          celebrate your beauty and individuality. Join our journey of style,
          tradition, and grace.
        </p>
        <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-[#f5d1c3] hover:scale-105 transition-all duration-300 shadow-md">
          Explore Collection
        </button>
      </section>
    </div>
  );
};

export default Page;
