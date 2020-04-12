class Ninja {
    constructor(name) {
        var self = this;
        this.name = name;
        this.health = 100;
        var speed = 3;
        var strength = 3;
        Ninja.prototype.showSpeed = function () {
            return speed;
        };
        Ninja.prototype.showStrength = function () {
            return strength;
        };
        var drinkSake = function () {
            self.health += 10;
        };
    }
    sayName() {
        console.log("My name is " + this.name);
    };
    showStats() {
        console.log("Name: " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.showSpeed() + ", " + "Strength: " + this.showStrength());
    };
    getDrunk () {
        this.health += 10;
        // drinkSake();
        // console.log("success");
    };
    punch (ninja) {
        ninja.health -= 5;
        console.log(ninja)
        console.log(this.name + " punched " + ninja.name + " in the face!!!!!!!");
    };
    kick (ninja) {
        ninja.health -= this.showStrength() * 15;
        console.log(this.name + " kicked " + ninja.name + " in the face!!!!!!!");
    };
}
class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        super.speed = 10;
        super.strength = 10;
        var wisdom = 10;
        Sensei.prototype.showWisdom = function () {
            return wisdom;
        }
    }
    speakingWisdom() {
        super.getDrunk();
        super.showStats();
        console.log(`Wisdom: ${ this.showWisdom() }`)
        console.log("God is love!!!!!!!")
    }
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
const alex = new Sensei("Alex");
alex.speakingWisdom();
console.log(alex)