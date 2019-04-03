function Airport() {
  this.hangar = []
}

Airport.prototype.landPlane = function(plane) {
  this.hangar.push(plane);
  return this.hangar;
}