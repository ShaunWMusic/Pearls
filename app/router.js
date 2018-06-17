import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('thanks');
  this.route('signup');
  this.route('admin', function() {
    this.route('contacts');
    this.route('barbershop_inventories');
    this.route('users', function() {
      this.route('edit', { path: '/edit/:id' });
      this.route('detail', { path: '/detail/:id '});
    });
    this.route('customers');
  });
  this.route('register');
  this.route('login');
  this.route('products');
  this.route('video-announcement');
});

export default Router;
