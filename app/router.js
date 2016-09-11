import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // team routes
  this.route('team', function() {
    this.route('new');
    this.route('edit', { path: '/:team_id/edit' });
  });

  this.route('seeder');
  this.route('players');
});

export default Router;
