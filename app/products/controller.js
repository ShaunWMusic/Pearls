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
    plan_id: ''
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
    let user = this.store.createRecord('customer', {token: id, email: email, card: card.id, username: name});
    user.save()
    .then((user) => {
      this.transitionToRoute('checkout-complete');
      let model = this.model;
      let product = model.product;
      let plan = this.store.createRecord('plan', {product, user});
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

 