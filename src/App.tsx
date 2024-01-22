import Card from "./components/Card"
import Profile from "./components/Profile"
import Works from "./components/Works"

import { useState, useEffect } from 'react';

export default function App() {
  const [cardY, setCardY] = useState(0);
  const [contentY, setContentY] = useState(0);
  
  const cardElm = document.getElementById("card");
  const contentElm = document.getElementById("content");
  const [cardOpacity, setCardOpacity] = useState(1.0);

  const handleScroll = () => {
    
    const card = Math.max((window.innerHeight / 2) - window.scrollY, 0);
    setCardY(card);
    setContentY(card + (window.innerHeight / 2));
    
  };

  useEffect(() => {
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
  }, [cardY, contentY])

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`sticky top-0 -z-10 h-screen absolute`} style={{ opacity: cardOpacity }}>
        <div id="card" className="fixed w-full z-10 bg-neutral-900 py-5" style={{ top: `${cardY}px` }}>
          <Card />
        </div>
      </div>
        
      <div id="content" className="absolute z-10 text-white m-auto left-0 right-0 max-w-6xl p-5" style={{ top: `${contentY}px`}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 w-full">
            <Profile />
            <Works />
          </div>

          <div className="text-center text-gray-500">&copy; 2024 yude</div>
      </div>
    </>
  )
}
