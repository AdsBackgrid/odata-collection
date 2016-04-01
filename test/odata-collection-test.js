describe("OData Collection", function () {

  it("should get the json data", function () {

    var collection = new Backgrid.ODataCollection({
      url: 'http://services.odata.org/v4/TripPinServiceRW/People'
    });
    collection.setTake(2);
    collection.setSkip(1);
  });

});
