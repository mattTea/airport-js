describe("Weather", function() {
  it("responds to isStormy()", function() {
    weather = new Weather;
    expect(weather.isStormy()).not.toBe(undefined);
  });

  it("is fine when initialised", function() {
    weather = new Weather;
    expect(weather.forecast).toBe("fine");
  });
});