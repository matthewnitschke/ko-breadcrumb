function VM(){
  var self = this;

  self.crumbData = ko.observableArray([]);

  self.crumbData.push({
    label: "Hello",
  });

  self.crumbData.push({
    label: "You!",
    clicked: function(){
      console.log("YOU!!");
    }
  });


  self.selected = ko.observable();


}

function run(){
  ko.applyBindings(new VM());
}
