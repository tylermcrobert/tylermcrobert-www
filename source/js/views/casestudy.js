import util from '../core/util';

const caseStudy = {

  root: 'main.caseStudy',

  init() {
    if (util.elementExists(this.root)) {
      this.animateInPhotos();
    }
  },

  animateInPhotos() {
    console.log('waddup case study page!!!');
  },

};
export default caseStudy;
