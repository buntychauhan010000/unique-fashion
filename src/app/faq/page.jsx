"use client";
import React, { useState } from "react";

const faqsData = [
  {
    question: "What fabrics are used in your sarees?",
    answer:
      "We use premium fabrics like pure silk, georgette, chiffon, and cotton blends sourced from skilled artisans across India.",
  },
  {
    question: "Do you provide customization?",
    answer:
      "Yes, we offer blouse stitching and saree customization services to ensure a perfect fit for every client.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Orders are usually delivered within 5–7 working days in India, and 10–15 days for international orders.",
  },
  {
    question: "Are your sarees handwoven?",
    answer:
      "Yes, most of our sarees are handcrafted by skilled artisans, ensuring authenticity and high quality.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide with reliable courier partners to ensure your saree reaches you safely.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Returns are accepted within 7 days of delivery if the product is unused and in original packaging.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer beautiful gift wrapping for all orders on request, perfect for special occasions.",
  },
  {
    question: "How can I take care of my saree?",
    answer:
      "We recommend dry cleaning silk sarees and gentle handwashing for cotton sarees to preserve their beauty.",
  },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="bg-[#fff8f5] min-h-screen py-16 px-6 md:px-20"
      style={{
        fontFamily: "var(--font-Montserrat)",
      }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 font-Montserrat text-primary">
        Frequently Asked Questions
      </h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqsData.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-[#f5d1c3] rounded-xl shadow-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-Montserrat font-medium text-[#5a2a27] focus:outline-none"
            >
              {faq.question}
              <span className="text-[#c0392b]  text-2xl transition-transform duration-300">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`px-6 text-[#5a2a27] transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100 py-3"
                  : "max-h-0 opacity-0 py-0"
              } overflow-hidden`}
              style={{
                fontFamily: "var(--font-Montserrat)",
              }}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
