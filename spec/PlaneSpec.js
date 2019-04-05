describe("Plane", function() {
  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['landPlane', 'launchPlane']);
  });
  
  it("isFlying() when initialised", function() {
    expect(plane.isFlying()).toEqual(true);
  });
  
  describe("when instructed to land", function() {
    it("changes flightStatus from flying to landed", function() {
      plane.land(airport);
      expect(plane.isFlying()).toEqual(false);
    });
  });

    it("calls airport.landPlane()", function() {
      plane.land(airport);
      expect(airport.landPlane).toHaveBeenCalledWith(plane);
    });
  
  describe("when instructed to take-off", function() {
    it("changes flightStatus from flying to landed", function() {
      var weather = jasmine.createSpyObj('weather', ['isStormy']);
      plane.land(airport);
      expect(plane.isFlying()).toEqual(false);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport);
      expect(plane.isFlying()).toEqual(true);
    });

    it("calls airport.launchPlane()", function() {
      var weather = jasmine.createSpyObj('weather', ['isStormy']);
      plane.land(airport);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport);
      expect(airport.launchPlane).toHaveBeenCalledWith(plane);
    });

    it("checks weather", function() {
      var weather = jasmine.createSpyObj('weather', ['isStormy']);
      plane.land(airport);
      weather.isStormy.and.returnValue(false);
      plane.takeOff(airport, weather);
      expect(weather.isStormy).toHaveBeenCalled();
    });

    it("prevents take-off when weather is stormy", function() {
      var weather = jasmine.createSpyObj('weather', ['isStormy']);
      plane.land(airport);
      weather.isStormy.and.returnValue(true);
      expect(function(){ plane.takeOff(airport) }).toThrow(new Error("Take-off is not possible in this storm."));
    });
  });
});
