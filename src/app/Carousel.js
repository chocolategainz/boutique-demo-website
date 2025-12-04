'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Media from "./Media";


export default function Carousel() {
  const media = [
    './Light Satin Dresses.mp4',
    './satin-heels-new-collections.mp4',
    './woman-wearing-white-robe-on-laptop.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleDragEnd = (_event, info) => {
    const swipe = info.offset.x;
    if (swipe < -200) goToNextSlide();   // swipe left
    if (swipe > 200) goToPrevSlide();    // swipe right
  };

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
          <Media src={media[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* BUTTONS */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
}
