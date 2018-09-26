import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    return RSVP.hash({
      oilinventory: this.store.findAll('oilinventory'),
      beardbark: '',
      sandycheeks: '',
      totalbottles: ''
      });
  }
});
