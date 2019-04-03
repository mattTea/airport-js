function Plane() {
  this._inFlight = true;
}

Plane.prototype.land = function() {
  this._inFlight = false
}

Plane.prototype.isFlying = function() {
  return this._inFlight
}