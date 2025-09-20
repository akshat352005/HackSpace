import Navigation from "@/react-app/components/Navigation";
import Hero from "@/react-app/components/Hero";
import Events from "@/react-app/components/Events";
import Workshops from "@/react-app/components/Workshops";
import Community from "@/react-app/components/Community";
import Contact from "@/react-app/components/Contact";
import Footer from "@/react-app/components/Footer";
import DraggablePlanet from '@/react-app/components/DraggablePlanet';
import Starfield from '@/react-app/components/Starfield';
import CometLayer from '@/react-app/components/CometLayer';

export default function Home() {
    return (
      <div className="min-h-screen text-white relative draggable-container">
        <Starfield />
        <CometLayer />
        {/* All planets are now draggable and movable */}
      <DraggablePlanet 
        size={38} 
        color="from-red-400 to-amber-500" 
        initialX={85} 
        initialY={15} 
        glowIntensity={0.6}
        variant="textured"
        palette={{ a: '#7a1b1b', b: '#eab308', c: '#14b8a6', d: '#ef4444' }}
      />
        <DraggablePlanet
        size={20} 
        color="from-red-400 to-orange-500" 
        initialX={10} 
        initialY={25} 
        glowIntensity={0.5}
      />
      <DraggablePlanet 
        size={35} 
        color="from-purple-400 to-pink-500" 
        initialX={90} 
        initialY={70} 
        glowIntensity={0.7}
        rings={true}
        variant="gasGiant"
      />
       <DraggablePlanet 
        size={25} 
        color="from-green-400 to-emerald-500" 
        initialX={5} 
        initialY={60} 
        glowIntensity={0.6}
        variant="rocky"
        />
         <DraggablePlanet 
        size={15} 
        color="from-yellow-400 to-amber-500" 
        initialX={15} 
        initialY={80} 
        glowIntensity={0.4}
      />
      </div>
    );
  }

export function HomePage() {
  return (
    <div>
      <Home />
      <Navigation />
      <Hero />
      <Events />
      <Workshops />
      <Community />
      <Contact />
      <Footer />
    </div>
  );
}
