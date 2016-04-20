countersApp.controller("countersCtrl", function($interval){
  var self = this;

  self.count = 0;

  self.myCounters = [
    {count: 0},
  ];

  //$interval(function(){self.myCounters[4].count++;}, 1);

  self.addCounter = function() {
    self.myCounters.push({count:0});
  };

  self.increment = function(counter) {
    counter.count++;
  };

  self.decrement = function(counter) {
    // $interval(function(){self.count--;},220);
    counter.count--;
  };



 });
