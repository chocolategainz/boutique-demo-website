'use client';
import { useState, useRef } from 'react';

import Media from "./Media";
import { gsap } from 'gsap/gsap-core';
import { useDrag } from '@use-gesture/react';

export default function Carousel() {
  const media = ['./Light Satin Dresses.mp4', './satin-heels-new-collections.mp4', './discount-on-all-gold-satin-dresses.png'];
  
const [currentIndex, setCurrentIndex] = useState(0);
const containerRef = useRef(null);
const mediaRef = useRef(null);

  const transitionTo = (newIndex, direction) => {
    if (!mediaRef.current) return;
const width = containerRef.current.offsetWidth;

    const tl = gsap.timeline();
    tl.to(mediaRef.current, {
      x: direction * width,
  opacity: 0,
  scale: 0.95,
  duration: 0.25,
  ease: 'power3.out'    
    })
tl.to(mediaRef.current, { opacity: 0, scale: 0.95, duration: 0.25 })
  .call(() => setCurrentIndex(newIndex))
  .fromTo(mediaRef.current,
    { opacity: 0, scale: 1.05 },
    { opacity: 1, scale: 1, duration: 0.35, ease: 'power3.out' },
    "-=0.1" // start slightly before the previous fades out
  );
  }
  const goToNextSlide = () => transitionTo((currentIndex + 1) % media.length, 1);
  const goToPrevSlide = () => transitionTo((currentIndex - 1 + media.length) % media.length, -1);

  {/*Swipe Logic */}
  const bind = useDrag(({ down, movement: [mx], direction: [dx], velocity, cancel }) => {
    if (!mediaRef.current) return;
    const width = containerRef.current.offsetWidth;
  
  const resistance = 0.4;
  const dragX = down ? mx * resistance : 0;

  gsap.to(mediaRef.current, {x: dragX, duration: 0});
  if(!down) {
    if(Math.abs(mx) > width / 3 || velocity > 0.5) {
      if (dx > 0)goToPrevSlide(); //swipes right
      else goToNextSlide(); //swipes left
         cancel();
    } else {
  gsap.to(mediaRef.current, { x: 0, duration: 0.3, ease: 'power3.out' });
  
      }
    }
  });
  

  return (
    
    <div ref = {containerRef} className='wrapper' style={{ overflow: 'hidden', position: 'relative' }}>
   
      <div ref={mediaRef} {...bind()} className='media-wrapper' style={{ cursor: 'grab' }}>
      <Media src={media[currentIndex]} />
      </div>
    

     {/*Optional nav buttons */} 
    <div className="flex justify-between mt-4">
       <button onClick={goToPrevSlide}>Prev</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
     </div>
  );
}
