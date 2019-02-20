const elements = [];
let listenerActivated = false;
const callbacks = [];
const watchScroll = () => {
  console.log('asdf');
};

const addListeners = () => {
  if (!listenerActivated) {
    window.addEventListener('scroll', watchScroll);
    listenerActivated = true;
  }
};

export default class ScrollAnimController {
  constructor(elem) {
    elements.push(elem);
    addListeners();
  }

  on = (state, callback) => {
    // console.log('Adding Elements. Total Elems: ', elements);
  }

  destroy = (elem) => {
    elements.splice(elem, 1);
    // console.log('destroying elem. Total elems: ', elements);
  }
}
