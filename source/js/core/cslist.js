import ScrollWatcher from '../class/Scrollwatcher';

const csList = {

  init() {
    this.cacheDom();
    this.addScrollWatcher();
    this.setCurrentState();
    this.events();
  },

  cacheDom() { // cache dom
    this.dom = {};
    this.dom.root = document.querySelector('.csBlock');
    this.dom.listItems = this.dom.root.querySelectorAll('.caseStudies__list__item');
    this.tagList = this.dom.root.querySelectorAll('.-tags .-tag');
    this.indexIndicator = this.dom.root.querySelector('.-index .index');
  },

  setCurrentState(elem = this.dom.listItems[0], index = 0) {
    this.currentIndex = index;
    this.currentTags = elem.dataset.tags;
    this.render();
  },

  addScrollWatcher() {
    new ScrollWatcher(this.dom.root, 0.2).init();
  },

  setActiveTag(elem, index) {
    this.currentTags = elem.dataset.tags;
    this.render();
  },

  events() {
    this.dom.listItems.forEach((elem, index) => {
      elem.addEventListener('mouseover', () => {
        csList.setCurrentState(elem, index);
      });
    });

    this.tagList.forEach((elem, index) => {
      elem.addEventListener('mouseover', () => {
        csList.setActiveTag(elem, index);
      });
    });
  },

  render() {
    // tags
    [].forEach.call(this.tagList, (item) => {
      item.classList.remove('-active');

      const { tag } = item.dataset;
      if (csList.currentTags.indexOf(tag) > -1) {
        item.classList.add('-active');
      }
    });

    // Index
    this.indexIndicator.innerHTML = (this.currentIndex + 1);

    // List Items
    this.dom.listItems.forEach((el) => {
      el.classList.remove('-active');
    });
    this.dom.listItems[this.currentIndex].classList.add('-active');
  },
};

export default csList;
