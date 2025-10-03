"use client";

import { useState, useEffect } from 'react';

const toRotate = [
  { line1: "Alejandro", line2: "Maldonado Chavez" },
  { line1: "Two", line2: "" }
];
const baseName = "Christopher";
const period = 3000;

export function AnimatedName() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [line1Text, setLine1Text] = useState('');
  const [line2Text, setLine2Text] = useState('');
  const [isAnimatingLine2, setIsAnimatingLine2] = useState(false);
  const [delta, setDelta] = useState(120);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [line1Text, line2Text, isDeleting, delta, loopNum]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const { line1: fullLine1, line2: fullLine2 } = toRotate[i];
    
    let newDelta = 120;

    if (isDeleting) {
      if (isAnimatingLine2) {
        setLine2Text(prev => prev.substring(0, prev.length - 1));
        if (line2Text === '') {
          setIsAnimatingLine2(false);
        }
      } else {
        setLine1Text(prev => prev.substring(0, prev.length - 1));
      }
      newDelta = 50;

      if (line1Text === '' && line2Text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setIsAnimatingLine2(false);
        newDelta = 300;
      }

    } else { // Typing
      if (!isAnimatingLine2) {
        setLine1Text(prev => fullLine1.substring(0, prev.length + 1));
        if (line1Text === fullLine1) {
          if (fullLine2) {
            setIsAnimatingLine2(true);
          } else {
            setIsDeleting(true);
            newDelta = period;
          }
        }
      } else {
        setLine2Text(prev => fullLine2.substring(0, prev.length + 1));
        if (line2Text === fullLine2) {
          setIsDeleting(true);
          newDelta = period;
        }
      }
    }
    
    setDelta(newDelta);
  }

  return (
    <h1 className="text-5xl font-headline font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
      <span className="block">{baseName} {line1Text}<span className="animate-pulse">{isDeleting || line1Text !== toRotate[loopNum % toRotate.length].line1 ? '' : '|'}</span></span>
      <span className="block">{line2Text}<span className="animate-pulse">{isAnimatingLine2 ? '|' : ''}</span></span>
    </h1>
  );
}
