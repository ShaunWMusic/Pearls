import DS from 'ember-data';

export default DS.Model.extend({
  accountBalance: DS.attr(),
  businessVatId: DS.attr(),
  coupon: DS.attr(),
  defaultSource: DS.attr(),
  description: DS.attr(),
  email: DS.attr(),
  invoicePrefix: DS.attr(),
  metadata: DS.attr(),
  token: DS.attr(),
  source: DS.attr(),
  card: DS.attr(),
  // shipping: Ember.computed('address', 'aptnumber', 'city', 'country', 'state', 'zip', function () {
  //   return `${this.address} ${this.aptnumber} ${this.city}, ${this.state} ${this.zip} ${this.country}`;
  // }),
});

