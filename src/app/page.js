import Video from "./video-player";

export default function Home() {
  return (
    <div className="Home">
{/*Navbar*/}
    <nav className="navbar flex justify-center justify-evenly bg-cyan-500">
      {/*Logo*/}
    <a href ="#Tops">Tops</a>
    <a href ="#Dresses">Dresses</a>
    <a href ="#Denim">Denim</a>
    <a href ="#New-Collection">New Collections</a>
    </nav>
    <div className = "video">
      <Video />
    </div>
    </div>
  );
}
