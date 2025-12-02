"use client";
import { motion } from "motion/react";

export const SVGLines = () => {
  return (
    <motion.div
      whileHover="animate"
      className="rounded-md flex items-center justify-center "
    >
      <div className="flex flex-col gap-5 justify-between">
        <div className="relative text-[10px] text-black">
          Meeting Summarizer
          <TopSVG className="absolute top-2 left-32" />
        </div>
        <div className="relative text-[10px] text-black">
          Div Centerer
          <MiddleSVG className="absolute top-2 left-32" />
        </div>
        <div className="relative text-[10px] text-black">
          Junior Intern
          <BottomSVG className="absolute top-2 left-32" />
        </div>
      </div>
    </motion.div>
  );
};

const TopSVG = (props: React.SVGProps<SVGElement>) => {
  return (
    <svg
      width={"312"}
      height={"33"}
      viewBox="0 0 312 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="311.5"
        y1="1"
        x2="311.5"
        y2="32"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
    </svg>
  );
};

const MiddleSVG = (props: React.SVGProps<SVGElement>) => {
  return (
    <svg
      width={"323"}
      height={"2"}
      viewBox="0 0 323 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="322.5"
        y1="1"
        x2="322.5"
        y2="32"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
    </svg>
  );
};

const BottomSVG = (props: React.SVGProps<SVGElement>) => {
  return (
    <svg
      width={"326"}
      height={"33"}
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <line
        y1="31"
        x2="325"
        y2="31"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="325.5"
        y1="1"
        x2="325.5"
        y2="31"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
    </svg>
  );
};
