import Controller from '@ember/controller';
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
          this.transitionToRoute('admin.users.detail');
        });
    },

    unsubscribe() {
       this.store.query('customer', {
        filter: {
          unsubscribe: this.model.customer.content[0].__data.source
        }
      })
      .then(() => {
        this.transitionToRoute('admin.users.unsubscribe-success');
      })
    }
  }
});
