import DS from 'ember-data';

export default DS.Model.extend({
  amount: DS.attr(), 
  description: DS.attr(), 
  currency: DS.attr(), 
  source: DS.attr(),
  receipt_email: DS.attr(), 
});
