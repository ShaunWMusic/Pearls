import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          this.transitionToRoute('admin.users.passwordreset-success');
        });
    }
  }
});
