import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
});
