import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),

  actions: {
    login(attrs) {
        this.get('session').authenticate('authenticator:jwt', {
          identification: attrs.email,
          password: attrs.password
        }).then(() => {
            this.transitionToRoute('admin.users.detail', this.model);
        }).catch((e) => {
          this.set('errors', e.errors);
        });
    }
  }
});
