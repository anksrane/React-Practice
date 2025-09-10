import React, { memo } from "react";
import { motion } from "framer-motion";

const BoxesCore = ({ className, ...rest }) => {
  const rows = new Array(100).fill(1); // adjust for performance
  const cols = new Array(100).fill(1);

  const colors = [
    "#5E8677", 
  ];
//   const colors = [
//     "#93c5fd", "#f9a8d4", "#86efac", "#fde047",
//     "#fca5a5", "#d8b4fe", "#a5b4fc", "#c4b5fd",
//   ];

  const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  return (
    <div
      style={{
        transform: "translate(-50%, -50%) skewX(-60deg) skewY(14deg) scale(0.5)",
      }}
      className={`absolute top-1/2 left-1/2 z-0 flex flex-col ${className}`}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div key={`row-${i}`} className="flex">
          {cols.map((_, j) => (
            <motion.div
              key={`col-${i}-${j}`}
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              className="h-12 w-24 border-t border-l border-slate-700"
            >
              {j % 2 === 0 && i % 2 === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="pointer-events-none absolute -top-[14px] -left-[22px] h-6 w-10 stroke-[1px] text-slate-400"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const BackgroundBoxes = memo(BoxesCore);
