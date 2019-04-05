function Plane() {
  this._inFlight = true;
}

Plane.prototype.land = function(airport = new Airport) {
  // guard clause -> return something if isStormy()
  airport.landPlane(this);
  this._inFlight = false;
}

Plane.prototype.takeOff = function(airport = new Airport, weather = new Weather) {
  // guard clause -> return something if isStormy()
  weather.isStormy()
  airport.launchPlane(this);
  this._inFlight = true;
}

Plane.prototype.isFlying = function() {
  return this._inFlight;
}
