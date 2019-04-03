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
      airport = new Airport;
      plane.land(airport);
      expect(plane.isFlying()).toEqual(false);
    });

    it("lands at an airport", function() {
      airport = new Airport;
      plane.land(airport);
      expect(airport.hangar).toContain(plane);
    });
  });
});