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
    this.route('contact-details', { path: '/contact-details/:id' });
    this.route('contact-edits', { path: '/contact-edits/:id' });
    this.route('barbershop_inventories');
    this.route('users', function() {
      this.route('edit', { path: '/edit/:id' });
      this.route('detail', { path: '/detail/:id '});
      this.route('scents', { path: '/scents/:id' });
      this.route('editscents', { path: '/editscents/:id' });
    });
    this.route('customers');
  });
  this.route('register');
  this.route('login');
  this.route('products');
  this.route('video-announcement');

  this.route('users', function() {});
  this.route('guidelines');
});

export default Router;
