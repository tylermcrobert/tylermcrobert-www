import util from '../core/util';
//
class ScrollWatcher {
  constructor(element, offset) {
    this.element = element;
    this.toggledClass = '-is-animate';
  }

  init() {
    this.bindEvents();
  }

  evaluateStatus() {
    console.log('sdfasfd');
    if (util.isInView(this.element)) {
      this.addClass(this.toggledClass);
    } else {
      this.removeClass(this.toggledClass);
    }
  }

  addClass(className) {
    this.element.classList.remove(className);
  }

  removeClass(className) {
    this.element.classList.add(className);
  }

  bindEvents() {
    document.addEventListener('scroll', this.evaluateStatus());
  }
}



export default ScrollWatcher;
