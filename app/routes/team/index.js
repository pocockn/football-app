import Ember from 'ember';

export default Ember.Route.extend({
    model() {
      return this.store.findAll('team');
    },

    actions: {

      deleteTeam(team) {
        let confirmation = confirm("Are you sure you want to delete?");

        if(confirmation) {
          team.destroyRecord();
        }
      }
    }
});
