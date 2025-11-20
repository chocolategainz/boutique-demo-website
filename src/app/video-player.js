
export default function Video() {
return (
    <div className="video"> 
<video width = "500" height="500" autoPlay muted loop>
    <source src="clip.mp4" type="video/mp4" />
    <source src= "clip.ogg" type = "video/ogg" />
    Your browser does not support the video tag
</video>
</div>
 );
}