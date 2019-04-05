function Plane() {
  this._inFlight = true;
}

Plane.prototype.land = function(airport = new Airport, weather = new Weather) {
  if (weather.isStormy()) {
    throw new Error("Landing is not possible in this storm.");
  } else {
    airport.landPlane(this);
    this._inFlight = false;
  }
}

Plane.prototype.takeOff = function(airport = new Airport, weather = new Weather) {
  if (weather.isStormy()) {
    throw new Error ("Take-off is not possible in this storm.");
  } else {
    airport.launchPlane(this);
    this._inFlight = true;
  }
}

Plane.prototype.isFlying = function() {
  return this._inFlight;
}
