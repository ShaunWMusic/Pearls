import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
currentUser: service('current-user'),
session: service('session'),
reset() {
  this.setProperties({
    product: ''
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
  processStripeToken({id, email, card}){
    let user = this.store.createRecord('customer', {token: id, email: email, card: card.id});
    
    user.save()
    .then((user) => {
      let model = this.model;
      let product = model.product;
      let plan = this.store.createRecord('plan', {product, user});
      plan.set('customer_id', user.id);
      
      plan.save()
       .then((id) => {
         this.transitionToRoute('checkout', id);
         window.location.reload(true);
          let model = this.model;
          let subscriber = this.store.createRecord('subscription', { model, id });
          subscriber.set('customer_id', id.id);
          subscriber.set('id', '');
          subscriber.save();
       });
    });
    },

}
});
