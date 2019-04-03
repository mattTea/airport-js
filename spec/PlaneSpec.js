describe("Plane", function() {
  it("responds to land function", function() {
    plane = new Plane();
    expect(plane.land).not.toBe(undefined);
  });

  it("changes state of plane from flying to landed", function() {
    plane = new Plane();
    plane.land();
    expect(plane.isFlying()).toEqual(false);
  });
});