counterApp.controller('CounterCtrl', function(){
  // You'll need to explain this
  var self = this;

  // Start with basic two-way data binding
  self.count = 0;

  // Now add buttons
  self.increment = function() {
    self.count++;
  };

  // Now get them to build this using a basic app, and add decrement
  // Now add a second counter
  // Now add five counters
  self.decrement = function() {
    self.count--;
  };
});

counterApp.controller('CounterModelCtrl', function(){
  var self = this;

  self.counters = [{count: 0, increment: function(){}}, {count: 0}];

  // Now add buttons
  self.increment = function(counter) {
    counter.count++;
  };

  // Now get them to build this using a basic app, and add decrement
  // Now add a second counter
  // Now add five counters
  self.decrement = function(counter) {
    counter.count--;
  };
});
