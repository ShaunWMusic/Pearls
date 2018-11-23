import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('thanks');
  this.route('signup', { path: '/new-account/:id' });
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
      this.route('updatepassword', { path: '/updatepassword/:id/edit'});
      this.route('passwordreset-success');
      this.route('unsubscribe-success');
    });
    this.route('customers');
    this.route('customer_inventories');
    this.route('stats');
    this.route('oilinventory');
  });
  this.route('register');
  this.route('login');
  this.route('products');
  this.route('video-announcement');

  this.route('users', function() {});
  this.route('guidelines');
  this.route('privacy-policy');
  this.route('checkout', { path: '/checkout/:id' });
  this.route('checkout-complete');
  this.route('forgotpassword', { path: '/updatepassword' });
  this.route('passwordresetconfirmation');
  this.route('resetpassword', { path: '/forgot-password/:id'});
  this.route('faq');
  this.route('about-us');
});

export default Router;
