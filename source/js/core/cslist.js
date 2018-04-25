const csList = {

  init() {
    this.cacheDom();
    this.setCurrentState();
    this.events();
  },


  cacheDom() { // cache dom
    this.el = document.querySelector('.csBlock');
    this.csItems = this.el.querySelectorAll('.caseStudies__list__item');
    this.tagList = this.el.querySelectorAll('.-tags .-tag');
    this.indexIndicator = this.el.querySelector('.-index .index');
  },

  setCurrentState(elem = this.csItems[0], index = 0) {
    this.currentIndex = index;
    this.currentTags = elem.dataset.tags;
    this.render();
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
    this.csItems.forEach((el) => {
      el.classList.remove('-active');
    });
    this.csItems[this.currentIndex].classList.add('-active');
  },


  events() {
    this.csItems.forEach((elem, index) => {
      elem.addEventListener('mouseover', () => {
        csList.setCurrentState(elem, index);
      });
    });
  },

};

export default csList;
