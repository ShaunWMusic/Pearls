import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  username: DS.attr(),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),
  admin: DS.attr('boolean', {defaultValue: false}),
  barbershop: DS.attr('boolean', {defaultValue: false}),
  customer: DS.attr('boolean', {defaultValue: true})
});
