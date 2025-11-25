import React, { useEffect, useRef } from "react";
import "./FloatingBalls.css";

export default function FloatingBallsReactDOM({ numBalls = 50 }) {
  const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
  const containerRef = useRef(null);

  useEffect(() => {
    const nodes = Array.from(containerRef.current.children);
    const anims = nodes.map((el, i) => {
      const to = { x: Math.random() * (i % 2 === 0 ? -11 : 11), y: Math.random() * 12 };
      return el.animate(
        [
          { transform: el.style.transform || "scale(1) translate(0,0)" },
          { transform: `translate(${to.x}rem, ${to.y}rem)` }
        ],
        {
          duration: (Math.random() + 1) * 2000,
          direction: "alternate",
          fill: "both",
          iterations: Infinity,
          easing: "ease-in-out"
        }
      );
    });

    return () => anims.forEach(a => a.cancel());
  }, [numBalls]);

  return (
    <div ref={containerRef} className="floating-balls-container">
      {Array.from({ length: numBalls }).map((_, i) => {
        // const size = (Math.random() * 2 + 0.5).toFixed(2);
        const size = (Math.random() * 0.7 + 0.1).toFixed(2);
        const style = {
          left: `${Math.floor(Math.random() * 100)}vw`,
          top: `${Math.floor(Math.random() * 100)}vh`,
          width: `${size}em`,
          height: `${size}em`,
          transform: `scale(${Math.random()})`,
          background: colors[Math.floor(Math.random() * colors.length)],
          pointerEvents: "none",
        };
        return <div key={i} className="ball" style={style} />;
      })}
    </div>
  );
}
