// import { useState, useEffect, useRef } from "react";

// // Custom hook for the typewriter effect
// const useTypewriter = (strings, typeSpeed = 40) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [paragraphIndex, setParagraphIndex] = useState(0);
//   const [typedText, setTypedText] = useState([]);
//   const [isVisible, setIsVisible] = useState(false); // State to track visibility
//   const textContainerRef = useRef(null); // Reference to track the container height
//   const observerRef = useRef(null); // Reference for the intersection observer

//   // Function to handle typewriting animation
//   useEffect(() => {
//     if (isVisible && paragraphIndex < strings.length) {
//       const interval = setInterval(() => {
//         if (
//           textContainerRef.current &&
//           textContainerRef.current.clientHeight >= 330
//         ) {
//           clearInterval(interval);
//           return; // Stop typing when height exceeds 400px
//         }

//         if (currentIndex < strings[paragraphIndex].length) {
//           setCurrentText(
//             (prev) => prev + strings[paragraphIndex][currentIndex]
//           );
//           setCurrentIndex((prev) => prev + 1);
//         } else {
//           clearInterval(interval);
//           setTypedText((prev) => [...prev, strings[paragraphIndex]]);
//           setCurrentText("");
//           setCurrentIndex(0);
//           if (paragraphIndex < strings.length - 1) {
//             setParagraphIndex((prev) => prev + 1);
//           }
//         }
//       }, typeSpeed);

//       return () => clearInterval(interval);
//     }
//   }, [currentIndex, paragraphIndex, strings, typeSpeed, isVisible]);

//   // Intersection Observer setup
//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting); // Update visibility state
//       },
//       { threshold: 0.1 } // Trigger when 10% of the section is visible
//     );

//     if (textContainerRef.current) {
//       observerRef.current.observe(textContainerRef.current);
//     }

//     return () => {
//       if (textContainerRef.current) {
//         observerRef.current.unobserve(textContainerRef.current);
//       }
//     };
//   }, []);

//   return { currentText, typedText, textContainerRef };
// };

// export default useTypewriter;




// 
import { useState, useEffect, useRef } from "react";

// Custom hook for the typewriter effect
const useTypewriter = (strings, typeSpeed = 40, maxLines = 4) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [typedText, setTypedText] = useState([]);
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const textContainerRef = useRef(null); // Reference to track the container height
  const observerRef = useRef(null); // Reference for the intersection observer

  // Function to handle typewriting animation
  useEffect(() => {
    if (isVisible && paragraphIndex < strings.length && typedText.length < maxLines) {
      const interval = setInterval(() => {
        // Stop typing when the max number of lines is reached
        if (typedText.length >= maxLines) {
          clearInterval(interval);
          return;
        }

        // Continue typing the current paragraph
        if (currentIndex < strings[paragraphIndex].length) {
          setCurrentText((prev) => prev + strings[paragraphIndex][currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          // Move to the next paragraph
          setTypedText((prev) => [...prev, currentText]);
          setCurrentText("");
          setCurrentIndex(0);
          setParagraphIndex((prev) => prev + 1);

          // Stop if max number of lines is reached
          if (typedText.length >= maxLines) {
            clearInterval(interval);
          }
        }
      }, typeSpeed);

      return () => clearInterval(interval);
    }
  }, [currentIndex, paragraphIndex, strings, typeSpeed, isVisible, typedText, maxLines]);

  // Intersection Observer setup
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Update visibility state
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
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
