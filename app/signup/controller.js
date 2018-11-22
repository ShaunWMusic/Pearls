import Controller from '@ember/controller';

export default Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      var newValues = {
        password: formValues.password,
        passwordConfirmation: formValues.passwordConfirmation,
        email: this.model.content[0].__data.email
      };
      this.model.setProperties(newValues);

      this.model.save()
      .then(() => {
        this.transitionToRoute('thanks');
      });

    },
  },
});