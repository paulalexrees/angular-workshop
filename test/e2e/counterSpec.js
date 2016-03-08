describe("Counter application", function(){

  it("Displays a counter", function(){
    browser.get("http://localhost:8000");
    var counter = $("#count");
    expect(counter.getText()).toBe("0");
  });

  it("Displays a counter", function(){
    browser.get("http://localhost:8000");
    var counter = $("#count");
    var increment = $('#increment');
    increment.click();
    expect(counter.getText()).toBe("1");
  });
});
