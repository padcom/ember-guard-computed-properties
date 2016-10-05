import Ember from 'ember';

export default Ember.Component.extend({
  field1: 'field',

  field2: Ember.computed(function() {
    return 'computed/read-only';
  }),

  field3: Ember.computed(function() {
    return 'computed/read-only';
  }),

  field4: Ember.computed(function() {
    return 'computed/read-write';
  }),

  myService: Ember.inject.service(),

  actions: {
    test() {
      this.set('field1', 'TEST1');
      this.set('field2', 'TEST2');
      this.set('field3', 'TEST3');
      this.set('field4', 'TEST4');
      this.set('myService.field', 'TEST5');
    }
  }
});
