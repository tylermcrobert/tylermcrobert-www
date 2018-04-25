const util = {
  elementExists(selector) {
    return document.querySelectorAll(selector).length !== 0;
  },
};

export default util;
