describe("Airport", function() {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land']);
  });
  
  it("is initialised with an empty hangar", function() {
    expect(airport.hangar.length).toEqual(0);
  });

  it("responds to landPlane()", function() {
    expect(airport.landPlane(plane)).not.toBe(undefined);
  });

  it("adds a plane to hangar when it lands", function() {
    plane.land.and.returnValue(airport.landPlane(plane));
    expect(airport.hangar.length).toEqual(1);
    expect(airport.hangar).toContain(plane);
  });
});