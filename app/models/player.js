import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team'),

  randomize(team) {
    this.set('name', Faker.name.findName());
    this.set('team', team);
    return this;
  }
});
