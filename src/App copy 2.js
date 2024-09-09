import React, { useRef, useEffect } from 'react';
import { TweenLite, TweenMax, Linear } from 'gsap';
import './app.css'
const Carousel3D = () => {
  const stageRef = useRef(null);
  const boxesRef = useRef([]);
  const angle = 360 / 13; // 13 is the number of '.box' elements

  useEffect(() => {
    const stage = stageRef.current;
    const boxes = boxesRef.current;

    // Set up the 3D perspective and initial rotation of the boxes
    TweenLite.set(stage, {
      css: {
        perspective: 1100,
        transformStyle: 'preserve-3d',
      },
    });

    boxes.forEach((element, index) => {
      TweenLite.set(element, {
        css: {
          rotationY: index * angle,
          transformOrigin: '50% 50% -420px',
        },
      });

      element.dataset.rotationY = index * angle;
    });

    // Auto-play rotation
    const autoplay = () => {
      TweenMax.to(boxes, 10, {
        rotationY: "+=360",
        repeat: -1,
        ease: Linear.easeNone,
      });
    };

    autoplay();

    // Cleanup function to stop the animation on unmount
    return () => {
      TweenMax.killTweensOf(boxes);
    };
  }, [angle]);

  return (
    <div>


      <div className="demoWrapper">
        <div className="stage" ref={stageRef}>
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className="box"
              ref={(el) => (boxesRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel3D;
