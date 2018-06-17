import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    saveUser(attrs) {
      let user = this.store.createRecord('user', attrs);

      user.save()
      .then(() => {
        this.transitionToRoute('index');
      })
      .catch((e) => {
        this.set('model', attrs);
        this.set('errors', user.get('errors'));
      });
    }
  }
});
