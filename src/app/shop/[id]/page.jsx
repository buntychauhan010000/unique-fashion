"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function ProductDetails() {
  const { id } = useParams(); // dynamic route ka id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        });
    }
  }, [id]);

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
    <div className="bg-white min-h-screen  container mx-auto px-3 px-6 py-10">
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
