import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TextCycle = ({ texts = [] }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(texts.length);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, 3000); // Change 3000 to adjust display time per text in milliseconds
    }, 3000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  const textVariants = {
    hidden: { y: "100%", opacity: 0 }, // Initially outside the box
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
      <span className="text-purple-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide-6 text-center leading-tight [&_li]:block">
          <li>Good people creating great work</li>
          <li>Formed by strategic insights</li>
          <li>Data that informs & predicts</li>
          <li>Media that inspires action</li>
          <li>& creative that makes connections</li>
          <li>That delivers awesome results</li>
          <li aria-hidden="true">Good people creating great work</li>
        </ul>
      </span>
    </div>
  );
};

export default TextCycle;
