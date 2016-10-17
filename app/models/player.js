import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  team: DS.belongsTo('team', {inverse: 'players', async: true}),

  randomize(team) {
    this.set('name', Faker.company.companyName());
    this.set('team', team);
    return this;
  }
  
});
