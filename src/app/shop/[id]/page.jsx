"use client";
import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const type = searchParams.get("type"); // saree / fake

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  if (!id || !type) return;

  const dataParam = searchParams.get("data");
  if (dataParam) {
    // Agar data query me already mila hai (Saree API case), API call ki zaroorat nahi
    try {
      const parsedData = JSON.parse(decodeURIComponent(dataParam));
      setProduct(parsedData);
      setLoading(false);
      return;
    } catch (err) {
      console.error("Error parsing product data:", err);
    }
  }

  // FakeStore API ka case me API call
  let apiUrl = "";
  if (type === "fake") {
    apiUrl = `https://fakestoreapi.com/products/${id}`;
  }

  if (apiUrl) {
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setProduct(null);
        setLoading(false);
      });
  }
}, [id, type]);


  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-primary text-lg">
        Loading product details...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 text-lg">
        Product not found!
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen container mx-auto px-3 px-6 py-10">
      <Link href="/shop" className="text-primary underline mb-6 inline-block">
        ← Back to Products
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="bg-gray-100 flex items-center justify-center p-6 rounded-lg">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-[400px] object-contain"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold text-primary mb-4">
            {product.title}
          </h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <span className="block text-2xl font-bold text-primary mb-6">
            ₹{(product.price * 85).toFixed(0)}
          </span>
          <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
