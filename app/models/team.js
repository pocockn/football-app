import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player', {inverse: 'team', async: true}),

  randomize() {
    this.set('name', Faker.company.companyName());
    return this;
  },

  model() {
    return this.store.findAll('team');
  }

});
