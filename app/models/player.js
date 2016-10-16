import DS from 'ember-data';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  teams: DS.hasMany('team'),

  randomize(team) {
    this.set('name', Faker.company.companyName());
    this.set('team', team);
    return this;
  }
});
