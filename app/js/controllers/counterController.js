counterApp.controller("counterController", function(){
  var self = this;

  self.count = 0;

  self.increment = function() {
    self.count++;
  }
});
