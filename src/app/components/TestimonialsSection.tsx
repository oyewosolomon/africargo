"use client"

import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

type ModalType = 'quote' | 'contact' | null;

const TestimonialsSection = () => {
  const [modalType, setModalType] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  const testimonials = [
    {
      name: "Mayowa Apata",
      title: "Logistics Manager",
      company: "GreenTech Solutions",
      image: "/assets/t-1.jpg",
      quote: "We rely on Africargo's reliable FCL shipping and dedicated account management to ensure our manufacturing supplies arrive on time and on budget."
    },
    {
      name: " Jane Wales",
      title: "Owner",
      company: "Cozy Crafts Boutique",
      image: "/assets/t.jpg",
      quote: "Africargo has been a game-changer for our small business. Their LCL options made international trade accessible and affordable, allowing us to reach new customers globally."
    },
    {
      name: "Supply Chain Director",
      company: "Multinational Corp",
      image: "/assets/t-2.jpg",
      quote: "As a multinational corporation, having reliable high-volume shipping is essential. Africargo's customized logistics solutions and white-glove service give us the peace of mind needed for expanding our global footprint."
    }
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/bg.jpg"
            alt="Office background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Main Title */}
        <div className="absolute top-8 left-0 right-0">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
            Trusted by Businesses of All Sizes
          </h1>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute top-28 -translate-y-1/2 w-full flex justify-end gap-3 px-4">
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Testimonials */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white text-black p-6 rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div className="text-sm">
                  <p className="font-semibold">- {testimonial.name}</p>
                  {testimonial.title && (
                    <p className="text-gray-600">{testimonial.title},</p>
                  )}
                  <p className="text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-800 py-16 px-4" id='contact-us'>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
            Ready to Streamline<br />Your Shipping?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => openModal('quote')}
              className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-colors"
            >
              Get a Free Quote
            </button>
            <button
              onClick={() => openModal('contact')}
              className="px-6 py-3 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Contact us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-6 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4">
              {modalType === 'quote' ? 'Get a Free Quote' : 'Contact Us'}
            </h3>
            <p className="text-gray-600 mb-4">
              {modalType === 'quote'
                ? 'Fill out your details and our team will get back to you with a tailored quote.'
                : 'Send us a message and we’ll respond promptly.'}
            </p>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="submit"
                className="bg-emerald-700 text-white font-semibold px-6 py-2 rounded-lg hover:bg-emerald-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialsSection;
