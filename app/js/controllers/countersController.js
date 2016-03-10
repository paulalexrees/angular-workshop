countersApp.controller('CountersCtrl', ['CounterFactory', function(CounterFactory){
  var self = this;

  self.model = [new CountersFactory(), new CounterFactory()];
}]);
