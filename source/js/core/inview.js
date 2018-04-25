const inView = (element) => {
  const bounds = element.getBoundingClientRect();
  return bounds;
};

export default inView;
