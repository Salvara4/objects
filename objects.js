

// function that creates car objects which have a make, model year, and color.
// Add a function that returns make, model year, and color as one string and use the method to tell the user the car's information.

// added var speed, and functions to return the value, increase, and decrease speed

function createCar(newMake, newModel, newColor) {
  var speed = 10
  return {
    make: newMake,
    modelYear: newModel,
    color: newColor,
    getData: function(){ return this.color + ", " + this.modelYear + ", " + this.make},
    getSpeed: function(){ return speed},
    accelerate: function(){ return speed += 10},
    brake: function(){ return speed -= 5}
  }
}

// Create a car object and use a while loop to take its speed up to 50mph.
// Then use a while loop to brake down to 0mph.
// Surprise: it doesnt stop at 0mph, fix that.

function createCar(newMake, newModel, newColor) {
  var speed = 10
  return {
    make: newMake,
    modelYear: newModel,
    color: newColor,
    getData: function(){ return this.color + ", " + this.modelYear + ", " + this.make},
    getSpeed: function(){ return speed},
    accelerate: function(){
      if (speed >= 85){

      } return speed += 10},
    brake: function(){
      if (speed >= 0){
        if (speed < 5) {
          speed = 0
          return speed
        }
        else
        return speed -= 5}
      },
    speedUpSlowDown: function() {
      while (speed < 70) {
        this.accelerate()
        console.log(speed)
      }
      while (speed > 0 ) {
        this.brake()
        console.log(speed)
      }
    }
  }
}











//var sergioCar = createCar("Prius", 2017, "eggshell")
