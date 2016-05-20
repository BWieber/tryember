import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return [
      { id: 1, name: "Brandon"},
      { id: 2, name: "Francis"},
      { id: 3, name: "Claire"}
    ];
  }
});
