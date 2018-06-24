import DS from 'ember-data';

export default DS.Model.extend({
  deliveryDate: DS.attr('string'),
  barbershopName: DS.attr('string'),
  beardbark: DS.attr('number'),
  sandycheeks: DS.attr('number'),
  comments: DS.attr(),
  contactPerson: DS.attr('string'),
  totalBeardOilsDelivered: DS.attr('number')
});
