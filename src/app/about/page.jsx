import React from "react";
import Image from "next/image";
import heroimg from "../../../public/assets/img/heroimg.png";

const Page = () => {
  return (
    <div className="bg-[#fff8f5]">
      {/* Top Section */}
      <section className="container mx-auto px-3  py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center ">
          {/* Text */}
          <div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 "
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              About Us
            </h1>
            <p
              className="text-lg text-gray-500 leading-relaxed mb-6"
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
              className="text-lg text-gray-500 leading-relaxed"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              From vibrant silks to delicate cottons, every saree in our
              collection is a masterpiece of art, culture, and dedication. We
              take pride in offering personalized services, custom stitching,
              and global shipping to keep our traditions alive.
            </p>
          </div>

          {/* Image */}
          <Image src={heroimg} alt="About Us Saree" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h2
              className="text-4xl font-bold text-primary"
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              20K+
            </h2>
            <p
              className="text-lg text-gray-500"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              Happy Clients
            </p>
          </div>
          <div>
            <h2
              className="text-4xl font-bold text-primary"
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              50+
            </h2>
            <p
              className="text-lg text-gray-500"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              Skilled Staff
            </p>
          </div>
          <div>
            <h2
              className="text-4xl font-bold text-primary"
              style={{ fontFamily: "var(--font-Abhaya)" }}
            >
              100%
            </h2>
            <p
              className="text-lg text-gray-500"
              style={{ fontFamily: "var(--font-Montserrat)" }}
            >
              Quality Assurance
            </p>
          </div>
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
        <button className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-[#f5d1c3] transition-all duration-300">
          Explore Collection
        </button>
      </section>
    </div>
  );
};

export default Page;
