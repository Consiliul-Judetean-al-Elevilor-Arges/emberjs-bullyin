import Route from '@ember/routing/route';

export default class HartuireaFizicaRoute extends Route {
  activate() {
    window.scroll(0, 0);
  }
}
