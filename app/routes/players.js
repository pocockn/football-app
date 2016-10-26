import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('player');
  },

  actions: {

    editPlayer(player) {
      player.set('isEditing', true);
    },

    cancelPlayerEdit(player) {
      player.set('isEditing', false);
      player.rollbackAttributes();
    },

    savePlayer(player) {
      if (player.get('isNotValid')) {
        return;
      }

      player.set('isEditing', false);
      player.save();
      
    }
  }
});
