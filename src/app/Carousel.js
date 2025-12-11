'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Media from "./Media";


export default function Carousel() {
 
  {/*We must make an array of objects describing the src, title, subtitle, button, and link */}
  const slideshow = [
    {
src: './midjourney-editor-Three-women-sipping-champagne-horizontal.png',
title: 'Shop Now',
subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a est pharetra, ultricies elit nec, bibendum justo.',
button: 'Shop Now',
link: '/shop'
    },

    {
      src: './u3814539668_Yellow_Gold_Satin_--ar_7758_--motion_low_--video__bd0e84be-4047-4162-bc11-d27a7d28343f_1.mp4',
      title: 'Our Mission',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      button: 'Our Mission',
      link: '/mission'

    },

  {
    src: './Woman_posing_in_a_sapphire_Satin_dress_with_a_.mp4',
    title: 'The Dress Collection',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a est pharetra, ultricies elit nec, bibendum justo.',
    button: 'Explore Our Collection',
    link: '/collection'
  },
{
  src: './woman-wearing-white-robe-on-laptop.jpg',
  title: 'Discount Offers',
  subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  button: 'View Our Latest Discount Offers',
  link: '/offers'
}
     
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slideshow.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slideshow.length) % slideshow.length);
  };

  const handleDragEnd = (_event, info) => {
    const swipe = info.offset.x;
    if (swipe < -140) goToNextSlide();   // swipe left
    if (swipe > 140) goToPrevSlide();    // swipe right
  };


const currentSlide = slideshow[currentIndex];   

  return (
    <div style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          style={{ cursor: "grab" }}
          initial={{ opacity: 0, x: 300 }}      // start off to the right and invisible
          animate={{ opacity: 1, x: 0 }}        // animate into center
          exit={{ opacity: 0, x: -300 }}        // exit to the left
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
        
    <Media src={currentSlide.src} />

{/*Overlay Text & CTA */}
<div className='absolute left-10 top-120 -translate-y-1/2  max-w-sm'>

 <h2 className='text-3xl mb-2 drop-shadow-lg' id='title'>
  {currentSlide.title}
 </h2>
 <p className='text-lg text-2x1 mb-4 drop-shadow-md font-bold'>
  {currentSlide.subtitle}
 </p>
 <a href={currentSlide.link} className='inline-block px-6 py-3 bg-white text-black font-medium rounded-lg shadow-lg hover:bg-gray-200 transition'>
  {currentSlide.button}
 </a>

</div>
</motion.div>
    </AnimatePresence>

      {/* BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '1rem' }}>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
     
    </div>
  );
}
