"use client";
import React, { useEffect, useState } from "react";

function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); // bina filter ke direct sab products set karo
        setLoading(false);
        console.log("Products fetched successfully:", data);
        
      });
  }, []);

  return (
    <div className="bg-white min-h-screen px-6 py-10">
      <h1
        className="text-3xl font-bold text-center mb-10 text-primary"
        style={{ fontFamily: "var(--font-Abhaya)" }}
      >
        All Products Collection
      </h1>

      {loading ? (
        <p
          className="text-center text-lg text-primary"
          style={{ fontFamily: "var(--font-Montserrat)" }}
        >
          Loading products...
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 border-primary bg-white"
            >
              {/* Image Wrapper */}
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2
                  className="text-lg font-semibold mb-2 text-primary"
                  style={{ fontFamily: "var(--font-Kaisei)" }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-gray-600 mb-3 line-clamp-2"
                  style={{ fontFamily: "var(--font-Montserrat)" }}
                >
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-xl font-bold text-primary"
                    style={{ fontFamily: "var(--font-Montserrat)" }}
                  >
                    ₹{(item.price * 85).toFixed(0)}
                  </span>
                  <button
                    className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300"
                    style={{ fontFamily: "var(--font-Montserrat)" }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
