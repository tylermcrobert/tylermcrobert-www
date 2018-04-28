import '../sass/app.scss';

import util from './core/util';
import loadSpotify from './core/spotify';

import home from './views/home';
import caseStudy from './views/casestudy';


const app = {

  init() {
    this.loadViews();
    loadSpotify.init();
  },

  loadViews() {
    home.init();
    caseStudy.init();
  },

};

app.init();
