describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane;
  });
  
  it("isFlying() when initialised", function() {
    plane = new Plane();
    expect(plane.isFlying()).toEqual(true);
  });
  
  describe("when instructed to land", function() {
    it("responds to land function", function() {
      plane = new Plane();
      expect(plane.land).not.toBe(undefined);
    });

    it("changes flightStatus from flying to landed", function() {
      plane = new Plane();
      plane.land();
      expect(plane.isFlying()).toEqual(false);
    });
  });
});