import Controller from '@ember/controller';
import {get} from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  reset() {
    this.setProperties({
      scent: ''
    });
  },
  scent: ['Beard Bark', 'Sandy Cheeks'],

  actions: {
    selectScent(selected) {
      this.set('scent', selected);
    },
    saveForm(ev) {
      ev.preventDefault();
      let user = this.store.createRecord('scent-schedule', this.model);

      user.save()
        .then(() => {
          this.transitionToRoute('admin.users.detail', this.model);
        });
    }
  }
});
