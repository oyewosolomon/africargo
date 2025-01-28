import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Jane Doe",
      title: "Logistics Manager",
      company: "GreenTech Solutions",
      image: "https://randomuser.me/api/portraits/men/31.jpg",
      quote: "We rely on Africargo's reliable FCL shipping and dedicated account management to ensure our manufacturing supplies arrive on time and on budget."
    },
    {
      name: "John Smith",
      title: "Owner",
      company: "Cozy Crafts Boutique",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Africargo has been a game-changer for our small business. Their LCL options made international trade accessible and affordable, allowing us to reach new customers globally."
    },
    {
      name: "Supply Chain Director",
      company: "Multinational Corp",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
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
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
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
      <div className="bg-emerald-800 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-8">
            Ready to Streamline<br />Your Shipping?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="px-6 py-3 bg-yellow-300 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-colors">
              Get a Free Quote
            </button>
            <button className="px-6 py-3 text-white hover:bg-white/10 font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
              Contact us
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;