"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";
import PrimaryButton from "@/components/common/PrimaryButton";


export default function BookNowPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8s1v9ao", // Service ID
        "template_pxiz4fi", // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "V0XUZfQBWkhDgH6uH" // Public Key
      )
      .then(() => {
        toast.success("Message sent successfully! 🎉");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <Toaster position="top-right" reverseOrder={false} />

      {/* ✅ Navbar */}
      {/* <NavBar /> */}

      {/* ✅ Page Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 md:py-24">
        <div
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <h2 className="text-3xl font-bold text-center mb-6 font-Montserrat text-primary">
            Contact Us
          </h2>
          <p className="text-gray-600 text-center mb-8">
            We'd love to hear from you! Fill out the form below and our team
            will get back to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg font-Montserrat focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg font-Montserrat focus:ring-2 focus:ring-primary outline-none"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 border rounded-lg font-Montserrat focus:ring-2 focus:ring-primary outline-none"
            ></textarea>

            <PrimaryButton
              label="Send Message"
              type="submit"
              className="w-full py-3 text-lg"
            />
          </form>
        </div>
      </main>

      {/* ✅ Footer */}
      {/* <Footer /> */}
    </div>
  );
}
