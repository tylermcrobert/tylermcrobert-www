import util from '../core/util';

class View {
  constructor(rootElement) {
    this.rootElement = rootElement;
    this.rootElementExists = util.elementExists(rootElement);
  }
}
