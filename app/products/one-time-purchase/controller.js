import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
currentUser: service('current-user'),
session: service('session'),
reset() {
  this.setProperties({
    product: '',
    password: '',
    email: '',
    charge_id: ''
  });
},



products: ['Sandy Cheeks', 'Beard Bark'],

actions: {
  selectDivision(selected) {
    this.set('product', selected);
  },
   /**
   * Receives a Stripe token after checkout succeeds
   * The token looks like this https://stripe.com/docs/api#tokens
   */
  processStripeToken({id, email, card, name}){
    let product = this.model.product + " Beard Oil";
    let user = this.store.createRecord('charge', {
      source: id,
      receipt_email: email,
      description: product,
      name: email
    });
    debugger;
    user.save()
    .then((user) => {
      this.transitionToRoute('checkout-complete.one-time-purchase');

    }).catch((e) => {
      this.set('errors', e.errors);
    });
    }

}
});

 