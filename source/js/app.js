import '../sass/app.scss';
import home from './views/home';
import caseStudy from './views/casestudy';

const app = {

  init() {
    this.loadViews();
  },

  loadViews() {
    home.init();
    caseStudy.init();
  },

};

app.init();
