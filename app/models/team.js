import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  player: DS.belongsTo('player', {aysnc: true})
});
