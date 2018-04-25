import ScrollWatcher from '../class/Scrollwatcher';
import util from '../core/util';


const caseStudy = {

  root: 'main.caseStudy',

  init() {
    if (util.elementExists(this.root)) {
      this.animateBlocks();
    }
  },

  animateBlocks() {
    const blockSelector = '.caseStudy__block';
    const blocks = document.querySelectorAll(blockSelector);

    util.forEach(blocks, (index, value) => {
      console.log(blocks[index]);
  
      // const animate = new ScrollWatcher(blocks[index]).init();
      // //   element: blocks[index],
      // //   handler function(){
      // //     this.classList.add('go fuck yourself')
      // //   }
    });
  },

};
export default caseStudy;
