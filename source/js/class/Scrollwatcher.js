import util from '../core/util';

class ScrollWatcher {
  constructor(element, offset) {
    this.element = element;
    this.offset = offset;
    this.animateClass = '-scroll-animate';
    this.toggledClass = '-is-animate';
  }

  init() {
    this.addAnimateClass();
    this.bindEvents();
  }

  evaluateStatus() {
    if (util.isInView(this.element, this.offset)) {
      this.addClass(this.toggledClass);
    }
  }

  addAnimateClass() {
    this.addClass(this.animateClass);
  }

  removeClass(className) {
    this.element.classList.remove(className);
  }

  addClass(className) {
    this.element.classList.add(className);
  }

  bindEvents() {
    window.addEventListener('scroll', () => {
      this.evaluateStatus();
    });
    window.addEventListener('resize', () => {
      this.evaluateStatus();
    });
  }
}


export default ScrollWatcher;
