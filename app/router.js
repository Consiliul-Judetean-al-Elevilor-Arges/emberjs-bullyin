import EmberRouter from '@ember/routing/router';
import config from 'bullyin/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('contact');
  this.route('home', { path: '/' });
  this.route('hartuirea-fizica');
  this.route('notfound', { path: '/*path' });
  this.route('bullying-verbal');
  this.route('cyberbullying');
  this.route('bullying-social');
  this.route('comportament-agresiv');
  this.route('legislatie');
});
