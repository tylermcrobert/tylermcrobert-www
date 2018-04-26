import ScrollWatcher from '../class/Scrollwatcher';
import util from '../core/util';

const caseStudy = {

  root: 'main.caseStudy',

  init() {
    if (util.elementExists(this.root)) {
      this.scrollWatch();
    }
  },

  scrollWatch() {
    const blockSelector = '.caseStudy__block';
    const blocks = document.querySelectorAll(blockSelector);

    util.forEach(blocks, (index, value) => {
      new ScrollWatcher(blocks[index], 0.05).init();
    });
  },
};
export default caseStudy;
