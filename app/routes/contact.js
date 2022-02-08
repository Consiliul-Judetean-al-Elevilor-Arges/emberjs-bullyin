import Route from '@ember/routing/route';

export default class ContactRoute extends Route {
    activate() {
        window.scroll(0, 0);
      }
}
