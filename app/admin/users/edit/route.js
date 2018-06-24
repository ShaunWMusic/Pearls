import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service('current-user'),
  model() {
    return RSVP.hash({
      // email: this.get('currentUser.user.email'),
      // username: this.get('currentUser.user.username')
      });
  }
});
