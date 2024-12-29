import "@/css/home.css"
import Header from "@/components/header";
import Hero from "@/components/hero";
import Button from "@/components/button";


export default function Home() {
  return (
        <main>
          <Header text="Portfolio."/>
          <div className="background-div">
            
            <Hero/>
            
              
          </div>
        </main>
  );
}
