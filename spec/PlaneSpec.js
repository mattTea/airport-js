describe("Plane", function() {
  it("responds to land function", function() {
    plane = new Plane();
    expect(plane.land).not.toBe(undefined)
  });
});