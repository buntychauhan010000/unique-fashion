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
    console.log(e, "EVENT");
    console.log(e.target.value, "EVENT");

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_8s1v9ao", // ✅ Service ID
        "template_pxiz4fi", // ✅ Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "V0XUZfQBWkhDgH6uH" // ✅ Public Key
      )
      .then(() => {
        toast.success("Message sent successfully! 🎉");

        // ✅ Clear form after success
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 font-Montserrat">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-3 font-Montserrat"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-3 font-Montserrat"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded mb-3 font-Montserrat"
          rows="4"
        ></textarea>

        <PrimaryButton label="Send Message" type="submit" className="w-full" />
      </form>
    </div>
  );
}
