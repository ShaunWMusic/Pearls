import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr(), 
  description: DS.attr(), 
  currency: DS.attr(), 
  source: DS.attr(),
  receiptEmail: DS.attr(), 
  product: DS.attr(), 
  trackingNumber: DS.attr(),
  updatedAt: DS.attr(),
  createdAt: DS.attr() 
});
