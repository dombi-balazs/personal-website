import React, { useState, useEffect, useRef } from 'react';

interface FuturisticTextProps {
  text: string;
  scrambleSpeed?: number;
}

const FuturisticText: React.FC<FuturisticTextProps> = ({
  text,
  scrambleSpeed = 20,
}) => {
  const [displayText, setDisplayText] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const targetWord = text;
    let currentIteration = 0;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      const newText = targetWord
        .split("")
        .map((_char, index) => {
          if (index < currentIteration) {
            return targetWord[index];
          }
          
          return Math.round(Math.random()).toString();
        })
        .join("");

      setDisplayText(newText);

      if (currentIteration >= targetWord.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(targetWord);
      }

      currentIteration += 1 / 3;
    }, scrambleSpeed);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };

  }, [text, scrambleSpeed]);

  return (
    <div className="futuristic-text" aria-label={text} role="heading">
      {displayText.split('').map((char, index) => (
        <span 
          key={index} 
          className={
            char === text[index] 
              ? 'char-resolved'
              : 'char-scrambling'
          }
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default FuturisticText;