import { Variants } from "framer-motion";

export const heartBeat: Variants = {
  offscreen: {
    scale: 0.9,
  },
  onscreen: {
    scale: 1,
    transition: { scale: { yoyo: Infinity, duration: 1 } },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const slideInCard: Variants = {
  offscreen: {
    x: 90,
  },
  onscreen: {
    x: 0,
    transition: { x: { duration: 1 } },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const slideFromTop = (delayInSeconds?: number): Variants => {
  return {
    start: { y: "-100vh", opacity: 0 },
    end: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 1, delay: delayInSeconds },
      },
    },
  };
};

export const slideFromLeft = (delayInSeconds?: number): Variants => {
  return {
    start: { x: "-100vw", opacity: 0 },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 1, delay: delayInSeconds },
      },
    },
  };
};

export const slideFromRight = (delayInSeconds?: number): Variants => {
  return {
    start: { x: "100vw", opacity: 0 },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        x: { duration: 1, delay: delayInSeconds },
      },
    },
  };
};
