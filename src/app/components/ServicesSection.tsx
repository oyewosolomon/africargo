import React from 'react';
import { Package, MapPin, Clock, Plane } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-[#c1ff72]" />,
      title: "Safe Packing",
      description: "Regulations must be circumvented in global supply chains."
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#c1ff72]" />,
      title: "Ship Everywhere",
      description: "Regulations are frequently contested in global supply chains."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#c1ff72]" />,
      title: "In Time Delivery",
      description: "International supply chains involve difficult regulations."
    },
    {
      icon: <Plane className="w-8 h-8 text-[#c1ff72]" />,
      title: "Fastest Shipping",
      description: "International supply chains are subject to stringent regulations."
    }
  ];

  return (
    <div className="max-w-7xl bg-white mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-12">
        <div className='text-black'>
          <h2 className="text-lime-600 font-bold mb-4 uppercase tracking-wide">Why Africargo</h2>
          <h3 className="text-4xl font-bold mb-6">Why should you choose our services, here are the advantages we offer</h3>
          <p className="text-gray-600 mb-8">
            We take great pride in offering the best shipping and transportation services available anywhere in the world, utilizing software for tracking, processing, and communications, along with our knowledgeable staff&apos;s decades of experience!
          </p>
          <button className="bg-lime-500 text-white px-8 py-3 rounded-lg hover:bg-lime-600 transition-colors">
            Get a Free Quote
          </button>
        </div>

        <div className="grid gap-12">
          {services.map((service, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;