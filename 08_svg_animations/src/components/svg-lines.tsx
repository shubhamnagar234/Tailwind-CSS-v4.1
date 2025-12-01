"use client";
import { motion } from "motion/react";

export const SVGLines = () => {
  return (
    <motion.div
      whileHover="animate"
      className="h-40 w-40 bg-white flex rounded-md shadow-md items-center justify-center"
    >
      <TopSVG />
      <MiddleSVG />
      <BottomSVG />
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
      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          initial={{
            x1: "-20%",
            x2: "0%",
            y1: 1,
            y2: 0,
          }}
        >
          <stop stopColor="var(-color-line)" />
          <stop offset={"0.33"} stopColor="#F17463" />
        </motion.linearGradient>
      </defs>
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
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          initial={{
            x1: "-20%",
            x2: "0%",
            y1: 1,
            y2: 0,
          }}
        >
          <stop stopColor="var(-color-line)" />
          <stop offset={"0.33"} stopColor="#F17463" />
        </motion.linearGradient>
      </defs>
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
        y1="31"
        x2="325.5"
        y2="1"
        stroke="var(--color-line)"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          initial={{
            x1: "-20%",
            x2: "0%",
            y1: 1,
            y2: 0,
          }}
        >
          <stop stopColor="var(-color-line)" />
          <stop offset={"0.33"} stopColor="#F17463" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};
