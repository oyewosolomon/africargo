"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      };

    return (
        <nav className="flex items-center justify-between mb-16">
        <motion.div 
            className="flex items-center"
            variants={itemVariants}
          >
            <Link href="/">
              <Image 
                src="/assets/logo-2.png" 
                alt="Africargo" 
                width={140} 
                height={30}
                className="object-contain"
              />
            </Link>
          </motion.div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black p-2"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <Menu size={24} className='text-black' />
          </button>
  
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">Home</a>
            <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">About us</a>
            <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">Track shipment</a>
            <a href="#contact-us" className="text-gray-700 hover:text-lime-400 font-bold">Contact us</a>
            <a href="#" className="bg-[#c1ff72] px-6 py-2 rounded-full font-bold">
              Get in touch
            </a>
          </div>
  
          {/* Mobile sidebar */}
          <div className={`
            fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            md:hidden
          `}>
            <div className="p-4">
              <button 
                className="mb-8 p-2 text-black"
                onClick={toggleSidebar}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col space-y-6">
                <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">Home</a>
                <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">About us</a>
                <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">Track shipment</a>
                <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">Contact us</a>
                <a href="#" className="text-gray-700 hover:text-lime-400 font-bold">FAQ</a>
                <a href="#" className="bg-[#c1ff72] text-black px-6 py-2 rounded-full font-bold text-center">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
  
          {/* Overlay */}
          
          {isOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={toggleSidebar}
            />
          )}
        </nav>
  
    );
}

export default Nav;