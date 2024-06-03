"use client";
import React, { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { MinusIcon } from "@radix-ui/react-icons";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";

type QuoteRevealEffectProps = {
  quote: { id: string; author: string; en: string };
  quoteNo: number;
};

const QuoteRevealEffect = ({ quote, quoteNo }: QuoteRevealEffectProps) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <div className="p-4">
        {isLoading ? (
          <div className="flex-col space-y-3 border  dark:border-gray-600 group/canvas-card flex items-center justify-center max-w-lg w-full mx-auto p-6 h-[30rem] relative hover:border-0 bg-gray-100 dark:bg-black">
            <Skeleton className="h-[20rem] w-full rounded" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        ) : (
          <Card
            title={quote.author}
            content={quote.en}
            quoteNo={quoteNo}
            icon={<AceternityIcon />}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        )}
      </div>
    </>
  );
};

const Card = ({
  title,
  content,
  quoteNo,
  icon,
  children,
}: {
  title: string;
  content: string;
  quoteNo: number;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  dark:border-gray-600 group/canvas-card flex items-center justify-center max-w-lg w-full mx-auto p-4 h-[30rem] relative hover:border-0 bg-gray-100 dark:bg-black"
    >
      <span className="absolute h-6 w-6 bottom-5 left-1/2 -transalte-y-1/2 dark:text-white text-black group-hover/canvas-card:text-sky-400">
        <Button variant={"outline"} size={"icon"}>
          {quoteNo}
        </Button>
      </span>
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black group-hover/canvas-card:text-sky-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black group-hover/canvas-card:text-sky-400" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black group-hover/canvas-card:text-sky-400" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black group-hover/canvas-card:text-sky-400" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 text-center">
        <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          {icon}
        </div>
        <div className="flex flex-col gap-5">
          <p className="dark:text-white text-base opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 leading-7 backdrop-blur-sm p-4 rounded-md">
            {content}
          </p>

          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 flex items-center justify-center gap-x-1">
            <MinusIcon></MinusIcon> {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
export default QuoteRevealEffect;
