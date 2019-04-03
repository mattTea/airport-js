describe("Airport", function() {
  it("is initialised with an empty hangar", function() {
    airport = new Airport;
    expect(airport.hangar.length).toEqual(0);
  });

  it("responds to landPlane()", function() {
    airport = new Airport;
    plane = new Plane;
    expect(airport.landPlane(plane)).not.toBe(undefined);
  });

  it("adds a plane to hangar when it lands", function() {
    airport = new Airport;
    plane = new Plane;
    plane.land(airport);
    expect(airport.hangar.length).toEqual(1);
  });
});