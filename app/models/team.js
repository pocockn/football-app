import DS from 'ember-data';
import Ember from 'ember';
import Faker from 'faker';

export default DS.Model.extend({
  name: DS.attr('string'),
  players: DS.hasMany('player'),

  randomize() {
    this.set('name', Faker.company.companyName() );
    return this;
  }

});
