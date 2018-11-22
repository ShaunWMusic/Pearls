import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveForm(changesFromForm) {
      let profile = this.store.createRecord('forgot-password', changesFromForm);
        profile.save().then(() => {
          profile.set('forgot-password', profile);
        }).then(() => {
          this.transitionToRoute('passwordresetconfirmation');
        }).catch((e) => {
          this.set('errors', e.errors);
        });

  },

},
});
  
