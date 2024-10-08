
export const showPath = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  }
};

export const slide = {
  hidden: {
    x: 20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
      ease: "easeInOut",
    }
  }
};

export const slideInstruction = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: i => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      ease: "easeInOut",
    },
  }),
};
