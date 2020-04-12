function Ninja(name){
    var self = this;
    this.name = name;
    this.health = 100;
    // this.health = health;
    // Ninja.prototype.health = 100;
    var speed = 3;
    var strength = 3;
    this.showSpeed = function () {
        return speed;
    };
    this.showStrength = function () {
        return strength;
    };
    var drinkSake = function () {
        this.health += 10;
    };
    this.sayName = function() {
        console.log("My name is " + this.name);
    };
    this.showStats = function() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.showSpeed() + ", " + "Strength: " + this.showStrength());
    };
    this.getDrunk = function() {
        drinkSake();
        // console.log("success");
    };
    this.punch = function(ninja) {
        ninja.health -= 5;
        console.log(ninja)
        console.log(this.name + " punched " + ninja.name + " in the face!!!!!!!");
    };
    this.kick = function(ninja) {
        ninja.health -= self.showStrength() * 15;
        console.log(this.name + " kicked " + ninja.name + " in the face!!!!!!!");
    };
}
console.log(this);
var jonathon = new Ninja("Jonathon");
var jc = new Ninja("JC");
jonathon.sayName();
jonathon.showStats();
console.log(jonathon)
jonathon.getDrunk();
jonathon.showStats();
jonathon.punch(jc);
console.log("JC's health:")
jc.showStats();
jonathon.kick(jc);
jc.showStats();