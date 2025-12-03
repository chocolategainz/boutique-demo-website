'use client';
import {useRef} from "react";
import styles from './ripple-transition.module.css';

export default function RippleEffect({children , onReveal}) {
    //const [index , setIndex]= useState(0); inital value. This is a useEffect React hook. useState in React allows a component to manage its own state. So when an action occurs the component re-renders due to the update of its state.  
    const containerRef = useRef(null); {/* useRef is a value that will always persist/remian unchanged regardless of whether the component re-renders, but it can be changed manually at any point. Null indicates that the useRef object is not targeting something specific throughout the code*/}

const handleClick = (e) => {
    {/*"On the click of a button, get the current geometry of the shape by accessing the DOM elements (i.e. div nodes) in relation to the current viewport */}
    const container = containerRef.current; 
    if (!container) return;
    
    const rect = container.getBoundingClientRect(); {/*Returns a position relative to the viewport */}

    const circle = document.createElement("span");
    const diameter = Math.max(rect.width , rect.height) * 2;
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.className = styles.circle;

    container.appendChild(circle);

    //Code to reveal next multimedia content after the ripple fades out
if (onReveal) {
    setTimeout(() => onReveal(), 300);//animation time in ms
}

//removes effect after animation ends
setTimeout(() => circle.remove(), 800);
};

    return (
<div ref={containerRef} className={styles.container} onClick={handleClick}>

 {children}
    
</div>
 );
}