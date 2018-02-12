import Controller from '@ember/controller';

export default Controller.extend({
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
