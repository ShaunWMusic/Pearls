import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service('current-user'),
  session: service('session'),
  reset() {
    this.setProperties({
      payment: '',
      password: '',
      email: '',
      charge_id: '',
      plan_id: ''
    });
  },



  payments: ['one-time purchase', 'subscription'],

  actions: {
    subscribeActive() {
      this.set('model.payment', 'subscription');
    },
    onetimepurchaseActive() {
      this.set('model.payment', 'one-time purchase');
    },

    selectDivision(selected) {
      this.set('payment', selected);
    },
    /**
    * Receives a Stripe token after checkout succeeds
    * The token looks like this https://stripe.com/docs/api#tokens
    */
    // One-time Purchase
    processStripeToken({ id, email, card, name }) {
      let product = "Beard-Sample";
      // let description = "Beard Bark Beard Oil";
      let user = this.store.createRecord('charge', {
        source: id,
        receiptEmail: email,
        description: product,
        // product: product
      });
      user.save()
        .then(() => {
          this.transitionToRoute('checkout-complete.one-time-purchase-beard-samples');
        }).catch((e) => {
          this.set('errors', e.errors);
        });
    },
  }
});

