import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Media from "./Media";

export default function Carousel() {
  const media = [
    './Light Satin Dresses.mp4',
    './satin-heels-new-collections.mp4',
    './discount-on-all-gold-satin-dresses.webp'
  ];

  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleDragEnd = (_event, info) => {
    const swipe = info.offset.x;

    if (swipe < -50) goToNextSlide(); // swipe left
    if (swipe > 50) goToPrevSlide();  // swipe right
  };

  return (
    <div className="carousel-container" style={{ overflow: 'hidden', position: 'relative', width: '100%' }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          ref={carouselRef}
          drag="x"
          dragConstraints={{ left: -window.innerWidth, right: window.innerWidth }} // full-width drag
          onDragEnd={handleDragEnd}
          style={{ cursor: "grab" }}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }} // smooth animation
        >
          <Media src={media[currentIndex]} />
        </motion.div>
      </AnimatePresence>

      {/* Optional buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
        <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
  );
}
