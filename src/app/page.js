import Video from "./video-player";
import Image from "next/image";
import Section from "./Section";
import Flipcard from "./Flipcard";


export default function Home() {
  return (
    <div className="Home">
{/*Logo*/}
<div className="logo flex align-center justify-center"> {/*Flex only works on parent containers */}
   <Image src = "/Adobe Express - file-Perfect Logo Done.png" width={180} height={180} alt="picture of logo" />
</div>
{/*Navbar*/}
    <nav className="navbar flex font-medium text-lg  p-6 justify-evenly">
    <a href ="#Tops">Tops</a>
    <a href ="#Dresses">Dresses</a>
    <a href ="#Denim">Denim</a>
    <a href ="#New-Collection">New Collections</a>
    </nav>
     <Video /> 
     {/* Unique Selling Point Banner - U.S.P.B. */}
     <ul className="parent-banner flex justify-evenly font-medium text-lg p-4">
      <li>Free Shipping</li>
       <li>24/7 Support</li>
        <li>Free Returns</li>
         <li>Secure Payments</li>
          <li>Quality Guarantee</li>
     </ul>
{/*Main*/}
  <h2 className="title font-medium text-lg p-4 flex justify-center">Top Monthly Sellers</h2>

  <div className="category flex align-center justify-evenly">
<Section image="/Vintage fashion with classic accessories outdoors-front.jpg"
imageTwo="/Vintage fashion with classic accessories outdoors-back.jpg"
/>
<Flipcard image="Trendy fit young female athlete standing in studio with hand on waist-front.jpg" 
imageTwo="/Trendy fit young female athlete standing in studio with hand on waist-back.jpg"/>

<Flipcard image = "/Joyful Woman Posing Against Pink Background-front.jpg" 
imageTwo="/Joyful Woman Posing Against Pink Background-back.jpg"/>  
</div>

 <h2 className="title font-medium text-lg flex justify-center">Denim</h2>

<div className="category flex align-center justify-evenly">
<Flipcard image = "/A woman with curly hair wearing denim-front.jpg" 
imageTwo="/A woman with curly hair seated-back.jpg" />

<Flipcard image = "/Blond Woman Wearing Jeans and Leather Jacket Standing at Entrance to Old Building-front.jpg"
imageTwo="/Fashion Female Model Wearing Jeans and Leather Jacket Standing at Old Building Facade-back.jpg"
/>

<Flipcard image = "/Woman In Black Long-sleeved Shirt And Blue Denim Skirt-front.jpg" 
imageTwo = "/Woman In Black Long-sleeved Shirt And Blue Denim Skirt-back.jpg"
/>
</div>



     </div>
  );
}
