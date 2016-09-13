import Ember from 'ember';

export default Ember.Route.extend({

 model() {
   return this.store.createRecord('team');
 },

 setupController: function (controller, model) {
   // Call _super for default behavior
   this._super(controller, model);
   // Implement your custom setup after
   controller.set('title', 'Create a new team');
   controller.set('buttonLabel', 'Create');
 },

 renderTemplate() {
   this.render('team/form');
 },

  actions: {
    saveTeam(newTeam) {
      newTeam.save().then(() => this.transitionTo('team'));
    },

    willTransition() {
          // rollbackAttributes() removes the record from the store
          // if the model 'isNew'
          this.controller.get('model').rollbackAttributes();
        }
    }

});
