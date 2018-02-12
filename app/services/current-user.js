import Service from '@ember/service';

export default Service.extend({
  store: Ember.inject.service(),
  session: Ember.inject.service(),
  users: null,

  loadCurrentUser() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').queryRecord('user', { current: true })
        .then((users) => {
          this.set('user', users);
        });
    }
  }
});
