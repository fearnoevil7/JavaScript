// 1)
// var hello = 'world';                                 
// console.log(hello);                                   
// 2)
// var needle = 'haystack';
// function test(){
//     var needle = 'magnet';
// 	console.log(needle);
// }
// test();
// 3)
// var brendan = 'super cool';
// console.log(brendan)
// function print(){
// 	brendan = 'only okay';
//     console.log(brendan);
//     return brendan
// }
// print();
// 4)
// var food = 'chicken';
// console.log(food);
// function eat(){
//     food = 'half-chicken';
// 	console.log(food);
//     var food = 'gone';
//     console.log(food)
// }
// eat();
// 5)
// var food = "chicken";
// console.log(food);
// var mean = function() {
// 	console.log(food);
// 	food = "fish";
// 	console.log(food);
// }
// mean();
// console.log(food);
// 6)
// var genre = "disco";
// console.log(genre);
// function rewind() {
//     genre = "rock";
// 	console.log(genre);
// 	genre = "r&b";
// 	console.log(genre);
// }
// rewind();
// console.log(genre);
// 7)
// dojo = "san jose";
// console.log(dojo);
// function learn() {
//     dojo = "seattle";
// 	console.log(dojo);
// 	dojo = "burbank";
// 	console.log(dojo);
// }
// learn();
// console.log(dojo);

function makeDojo(name, students){
    var dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));




