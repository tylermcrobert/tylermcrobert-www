import '../sass/app.scss';
import home from './views/home';

const app = {

  init() {
    this.loadViews();
  },

  loadViews() {
    home.init();
    home.init();
  },

};

app.init();
