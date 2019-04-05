describe("Weather", function() {
  it("is stormy when isStormy() is true", function() {
    weather = new Weather;
    spyOn(weather, "stormGenerator").and.returnValue("stormy")
    expect(weather.isStormy()).toBe(true);
  });
});
