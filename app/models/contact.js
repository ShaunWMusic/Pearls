import DS from 'ember-data';

export default DS.Model.extend({
  barbershop: DS.attr('string'),
  contactPerson: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  email: DS.attr('string'),
  callLog: DS.attr('string'),
  website: DS.attr('string'),
  address: DS.attr('string')
});
