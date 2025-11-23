import Video from "./video-player";

export default function Home() {
  return (
    <div className="Home">
{/*Navbar*/}
    <nav className="navbar flex font-medium text-lg  p-6 justify-evenly">
      {/*Logo*/}
    <a href ="#Tops">Tops</a>
    <a href ="#Dresses">Dresses</a>
    <a href ="#Denim">Denim</a>
    <a href ="#New-Collection">New Collections</a>
    </nav>
     <Video /> 
    </div>
  );
}
