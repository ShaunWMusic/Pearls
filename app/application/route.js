import Route from '@ember/routing/route';
import Mixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(Mixin, {
  currentUser: Ember.inject.service(),

  beforeModel() {
     return this.get('currentUser').loadCurrentUser();
   }
   
});
