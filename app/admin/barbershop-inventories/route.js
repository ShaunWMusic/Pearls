import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      barbershopInventory: this.store.findAll('barbershop-inventory'),
      deliveryDate: '',
      barbershopName: '',
      beardbark: '',
      sandycheeks: '',
      comments: '',
      contactPerson: '',
      totalBeardOilsDelivered: ''
      });
  }
});
