'use client';
import { useState } from 'react';
import RippleEffect from './RippleEffect';
import Media from "./Media";

export default function Carousel() {
  const media = ['./Light Satin Dresses.mp4', './satin-heels-new-collections.mp4', './discount-on-all-gold-satin-dresses.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  return (
    <RippleEffect onReveal={goToNextSlide}>
      <Media src={media[currentIndex]} />
    </RippleEffect>
  );
}
