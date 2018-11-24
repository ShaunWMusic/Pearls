import Route from '@ember/routing/route';
import Ember from 'ember';
import RSVP from 'rsvp';

export default Route.extend({
  currentUser: Ember.inject.service(),  
 
  model({ id }) {
    return RSVP.hash({
      scent: 'Choose Scent',
      // all: this.store.query('scent-schedule', {
      //   filter: {
      //     query: '122'
      //   }
      // })
      customer: this.store.query('customer', {
        filter: {
          receipt: this.get('currentUser').user.id
        }
      }),
    });
  }
});

