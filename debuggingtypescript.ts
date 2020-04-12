1)
var myString: string;

myString = "Bee stinger";

myString = "9";

2)
function sayHello(name: string): string{
   return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));

console.log(sayHello("9"));

3)
function fullName(firstName: string, lastName: string, middleName?: string): string{
   let fullName = "`${user.firstName} ${user.middleName} ${user.lastName}`";
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));

4)
interface NinjaInterface {
   firstName: string;
   lastName: string;
   belts?: number;
}
function graduate(ninja: NinjaInterface){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belt: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));

5)

class Ninja {
   fullName: string;
   constructor(
      public firstName: string,
      public lastName: string){
         this.fullName = `${firstName} ${lastName}`;
      }
   debug(){
      console.log("Console.log() is my friend.")
   }
}
// This is not making an instance of Ninja, for some reason:
const turing = {
   fullName: "Alan Turing",
   firstName: "Alan",
   lastName: "Turing"
}
const shane = new Ninja( turing.firstName, turing.lastName);
// Since I'm having trouble making an instance of Ninja, I decided to do this:
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
   return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(shane));

6)
function increment(x: number): number{
    x += 1
    return x
}
// This works great:
console.log(increment(3));
function square(x: number): number{
    x * x
    return x
}
// This is not showing me what I want:
console.log(square(4));
// This is not working:
function multiply(x: number, y: number): number{
    const z = x * y;
    return z
}
// Nor is this working:
function math(x: number, y: number): Array<number>{
    let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}

7)
class Elephant {
    constructor(public age: number) {
        var self = this;
        this.age = age;
   }
        birthday = () =>{
        this.age++;
   }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
   console.log(`Babar's age is ${babar.age}.`)
   }, 2000)





