import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service('current-user'),
  model({ id }) {
    return RSVP.hash({
      scentSchedule: this.store.query('scent-schedule', {
        filter: {
          query: id
        }
      }),
      jan: '',
      feb: '',
      mar: '',
      apr: '',
      may: '',
      jun: '',
      jul: '',
      aug: '',
      sept: '',
      oct: '',
      nov: '',
      dec: '',
      userid: this.get('currentUser.user.id'),
      });
  }
});