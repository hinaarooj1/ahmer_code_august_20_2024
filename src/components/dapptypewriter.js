import { useState, useEffect, useRef } from "react";

// Custom hook for the typewriter effect
const useTypewriter = (strings, typeSpeed = 30, maxLines = 4) => {
  const [currentText, setCurrentText] = useState("");
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [typedText, setTypedText] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    if (isVisible && paragraphIndex < strings.length && typedText.length < maxLines) {
      const currentString = strings[paragraphIndex];
      const interval = setInterval(() => {
        if (currentText.length < currentString.length) {
          // Append the next character to the current text
          setCurrentText((prev) => prev + currentString[currentText.length]);
        } else {
          // Once the paragraph is typed out, add it to typedText
          setTypedText((prev) => [...prev, currentString]);
          setCurrentText("");
          setParagraphIndex((prev) => prev + 1);
        }

        // Stop typing if max number of lines is reached
        if (typedText.length >= maxLines) {
          clearInterval(interval);
        }
      }, typeSpeed);

      return () => clearInterval(interval);
    }
  }, [currentText, paragraphIndex, strings, typeSpeed, isVisible, typedText, maxLines]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (textContainerRef.current) {
      observerRef.current.observe(textContainerRef.current);
    }

    return () => {
      if (textContainerRef.current) {
        observerRef.current.unobserve(textContainerRef.current);
      }
    };
  }, []);

  return { currentText, typedText, textContainerRef };
};

export default useTypewriter;
