import Ember from 'ember';

export default Ember.Route.extend({

 model() {
   return this.store.createRecord('team');
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
