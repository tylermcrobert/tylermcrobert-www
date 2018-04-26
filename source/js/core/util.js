const util = {

  elementExists(selector) {
    return document.querySelectorAll(selector).length !== 0;
  },

  isInView(element, offsetPercentage = 0) {
    this.element = element;
    this.offset = offsetPercentage;

    this.bounds = this.element.getBoundingClientRect();
    this.windowHeight = window.innerHeight;
    this.windowOffset = this.offset * this.windowHeight;

    this.distBeforeFrame = this.bounds.top - this.windowHeight;
    this.distAfterFrame = this.bounds.bottom;

    this.inView = ((this.distBeforeFrame + this.windowOffset) < 0) &&
                  ((this.distAfterFrame - this.windowOffset) > 0);

    return this.inView;
  },

  forEach(array, callback, scope) {
    for (let i = 0; i < array.length; i += 1) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },
};

export default util;
