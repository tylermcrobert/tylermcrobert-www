const util = {

  elementExists(selector) {
    return document.querySelectorAll(selector).length !== 0;
  },

  isInView(element, offset) {
    return false;
  },

  forEach(array, callback, scope) {
    for (let i = 0; i < array.length; i++) {
      callback.call(scope, i, array[i]); // passes back stuff we need
    }
  },

};


export default util;
