const durations = {
  fast: 300,
  medium: 600,
  slow: 1000,
};

const eases = {
  standard: [0, 0.75, 0.25, 1],
  exit: [0.5, 0, 1, 0.5],
};

const transitions = {
  standard: {
    ease: eases.standard,
    duration: durations.slow,
  },
  exit: {
    ease: eases.exit,
    duration: durations.slow,
  },
  exitFast: {
    ease: eases.exit,
    duration: durations.fast,
  },
};


const poses = {
  fadeUp: {
    enter: { y: 0, opacity: 1, transition: transitions.standard },
    exit: { y: '.5rem', opacity: 0, transition: transitions.exitFast },
  },
  fadeDown: {
    enter: { y: 0, opacity: 1, transition: transitions.standard },
    exit: { y: '-.5rem', opacity: 0, transition: transitions.exitFast },
  },
};

export { durations, eases, transitions, poses };
export default null;
