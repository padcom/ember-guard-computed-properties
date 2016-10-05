import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

(function() {
  var orgEmberComputedPropertySet = Ember.ComputedProperty.prototype.set;

  Ember.ComputedProperty.prototype.set = function(obj, key) {
    if (obj[key] && obj[key]._getter && !obj[key]._setter) {
      var message = "Overriding computed property " + key + " on " + obj._debugContainerKey;
      if (obj.parentView && obj.parentView.elementId) {
        message += " in element '" + obj.parentView.elementId + "'";
      }
      console.error(message);
    }
    return orgEmberComputedPropertySet.apply(this, arguments);
  };
})();

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
