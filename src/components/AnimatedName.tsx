"use client";

import { useState, useEffect } from 'react';

const toRotate = ["Two", "Chavez"];
const baseName = "Christopher";
const period = 2000; // Time to display full text before deleting

export function AnimatedName() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(100 - Math.random() * 50);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    
    let newText = '';
    if (isDeleting) {
      newText = fullText.substring(0, text.length - 1);
    } else {
      newText = fullText.substring(0, text.length + 1);
    }

    setText(newText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5);
    }

    if (!isDeleting && newText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && newText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100 - Math.random() * 50);
    }
  }

  return (
    <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl whitespace-nowrap">
      {baseName} {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}
