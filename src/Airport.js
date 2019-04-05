function Airport() {
  this.hangar = []
}

Airport.prototype.landPlane = function(plane = new Plane) {
  this.hangar.push(plane);
  return this.hangar;
}

Airport.prototype.launchPlane = function(plane = new Plane) {
  result = this.hangar.filter(aircraft => aircraft !== plane)
  this.hangar = result
  return this.hangar;
}