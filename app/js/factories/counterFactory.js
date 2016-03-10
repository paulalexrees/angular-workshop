countersApp.factory("CounterFactory", function(){
  CounterFactory = function(){
    this.count = 0;
  };

  CounterFactory.prototype.increment = function() {
    this.count++;
  };

  CounterFactory.prototype.decrement = function() {
    this.count--;
  };

  return CounterFactory;
});
