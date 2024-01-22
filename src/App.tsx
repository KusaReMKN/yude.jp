import Card from "./components/Card"
import Profile from "./components/Profile"
import Links from "./components/Links"
import Keys from "./components/Keys"
import Activities from "./components/Activities"
import Footer from "./components/Footer"
import Mutuals from "./components/Mutuals"

import { useState, useEffect } from 'react';

export default function App() {
  const [cardY, setCardY] = useState(0);
  const [contentY, setContentY] = useState(0);
  const [cardOpacity, setCardOpacity] = useState(1.0);
  
  const handleScroll = () => {
    const card = Math.max((window.innerHeight / 2) - window.scrollY, 100);
    setCardY(card);

    const mutualsElm = document.getElementById("mutuals");
    let mutualsY = 0;
    if (mutualsElm) {
      mutualsY += mutualsElm.scrollHeight;
    }
    setContentY(card + (window.innerHeight / 2) + mutualsY * 2);

    const cardElm = document.getElementById("card");
    const contentElm = document.getElementById("content");
    const a = cardElm?.getBoundingClientRect().bottom
    const b = contentElm?.getBoundingClientRect().top

    if (a && b) {
      if (a - b > 0 && a - b < 100) {
        setCardOpacity((100 - (a - b)) / 100)
      } else if (a - b < 0) {
        setCardOpacity(100)
      } else {
        setCardOpacity(0)
      }
    }
  };

  useEffect(() => {
    handleScroll();
    
    const mutualElm = document.getElementById("mutuals");
    if (mutualElm) {
      window.scrollTo(0, mutualElm.scrollHeight)
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <div id="mutuals">
      <Mutuals />
    </div>
    <div className="flex justify-center">
      <div className={`sticky h-screen absolute`} style={{ opacity: cardOpacity, marginTop: `${document.getElementById("mutuals")?.offsetHeight}px` }}>
        <div id="card" className="fixed bg-neutral-900 py-5 -ml-40 -mt-20" style={{ top: `${cardY}px` }}>
          <Card />
        </div>
      </div>
        
      <div id="content" className="absolute text-white max-w-6xl" style={{ top: `${contentY}px`}}>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-5 w-full">
          <Profile />
          <Links />
          <Keys />
          <Activities />
        </div>

        <div className="mb-5" id="test">
          <Footer />
        </div> 
      </div>
    </div>
    </>
  )
}
