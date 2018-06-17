import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
currentUser: service('current-user'),

  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('user', changesFromForm);
        profile.save().then(() => {
          profile.set('user', profile);
        })
        this.transitionToRoute('thanks');

  },
},
});
