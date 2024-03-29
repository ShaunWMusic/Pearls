import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service('session'),
  currentUser: service('current-user'),
  actions: {
    updateForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then((currentUser) => {
          this.transitionToRoute('admin.contact-edits', currentUser);
        });
    }
  }
});
