"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TypewriterEffect } from "./ui/typewriter-effect";

const HeroSectionRevealEffect = () => {
  const words = [
    {
      text: "Life",
    },
    {
      text: "is",
    },
    {
      text: "a",
    },
    {
      text: "sum",
    },
    {
      text: "of",
    },
    {
      text: "our",
    },
    {
      text: "choices.",
    },
    {
      text: "-",
    },
    {
      text: "Albert",
    },
    {
      text: "Camus.",
    },
  ];
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="h-[40rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
    >
      <TypewriterEffect words={words} />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-full w-full absolute inset-0"
          >
            <CanvasRevealEffect
              animationSpeed={5}
              containerClassName="bg-transparent"
              colors={[
                [59, 130, 246],
                [139, 92, 246],
              ]}
              opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSectionRevealEffect;
