import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function LineSvg() {
  const pathRef = useRef(null);
  const [dotPositions, setDotPositions] = useState(
    Array(6).fill({ x: 0, y: 0 })
  );
  const controls = useAnimation();

  useEffect(() => {
    if (!pathRef.current) return;
    const path = pathRef.current;
    const length = path.getTotalLength();

    const update = (progressArray) => {
      setDotPositions(
        progressArray.map((p) => {
          const point = path.getPointAtLength(p * length);
          return { x: point.x, y: point.y };
        })
      );
    };

    // Animate continuously
    let start = 0;
    const duration = 48000; // 6 seconds for full loop
    const dotsCount = 6;
    const delays = Array.from({ length: dotsCount }, (_, i) => (i / dotsCount));

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = (elapsed % duration) / duration;

      const progressArray = delays.map((d) => (progress + d) % 1);
      update(progressArray);

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "0 auto" }}>
      <svg
        viewBox="0 0 1273 906"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", display: "block" }}
      >
        {/* Main animated path */}
        <motion.path
          ref={pathRef}
          d="M318.587 315.483V510.936L477.544 431.391V236.949M318.587 315.483L159.63 236.949M318.587 315.483L477.544 236.949M318.587 315.483V509.925L159.63 589.469M318.587 315.483L159.63 237.286L0.673828 315.483M318.587 315.483L159.63 394.016M477.544 236.949L318.587 158.753L159.63 236.949M477.544 236.949V432.402M477.544 236.949L318.587 158.416L477.544 80.2192L636.5 158.416L477.544 236.949ZM159.63 236.949V79.5451M159.63 589.469V394.016M159.63 589.469L0.673828 509.925V315.483M0.673828 315.483L159.63 394.016M159.63 79.5451L318.587 1.34863L477.544 79.5451L318.587 158.079L159.63 79.5451ZM795.457 395.701V237.286M795.457 237.286L636.5 159.09L477.544 237.286M795.457 237.286L636.5 315.82M477.544 237.286V431.728L601.139 491.762M477.544 237.286L636.5 315.82M636.5 315.82V472.887M954.414 668.003V473.561M954.414 473.561L795.457 395.364L636.5 473.561L795.457 552.094M954.414 473.561L795.457 552.094M954.414 473.561V669.014M954.414 473.561L795.457 395.027L954.414 316.831L1113.37 395.027L954.414 473.561ZM795.457 552.094L636.5 473.898L477.544 552.094M795.457 552.094L636.5 630.628M477.544 552.094V746.534L636.5 826.078V630.628M477.544 552.094L636.5 630.628M795.457 709.498V904.949M795.457 709.498L636.5 630.965M795.457 709.498L954.414 630.965M795.457 904.949L954.414 825.404V630.965M795.457 904.949L636.5 825.404V630.965M636.5 630.965L795.457 552.768L954.414 630.965M1113.37 552.431V747.882M1113.37 552.431L954.414 473.898M1113.37 552.431L1272.33 473.898M1113.37 747.882L1272.33 668.34V473.898M1113.37 747.882L954.414 668.34V473.898M954.414 473.898L1113.37 395.701L1272.33 473.898"
          stroke="url(#paint-linear)"
          strokeOpacity="0.9"
          strokeWidth="2.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 6,
            ease: "easeIn",
            // repeat: Infinity,
            // repeatType: "reverse",
          }}
        />

        {/* Moving dots */}
        {dotPositions.map((pos, i) => (
          <circle
            key={i}
            cx={pos.x}
            cy={pos.y}
            r="6"
            fill="#27B173"
          />
        ))}

        <defs>
          <linearGradient
            id="paint-linear"
            x1="1272.23"
            y1="479.474"
            x2="506.242"
            y2="-216.277"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#27b173" />
            <stop offset="0.619553" stopColor="#1a663f" />
            <stop offset="0.93102" stopColor="#26312d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
