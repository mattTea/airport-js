function Plane() {
  this._inFlight = true;
}

Plane.prototype.land = function(airport) {
  airport.landPlane(this);
  this._inFlight = false;
}

Plane.prototype.isFlying = function() {
  return this._inFlight;
}