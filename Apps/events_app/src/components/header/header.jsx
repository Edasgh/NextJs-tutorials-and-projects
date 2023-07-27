// import Image from "next/image";
import Link from "next/link";


const HeaderComponent=()=>{
   return(
    <header>
     <div className="header-comp">
       <Link href="/"><h2 className="app-logo" >myEvents</h2></Link>
    <nav className="navbar">
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/about-us">About Us</Link>
    </nav>
  </div>
  <p>Get Access To All The Events in Your City</p>
    </header>
  )
}

export default HeaderComponent;