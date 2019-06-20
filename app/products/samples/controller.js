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
      let product = "Sandy-Cheeks";
      // let description = "Beard Bark Beard Oil";
      let user = this.store.createRecord('charge', {
        source: id,
        receiptEmail: email,
        description: product,
        // product: product
      });
      user.save()
        .then(() => {
          this.transitionToRoute('checkout-complete.one-time-purchase');
        }).catch((e) => {
          this.set('errors', e.errors);
        });
    },

    // Subscription
    processStripeTokenSubscription({ id, email, card, name }) {
      let product = "Sandy-Cheeks";
      let user = this.store.createRecord('customer', {
        token: id,
        email: email,
        card: card.id,
        username: name,
        description: product
      });
      user.save()
        .then((user) => {
          this.transitionToRoute('checkout-complete.subscription');
          let model = this.model;
          let product = model.product;
          let plan = this.store.createRecord('plan', { product, user });
          plan.set('customer_id', user.id);

          plan.save()
            .then((id) => {
              let model = this.model;
              let subscriber = this.store.createRecord('subscription', { model, id });
              subscriber.set('customer_id', id.id);
              subscriber.set('id', '');
              subscriber.save()
                .then(() => {
                  let createUser = this.store.createRecord('user', this.model);
                  createUser.save()
                    .then(() => {
                    }).catch((e) => {
                      this.set('errors', e.errors);
                    });
                });
            });
        }).catch((e) => {
          this.set('errors', e.errors);
        });
    }

  }
});

