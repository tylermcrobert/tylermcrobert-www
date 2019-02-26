const durations = {
  medium: 600,
  slow: 900,
};

const eases = {
  standard: [0, 0.75, 0.25, 1],
};

const transitions = {
  default: {
    ease: eases.standard,
    duration: durations.slow,
  },
};


const poses = {
  fadeUp: {
    enter: { y: 0, opacity: 1, transition: transitions.default },
    exit: { y: '1.25rem', opacity: 0, transition: transitions.default },
  },
  fadeDown: {
    enter: { y: 0, opacity: 1, transition: transitions.default },
    exit: { y: '-1.25rem', opacity: 0, transition: transitions.default },
  },
};

export { durations, eases, transitions, poses };
export default null;
