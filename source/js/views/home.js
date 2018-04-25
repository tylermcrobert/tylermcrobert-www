import util from '../core/util';
import csList from '../core/cslist';

const home = {

  root: 'main.home',

  init() {
    if (util.elementExists(this.root)) {
      this.handleCsList();
    }
  },

  handleCsList() {
    const moduleExists = util.elementExists(`${this.root} .csBlock`);

    if (moduleExists) {
      csList.init();
    }
  },
};
export default home;
