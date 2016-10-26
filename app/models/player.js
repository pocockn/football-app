import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  goals: DS.attr('number'),
  team: DS.belongsTo('team', {inverse: 'players', async: true}),

  randomize(team) {
    this.set('name', Faker.company.companyName());
    this.set('goals', Faker.random.number());
    this.set('team', team);
    return this;
  },

  isNotValid: Ember.computed.empty('name'),

});
