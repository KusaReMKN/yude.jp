import Card from "./components/Card"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import React, { useState, useEffect } from 'react';

export default function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [cardY, setCardY] = useState(0);
  const [contentY, setContentY] = useState(0);

  const handleScroll = () => {
    const card = Math.max((window.innerHeight / 2) - window.scrollY, 0);
    setCardY(card);

    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const currentPosition = window.scrollY;

    const scrollPercentage = (currentPosition / (fullHeight - windowHeight));

    setScrollPercentage(scrollPercentage);
    setContentY(card + (window.innerHeight / 2));
    console.log(scrollPercentage)
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-0 h-screen flex justify-center bg-neutral-900 absolute">
          <div className="fixed w-full z-10 bg-neutral-900" style={{ top: `${cardY}px` }}>
            <Card />
            <p className="text-white">{document.documentElement.clientHeight}, {(window.innerHeight / 2) - window.scrollY}</p>
            </div>
        </div>
        
        <div className="flex justify-center absolute -z-10" style={{ top: `${contentY}px` }}>
        <div className="text-white">
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        <p>AAAAAAAAAA</p>
        </div>
      </div>
    </div>
      
  )
}
