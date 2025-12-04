"use client";
//import Video from "./video-player";
import Image from "next/image";
import Flipcard from "./Flipcard";
//import RippleEffect from "./RippleEffect";
import Carousel from "./Carousel";



export default function Home() {
  return (
    <div className="Home">
{/*Logo*/}
<div className="logo flex align-center justify-center"> {/*Flex only works on parent containers */}
   <Image src = "/Adobe Express - file-Perfect Logo Done.png" width={180} height={180} alt="picture of logo" />
</div>
{/*Navbar*/}
    <nav className="navbar flex font-medium text-lg  p-6 justify-evenly">
   <a href ="#New">New Collections</a> 
   <a href ="#Blouses">Blouses</a>
    <a href ="#Dresses">Dresses</a>
    <a href ="#Loungewear">Loungewear & Pyjamas</a> 
    </nav>

 
    {/* Video Player */}
    <Carousel/>

 {/**<Video /> */} 


     {/* Unique Selling Point Banner - U.S.P.B. */}
     <ul className="parent-banner flex justify-evenly font-medium text-lg p-4">
      <li>Free Shipping</li>
       <li>24/7 Support</li>
        <li>Free Returns</li>
         <li>Secure Payments</li>
          <li>Quality Guarantee</li>
     </ul>
{/*Main*/}

 <h2 className="title font-medium text-lg flex justify-center">Blouses</h2>

<div className="category flex align-center justify-evenly">
<Flipcard image = "/model_wearing_a_light_gold_satin_silk_blouse-one.png" 
imageTwo="/model_wearing_a_light_gold_satin_silk_blouse_two.png" />

<Flipcard image = "/model_wearing_a_burgundy_satin_silk_blouse_one.png"
imageTwo="/model_posing_while_wearing_a_burgundy_satin_silk-two.png"
/>

<Flipcard image = "/model_posing_while_wearing_a_sapphire-coloured_one.png" 
imageTwo = "/model_posing_while_wearing_a_sapphire-coloured_two.png"
/>
</div>

<h2 className="title font-medium text-lg flex justify-center">Dresses</h2>

<div className="category flex align-center justify-evenly">
<Flipcard image = "/model_posing_while_wearing_a_light-gold_coloured__dress-one.png" 
imageTwo="/model_posing_while_wearing_a_light-gold_coloured__dress-two.png" />

<Flipcard image = "/model_posing_while_wearing_a_burgundy-coloured_dress-one.png"
imageTwo="/model_posing_while_wearing_a_burgundy-coloured_dress-two.png"
/>

<Flipcard image = "/model_posing_while_wearing_a_sapphire-coloured_dress-one.png" 
imageTwo = "/model_posing_while_wearing_a_sapphire-coloured-two.png"
/>
</div>

<h2 className="title font-medium text-lg flex justify-center">Loungewear & Pyjamas</h2>

<div className="category flex align-center justify-evenly">
<Flipcard image = "/model_posing_while_wearing_light-gold_coloured_loungewear.png" 
imageTwo="/model_posing_while_wearing_light-gold_coloured_sa_loungewear2.png" />

<Flipcard image = "/model_posing_while_wearing_burgundy_coloured_satin-loungewear-one.png"
imageTwo="/model_posing_while_wearing_burgundy_coloured_satin-loungewear-two.png"
/>

<Flipcard image = "/model_posing_while_wearing_sapphire_coloured_satin-loungewear-one.png" 
imageTwo = "/model_posing_while_wearing_sapphire_coloured_satin-loungewear-two.png"
/>
</div>
{/* New Collection */}
<nav className="discount-code flex justify-center font-medium text-lg  p-6">
  CLAIM YOUR 25% OFF DISCOUNT CODE: L2CA469
</nav>
{/* Footer */}
<footer>
  <div className="">
    <h5>About</h5>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Curabitur a est pharetra, ultricies elit nec, bibendum justo. 
    </p>

<h5>Quick links</h5>
<a href ="#New">New Collections</a>
<a href ="#Blouses">Blouses</a>
<a href ="#Dresses">Dresses</a>
<a href ="#Loungewear">Loungewear & Pyjamas</a>
  </div>

  <h2>
  <a href="#2025-Aaron-Thomas">&copy; 2025 Aaron Thomas</a> - <a href = "#official-website">Website built by Dream Tank Studios</a>
</h2>
</footer>
     </div>
  );
}
