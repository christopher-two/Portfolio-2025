"use client";

import { useEffect, useState } from "react";

const toRotate = ["Two", "Chavez"];
const baseName = "Christopher";
const longestWord = toRotate.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, toRotate[0]);
const typeDelayMs = 80;
const deleteDelayMs = 45;
const holdDelayMs = 1000;

export function AnimatedName() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [text, setText] = useState("");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncReducedMotion = () => {
      setReducedMotion(mediaQuery.matches);
    };

    syncReducedMotion();
    mediaQuery.addEventListener("change", syncReducedMotion);

    return () => {
      mediaQuery.removeEventListener("change", syncReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setText(toRotate[0]);
      return;
    }

    const timer = window.setTimeout(() => {
      tick();
    }, isHolding ? holdDelayMs : isDeleting ? deleteDelayMs : typeDelayMs);

    return () => {
      window.clearTimeout(timer);
    };
  }, [text, isDeleting, isHolding, loopNum, reducedMotion]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (isHolding) {
      setIsHolding(false);
      setIsDeleting(true);
      return;
    }

    let newText = '';
    if (isDeleting) {
      newText = fullText.substring(0, text.length - 1);
    } else {
      newText = fullText.substring(0, text.length + 1);
    }

    setText(newText);

    if (!isDeleting && newText === fullText) {
      setIsHolding(true);
    } else if (isDeleting && newText === '') {
      setIsDeleting(false);
      setLoopNum(prevLoop => prevLoop + 1);
    }
  };

  return (
    <h1 className="text-5xl font-headline font-bold tracking-tighter leading-[0.95] sm:text-6xl md:text-7xl lg:text-8xl">
      {baseName}{" "}
      <span className="relative inline-block align-baseline">
        <span aria-hidden="true" className="invisible inline-flex items-end whitespace-nowrap">
          {longestWord}
          <span className="ml-1 inline-block h-[0.92em] w-[0.07em]" />
        </span>
        <span className="absolute inset-0 inline-flex items-end whitespace-nowrap">
          <span className="inline-block align-baseline">{text}</span>
          <span aria-hidden="true" className="name-caret ml-1 inline-block h-[0.92em] w-[0.07em] align-[-0.08em] bg-current" />
        </span>
      </span>
    </h1>
  );
}
