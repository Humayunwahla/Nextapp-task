import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Items from "./components/Items";


export default function Home() {
  return (
    <main className="p-10 ">
     <Navbar/>
     <Hero/>
     <Items/>
     
     <script src="http://localhost:8097"></script>
    </main>
    
  );
}
