
export default function Video() {
return (
    <div className="flex justify-center w-auto overflow-visible"> 
<video autoPlay muted loop className = " w-screen h-[84vh] object-cover"> 
    <source src="a-woman-wearing-a-black-dress.mp4" type="video/mp4" />
    <source src= "a-woman-wearing-a-black-dress.ogg" type = "video/ogg" />
    Your browser does not support the video tag
</video>
</div>
 );
}