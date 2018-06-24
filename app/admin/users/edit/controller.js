import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  actions: {
    updateForm(id) {
      this.get('store').findRecord('user', id).then(function(user) {
        // ...after the record has loaded
        user.set('email', user.email);
        user.set('username', user.username);
      });
      this.model.set()
        .then(() => {
         window.location.reload(true);
        });
    }
  }
});
