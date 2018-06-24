import DS from 'ember-data';

export default DS.Model.extend({
  jan: DS.attr('string'),
  feb: DS.attr('string'),
  mar: DS.attr('string'),
  apr: DS.attr('string'),
  may: DS.attr('string'),
  jun: DS.attr('string'),
  jul: DS.attr('string'),
  aug: DS.attr('string'),
  sept: DS.attr('string'),
  oct: DS.attr('string'),
  nov: DS.attr('string'),
  dec: DS.attr('string'),
  userid: DS.attr('string')
  // user: DS.belongsTo('user')
});
