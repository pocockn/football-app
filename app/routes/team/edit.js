import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('team', params.team_id);
  },

  actions: {

    saveTeam(newTeam) {
      newTeam.save().then(() => this.transitionTo('team'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if(model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes havent been saved yet, would you like to save them?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }


});
