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
  username: DS.attr(),
  trackingNumber: DS.attr(),
  createdAt: DS.attr(),
  updatedAt: DS.attr()
});

