import Video from "./video-player";
import Image from "next/image";
export default function Home() {
  return (
    <div className="Home">
{/*Logo*/}
<div className="logo flex align-center justify-center"> {/*Flex only works on parent containers */}
   <Image src = "/dream-tank-studios-logo.jpg" width={150} height={150} alt="picture of logo"/>
</div>
{/*Navbar*/}
    <nav className="navbar flex font-medium text-lg  p-6 justify-evenly">
    <a href ="#Tops">Tops</a>
    <a href ="#Dresses">Dresses</a>
    <a href ="#Denim">Denim</a>
    <a href ="#New-Collection">New Collections</a>
    </nav>
     <Video /> 
    </div>
  );
}
