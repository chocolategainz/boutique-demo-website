'use client';
import { useState, useRef } from 'react';
import RippleEffect from './RippleEffect';
import Media from "./Media";
import { gsap } from 'gsap/gsap-core';
import { useDrag } from '@use-gesture/react';

export default function Carousel() {
  const media = ['./Light Satin Dresses.mp4', './satin-heels-new-collections.mp4', './discount-on-all-gold-satin-dresses.png'];
  const [currentIndex, setCurrentIndex] = useState(0);
const mediaRef = useRef(null);
  const transitionTo = (newIndex) => {
    if (!mediaRef.current) return;

    const tl = gsap.timeline();
    tl.to(mediaRef.current, {
  opacity: 0,
  scale: 0.95,
  duration: 0.25,
  ease: 'power2.out'    
    })
    .call(() => setCurrentIndex(newIndex))
    .fromTo(
      mediaRef.current,
      {opacity: 0, scale:1.05 },
      {opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out'}
    );
  };

  const goToNextSlide = () => 
    transitionTo((currentIndex + 1) % media.length);

  const goToPrevSlide = () => 
    transitionTo((currentIndex - 1 + media.length) % media.length);

  {/*Swipe Logic */}
  const bind = useDrag(({ down, movement: [mx], direction: [dx] }) => {
    if (!down && Math.abs(mx) > 50) {
      //Swipe boundary
      if(dx > 0) goToPrevSlide(); //swipe right
      else goToNextSlide();
    }
  });
  

  return (
    
    <div className='wrapper'>
    <RippleEffect onReveal={goToNextSlide}>
      <div ref={mediaRef} {...bind()} className='media-wrapper'>
      <Media src={media[currentIndex]} />
      </div>
    </RippleEffect>

     {/*Optional nav buttons */} 
    <div className = "flex justify-between mt-4"> 
      <button onClick={goToPrevSlide} className="carousel-nav prev">Prev</button>
      <button onClick={goToNextSlide} className=" carousel-nav next ">Next</button>
   </div>
     </div>
  );
}
