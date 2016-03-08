describe("Counter application", function(){

  it("Displays a counter", function(){
    browser.get("http://localhost:8000");
    var counter = $("#counter");
    expect(counter.getText()).toBe("Count: 0");
  });

  it("Displays a counter", function(){
    browser.get("http://localhost:8000");
    var counter = $("#counter");
    var increment = $('#increment');
    increment.click();
    expect(counter.getText()).toBe("Count: 1");
  });
});
