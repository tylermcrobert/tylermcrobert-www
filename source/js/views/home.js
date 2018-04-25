import util from '../core/util';
import csList from '../core/cslist';

const home = {

  init() {
    this.handleCsList();
  },

  handleCsList() {
    const moduleExists = util.elementExists('.home .csBlock');

    if (moduleExists) {
      csList.init();
    }
  },
};
export default home;
