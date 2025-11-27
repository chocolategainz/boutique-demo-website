"use client";

export default function FlipcardThree({image, imageTwo }) {
    return (
<div className="FlipcardThree">
{/*Hover Elements*/}
<div className="group w-72 h-96 [perspective:1000px]">
<div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

{/* Front */}
<div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl [backface-visibility:hidden]">
    <img src= {image} alt="dress" className="w-full h-full object-cover"/>
</div>

{/* Back */}
<div className="absolute inset-0 rounded-xl overflow-hidden shadow-xl [transform:rotateY(180deg)] [backface-visibility:hidden]">
<img src = {imageTwo} alt="model wearing dress" className="w-full h-full object-cover" />
   </div>

  </div>
 </div>
</div>
    );
} 