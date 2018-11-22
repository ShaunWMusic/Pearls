import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),

  actions: {
    checkForm(formValues) {
      this.get('session').authenticate('authenticator:jwt', {
        identification: formValues.email,
        password: formValues.password
      }).then(() => {
        this.transitionToRoute('index');
      }).catch((e) => {
        this.set('errors', e.errors);
      });
    }
  }
});
