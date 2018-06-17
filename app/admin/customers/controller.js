import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    charge(formValues) {
      return this.store.createRecord('customer', formValues);
    }
  }
});
