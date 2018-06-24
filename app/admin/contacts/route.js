import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      contacts: this.store.findAll('contact'),
      barbershop: '',
      contactPerson: '',
      phoneNumber: '',
      email: '',
      callLog: '',
      website: '',
      address: '',
    });
  }
});
