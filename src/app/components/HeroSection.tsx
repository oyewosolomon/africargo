"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Nav from './Nav';

const HeroSection = () => {


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };




  const featureVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };


  return (
    <motion.div 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
    <Nav/>
      {/* Rest of the hero section remains the same */}
      <div className="relative flex flex-col">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
           <motion.div variants={containerVariants}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Effortless Logistics, Elevated Performance.
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Get competitive rates and reliable service, no matter where you&apos;re shipping or how much you&apos;re sending.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="bg-[#c1ff72] px-8 py-3 rounded-full font-medium">
                Start now
              </a>
              <a href="#" className="flex items-center text-gray-700 font-medium">
                Explore Our Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="h-full w-full"
            variants={imageVariants}
          >
            <Image 
              src="/assets/track-board-2.png" 
              alt="Tracking board preview" 
              width={800}
              height={600}
              priority={true}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div 
          className="max-w-4xl mx-auto w-full"
          variants={containerVariants}
        >
            <div className="grid grid-rows-3 md:grid-cols-3 gap-4">
            <motion.div
                
                className="flex flex-row justify-center place-items-center text-center text-black bg-[#c1ff72] py-3 px-2 rounded-lg font-medium"
                variants={featureVariants}
                whileHover="hover"
              
              >
                <div className='px-2'>
                    <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M8.5,6H6.7C8.2,4.7,10,4,12,4c0.3,0,0.6,0,0.9,0.1c0,0,0,0,0,0c0.5,0.1,1-0.3,1.1-0.9c0.1-0.5-0.3-1-0.9-1.1C12.7,2,12.4,2,12,2C9.6,2,7.3,2.9,5.5,4.4V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v4c0,0.6,0.4,1,1,1h4c0.6,0,1-0.4,1-1S9.1,6,8.5,6z M7,14.5c-0.6,0-1,0.4-1,1v1.8C4.7,15.8,4,14,4,12c0-0.3,0-0.6,0.1-0.9c0,0,0,0,0,0c0.1-0.5-0.3-1-0.9-1.1c-0.5-0.1-1,0.3-1.1,0.9C2,11.3,2,11.6,2,12c0,2.4,0.9,4.7,2.4,6.5H3c-0.6,0-1,0.4-1,1s0.4,1,1,1h4c0.3,0,0.6-0.2,0.8-0.4c0,0,0,0,0,0c0,0,0,0,0,0c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0-0.1,0-0.2c0,0,0-0.1,0-0.1v-4C8,14.9,7.6,14.5,7,14.5z M21,5.5c0.6,0,1-0.4,1-1s-0.4-1-1-1h-4c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.2,0.1-0.3,0.1c0,0,0,0,0,0c-0.1,0.1-0.2,0.1-0.2,0.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1v4c0,0.6,0.4,1,1,1s1-0.4,1-1V6.7c1.3,1.4,2,3.3,2,5.3c0,0.3,0,0.6-0.1,0.9c-0.1,0.5,0.3,1,0.9,1.1c0,0,0.1,0,0.1,0c0.5,0,0.9-0.4,1-0.9c0-0.4,0.1-0.7,0.1-1.1c0-2.4-0.9-4.7-2.4-6.5H21z M20.3,16.5c-0.1-0.1-0.2-0.2-0.3-0.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.1-0.1-0.2-0.1-0.3-0.1c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0h-4c-0.6,0-1,0.4-1,1s0.4,1,1,1h1.8c-1.4,1.3-3.3,2-5.3,2c-0.3,0-0.6,0-0.9-0.1c0,0,0,0,0,0c-0.5-0.1-1,0.3-1.1,0.9s0.3,1,0.9,1.1c0.4,0,0.7,0.1,1.1,0.1c2.4,0,4.7-0.9,6.5-2.4V21c0,0.6,0.4,1,1,1s1-0.4,1-1v-4C20.5,16.8,20.4,16.6,20.3,16.5C20.3,16.5,20.3,16.5,20.3,16.5z"></path></g></svg>
                </div>
                <div>
                    Automate pick/pack
                </div>
            </motion.div>
            <motion.div
                
                className="flex flex-row justify-center place-items-center text-center text-black bg-[#c1ff72] py-3 px-2 rounded-lg font-medium"
                variants={featureVariants}
                whileHover="hover"
              
              >
                <div className='px-2'>
                    <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 512 512" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path  d="M109.656,310.813c-32.25,0-58.484,26.219-58.484,58.469s26.234,58.5,58.484,58.5s58.469-26.25,58.469-58.5 S141.906,310.813,109.656,310.813z M109.656,396.234c-14.875,0-26.953-12.078-26.953-26.953s12.078-26.938,26.953-26.938 s26.938,12.063,26.938,26.938S124.531,396.234,109.656,396.234z"></path> <path d="M395.5,310.813c-32.234,0-58.469,26.219-58.469,58.469s26.234,58.5,58.469,58.5c32.281,0,58.5-26.25,58.5-58.5 S427.781,310.813,395.5,310.813z M395.5,396.234c-14.859,0-26.922-12.078-26.922-26.953s12.063-26.938,26.922-26.938 c14.906,0,26.969,12.063,26.969,26.938S410.406,396.234,395.5,396.234z"></path> <path d="M109.656,360.047c-5.109,0-9.234,4.141-9.234,9.234c0,5.109,4.125,9.25,9.234,9.25 c5.094,0,9.234-4.141,9.234-9.25C118.891,364.188,114.75,360.047,109.656,360.047z"></path> <path d="M395.5,360.047c-5.094,0-9.219,4.141-9.219,9.234c0,5.109,4.125,9.25,9.219,9.25 c5.125,0,9.266-4.141,9.266-9.25C404.766,364.188,400.625,360.047,395.5,360.047z"></path> <path d="M497.875,242.438l-71.234-114.281c-17.031-27.328-46.953-43.938-79.172-43.938H62.188 C27.844,84.219,0,112.063,0,146.406v203.609c0,13.766,11.156,24.922,24.906,24.922h15.531c-0.156-1.875-0.25-3.75-0.25-5.656 c0-38.281,31.156-69.469,69.469-69.469s69.469,31.188,69.469,69.469c0,1.906-0.109,3.781-0.25,5.656h91.469h55.969 c-0.156-1.875-0.266-3.75-0.266-5.656c0-38.281,31.172-69.469,69.453-69.469c38.313,0,69.484,31.188,69.484,69.469 c0,1.906-0.094,3.781-0.234,5.656h22.313c13.781,0,24.938-11.156,24.938-24.922v-58.234 C512,274.328,507.094,257.234,497.875,242.438z M201.719,205.875h-40.094v41.781h-25.828v-41.781H95.688v-23.703h106.031V205.875z M201.719,162.219H95.688v-23.703h106.031V162.219z M426.719,210.422c-2.188,3.953-6.344,6.406-10.875,6.406H296.438 c-6.875,0-12.438-5.578-12.438-12.438v-74.828c0-6.859,5.563-12.438,12.438-12.438H336.5c24.813,0,47.438,12.563,60.563,33.594 l29.344,47.094C428.781,201.656,428.922,206.484,426.719,210.422z"></path> </g> </g></svg>
                </div>
                <div>
                    Carrier options
                </div>
            </motion.div>
            <motion.div
                
                className="flex flex-row justify-center place-items-center text-center text-black bg-[#c1ff72] py-3 px-2 rounded-lg font-medium"
                variants={featureVariants}
                whileHover="hover"
              
              >
                <div className='px-2'>
                    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path> <path d="M2 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20 12L22 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 4V2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 22V20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                </div>
                <div>
                    Integrated tracking
                </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;