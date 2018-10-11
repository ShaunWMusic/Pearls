import DS from 'ember-data';

export default DS.Model.extend({
  sandycheeks: DS.attr('int'),
  beardbark: DS.attr('int'),
  totalbottles: DS.attr('int')
});
