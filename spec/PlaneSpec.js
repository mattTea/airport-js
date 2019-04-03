describe("Plane", function() {
  let plane;

  beforeEach(function() {
    plane = new Plane;
  });
  
  it("isFlying() when initialised", function() {
    expect(plane.isFlying()).toEqual(true);
  });
  
  describe("when instructed to land", function() {
    it("changes flightStatus from flying to landed", function() {
      plane.land();
      expect(plane.isFlying()).toEqual(false);
    });
  });
});