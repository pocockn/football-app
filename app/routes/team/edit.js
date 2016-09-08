import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('team', params.team_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit Team');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('team/form');
  },

  actions: {

    saveTeam(newTeam) {
      newTeam.save().then(() => this.transitionTo('team'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
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
