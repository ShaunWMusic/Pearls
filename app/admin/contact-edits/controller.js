import Controller from '@ember/controller';
import Ember from 'ember';
import { debug } from '@ember/debug';

export default Controller.extend({
  currentUser: Ember.inject.service(),
  session: Ember.inject.service(),
  actions: {
    updateForm(formValues) {
      this.model.setProperties(formValues);

      this.model.save()
        .then(() => {
          window.location.reload(true);
        });
    }
  }
});
