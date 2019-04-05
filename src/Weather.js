function Weather() {
  
}

Weather.prototype.isStormy = function() {
  if (this.stormGenerator() === "stormy") {
    return true
  }
}

Weather.prototype.stormGenerator = function() {
  var storm = Math.random()
  if (storm < 0.3) {
    return "stormy"
  }
}