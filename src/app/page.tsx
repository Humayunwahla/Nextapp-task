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
     
     
    </main>
  );
}
