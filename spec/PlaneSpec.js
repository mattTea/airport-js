describe("Plane", function() {
  let plane;
  let airport;
  let weather;

  beforeEach(function() {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['landPlane', 'launchPlane']);
    weather = jasmine.createSpyObj('weather', ['isStormy']);
  });
  
  it("isFlying() when initialised", function() {
    expect(plane.isFlying()).toEqual(true);
  });
  
  describe("when instructed to land", function() {
    it("changes flightStatus from flying to landed", function() {
      plane.land(airport);
      expect(plane.isFlying()).toEqual(false);
    });

    it("calls airport.landPlane()", function() {
      plane.land(airport);
      expect(airport.landPlane).toHaveBeenCalledWith(plane);
    });
  });
  
  describe("when instructed to take-off", function() {
    it("changes flightStatus from flying to landed", function() {
      plane.land(airport);
      expect(plane.isFlying()).toEqual(false);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport, weather);
      expect(plane.isFlying()).toEqual(true);
    });

    it("calls airport.launchPlane()", function() {
      plane.land(airport);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport, weather);
      expect(airport.launchPlane).toHaveBeenCalledWith(plane);
    });

    it("checks weather", function() {
      plane.land(airport);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport, weather);
      expect(weather.isStormy).toHaveBeenCalled();
    });

    it("prevents take-off when weather is stormy", function() {
      plane.land(airport);
      weather.isStormy.and.returnValue(true);
      expect(function(){ plane.takeOff(airport, weather) }).toThrow(new Error("Take-off is not possible in this storm."));
    });
  });
});
