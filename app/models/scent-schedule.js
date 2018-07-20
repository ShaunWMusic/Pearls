import DS from 'ember-data';

export default DS.Model.extend({
  scent: DS.attr('string'),
  userId: DS.attr('string'),
});
