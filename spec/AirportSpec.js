describe("Airport", function() {
  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
  });
  
  it("is initialised with an empty hangar", function() {
    expect(airport.hangar.length).toEqual(0);
  });

  it("responds to landPlane()", function() {
    expect(airport.landPlane(plane)).not.toBe(undefined);
  });

  it("adds plane to hangar when it lands", function() {
    plane.land.and.returnValue(airport.landPlane(plane));
    expect(airport.hangar.length).toEqual(1);
    expect(airport.hangar).toContain(plane);
  });

  it("responds to launchPlane()", function() {
    expect(airport.launchPlane(plane)).not.toBe(undefined);
  });

  it("removes plane from hangar when it takes off", function() {
    plane.land.and.returnValue(airport.landPlane(plane));
    expect(airport.hangar.length).toEqual(1);
    plane.takeOff.and.returnValue(airport.launchPlane(plane));
    expect(airport.hangar.length).toEqual(0);
    expect(airport.hangar).not.toContain(plane);
  });
});