export default function Media({ src }) {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  
  if (isVideo) {
    return <video src={src} autoPlay muted loop className="w-screen h-[84vh] object-cover" />;
  } else {
    return <img src={src} alt="carousel media" draggable= "false" className="w-screen h-[84vh] object-cover select-none pointer-events-none" />;
  }
}