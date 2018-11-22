import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
currentUser: Ember.inject.service(),
session: Ember.inject.service(),

model({ id }) {
return this.store.query('forgot-password', {
	filter: {
	token: id
		}     
	});

}  
});
