import Ember from 'ember';
import Faker from 'faker';

export default Ember.Controller.extend({

  players: [],
  teams: [],

  actions: {

    generateTeams(volume) {
      const counter = parseInt(volume);

      for(let i=0; i < counter; i++) {
        const isTheLast = i === counter-1;
        this._saveRandomTeam(isTheLast);
      }
    },

    deleteTeams() {
      this._destroyAll(this.get('teams'));

      // Data down via seeder-block to fader-label that we ready to show the label
      this.set('teamDelDone', true);
    },

    generatePlayers(volume) {
      const counter = parseInt(volume);

      for(let i=0; i < counter; i++) {
        const isTheLast = i === counter-1;
        const newPlayer = this._selectRandomTeam(isTheLast);

        this._generateSomePlayers(newPlayer);
      }
    },

    deletePlayers() {
        this._destroyAll(this.get('players'));
        // Data down via seeder-block to fader-label that we ready to show the label
        this.set('playerDelDone', true);
    }
  },

  _saveRandomTeam(isLast) {
    const randomTeam = this.store.createRecord('team').randomize();

    randomTeam.save().then(() => {
      if (isLast) {
        // Data down via seeder-block to fader-label that we ready to show label
        this.set('teamDone', true);
      }
    });
  },

  _generateSomePlayers(player) {
    const playerCounter = Faker.random.number(10);

    for (let j=0; j < playerCounter; j++) {
      const team = this._selectRandomTeam();
      this.store.createRecord('player')
      .randomize(player)
      .save();
      team.save();
    }
  },

  _selectRandomTeam() {
    const teams = this.get('teams');
    const teamsCounter = teams.get('length');

    const teamIds = teams.map(team => team.get('id'));

    // randomly pick one id from teamids aray and return the team
    const randomNumber = Faker.random.number(teamsCounter-1);
    const randomTeam = teams.findBy('id', teamIds[randomNumber]);

    return randomTeam;
  },

  _destroyAll(records) {
    records.forEach(
      item => item.destroyRecord()
    );
  }

});
