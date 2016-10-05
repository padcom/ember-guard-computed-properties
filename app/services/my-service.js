import Ember from 'ember';

export default Ember.Service.extend({
  field: Ember.computed(function() {
    return "my-service/field";
  })
});
