import DS from 'ember-data';

export default DS.Model.extend({
  currency: DS.attr(),
  interval: DS.attr(),
  product: DS.attr(),
  amount: DS.attr(),
  customer_id: DS.attr()
});
