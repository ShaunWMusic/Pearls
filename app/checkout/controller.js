import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default Controller.extend({
currentUser: service('current-user'),
session: service('session'),
ajax: service('ajax'),

reset() {
  this.setProperties({
    password: '',
    // address: '',
    // aptnumber: '',
    // city: '',
    // country: '',
    // state: '',
    // zip: '',
    username: '',
    email: '',
    plan_id: ''
  });
},

actions: {

  saveForm(ev) {
    ev.preventDefault();
    let model = this.model;
    let user = this.store.createRecord('user', model);
    user.save()
      .then(() => {
            this.transitionToRoute('checkout-complete');
        // let subscriber = this.store.createRecord('subscription', this.model);
        // subscriber.save()
        //   .then(() => {
        //   });
      }).catch((e) => {
        this.set('errors', e.errors);
      });

   
  },
 

}



});

