import React from 'react';

const Usecase = () => {
  const newsItems = [
    {
      id: 1,
      date: '19 Dec 2022',
      title: 'E-commerce',
      description: "Automate order fulfillment and expand delivery options.",
      image: '/assets/ecommerce.jpg',
      link: '#'
    },
    {
      id: 2,
      date: '17 Dec 2022',
      title: 'Retail',
      description: 'Provide customers with seamless tracking and timely delivery.',
      image: '/assets/retail.jpg',
      link: '#'
    },
    {
      id: 3,
      date: '16 Dec 2022',
      title: 'Logistics Providers',
      description: 'Simplify carrier management and optimize routes.',
      image: '/assets/luggage.jpg',
      link: '#'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto bg-white text-black">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold">Built for Every Business, <br /> Perfect for You</h2>
         
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.id} className="group">
              <a href={item.link} className="block">
                {/* Image Container */}
                <div className="aspect-[4/3] mb-4 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium mb-3 group-hover:text-lime-400 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 line-clamp-2">
                  {item.description}
                </p>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usecase;