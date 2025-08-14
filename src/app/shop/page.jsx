"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function ShopPage() {
  const [sareeProducts, setSareeProducts] = useState([]);
  const [fakeProducts, setFakeProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("https://saree-api-rges.onrender.com").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/").then((res) => res.json()),
    ])
      .then(([sareeData, fakeData]) => {
        setSareeProducts(sareeData);
        setFakeProducts(fakeData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching APIs:", err);
        setLoading(false);
      });
  }, []);

  const renderProducts = (products, type) =>
    products.map((item) => (
      <Link
        href={{
          pathname: `/shop/${item.id}`,
          query: {
            type: type,
            data: encodeURIComponent(JSON.stringify(item)), // product object ko string me bhejna
          },
        }}
        key={item.id}
      >
        <div className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 border-primary bg-white cursor-pointer flex flex-col h-full">
          {/* Image */}
          <div className="w-full h-64 bg-gray-100 flex items-center justify-center p-4">
            <img
              src={item.image}
              alt={item.title}
              className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Details */}
          <div className="p-4 flex flex-col flex-1">
            <h2 className="text-lg font-semibold mb-2 text-primary">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-3 line-clamp-2">
              {item.description}
            </p>

            {/* Price & Button aligned bottom */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-xl font-bold text-primary">
                ₹{(item.price * 85).toFixed(0)}
              </span>
              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-all duration-300">
                View
              </button>
            </div>
          </div>
        </div>
      </Link>
    ));

  return (
    <div className="bg-white min-h-screen container mx-auto px-3 px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-primary">
        All Products Collection
      </h1>

      {loading ? (
        <p className="text-center text-lg text-primary">Loading products...</p>
      ) : (
        <>
          {/* Saree API Products */}
          <h2 className="text-2xl font-bold mb-5 text-primary">Sarees</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-10">
            {renderProducts(sareeProducts, "saree")}
          </div>

          {/* FakeStore API Products */}
          <h2 className="text-2xl font-bold mb-5 text-primary">
            Other Products
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {renderProducts(fakeProducts, "fake")}
          </div>
        </>
      )}
    </div>
  );
}
