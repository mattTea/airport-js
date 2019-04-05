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
      plane.land(airport, weather);
      expect(plane.isFlying()).toEqual(false);
    });

    it("calls airport.landPlane()", function() {
      plane.land(airport, weather);
      expect(airport.landPlane).toHaveBeenCalledWith(plane);
    });

    it("checks weather", function() {
      plane.land(airport, weather);
      expect(weather.isStormy).toHaveBeenCalled();
    });

    it("prevents landing when weather is stormy", function() {
      weather.isStormy.and.returnValue(true);
      expect(function(){ plane.land(airport, weather) }).toThrow(new Error("Landing is not possible in this storm."))
    });
  });
  
  describe("when instructed to take-off", function() {
    beforeEach(function() {
      plane.land(airport, weather)
    });

    it("checks weather", function() {
      plane.takeOff(airport, weather);
      expect(weather.isStormy).toHaveBeenCalled();
    });

    it("prevents take-off when weather is stormy", function() {
      weather.isStormy.and.returnValue(true);
      expect(function(){ plane.takeOff(airport, weather) }).toThrow(new Error("Take-off is not possible in this storm."));
    });

    describe("when weather is not stormy", function() {
      beforeEach(function() {
        weather.isStormy.and.returnValue(false);
      });
      
      it("changes flightStatus from landed to flying", function() {
        expect(plane.isFlying()).toEqual(false);
        plane.takeOff(airport, weather);
        expect(plane.isFlying()).toEqual(true);
      });
  
      it("calls airport.launchPlane()", function() {
        plane.takeOff(airport, weather);
        expect(airport.launchPlane).toHaveBeenCalledWith(plane);
      });
    });
  });
});
