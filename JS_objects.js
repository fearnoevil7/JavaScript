// students = [
//     {name: 'Remy', cohort: 'Jan'},
//     {name: 'Genevieve', cohort: 'March'},
//     {name: 'Chuck', cohort: 'Jan'},
//     {name: 'Osmund', cohort: 'June'},
//     {name: 'Nikki', cohort: 'June'},
//     {name: 'Boris', cohort: 'June'}
// ];

// function studentsAndcohorts(array){
//     for (var i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }
// studentsAndcohorts(students);

users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
        {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
        {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
};

function employees_managers(obj){
    // for (let key in obj){
    //     workers = [];
    //     workers.push(obj[employees]);
    //     // console.log(array);
    //     if(obj.hasOwnProperty(employees)){
    //         for (var j = 0; j < workers.length; j++){
    //             console.log(j + "-" + workers[j]) + "-" + workers[j].length;
    //         }
    //     }
    // }
    // for (var managers in obj){
    //     if(obj.hasOwnProperty(managers)){
    //         console.log(managers + ", " + obj[managers]);
    //     }
    // }
    for (let key in obj){
        let value = obj[key];
        console.log(key, value);
        var count = 0;
        var sum = 0;
        var array = [];
        var name = "";
        for (var j = 0; j < value.length; j++){
            // console.log(value[j])
            object = value[j];
            // console.log(object);
            for (let key in object){
                let value2 = object[key];
                sum += value2.length;
                name = value2.toString();
                // console.log(count, name, sum);
                array.push(value2);
            }
            sum = 0;
        }
        console.log(array)
        last_name = [];
        for (var x = 0; x < array.length; x++){
            if (x % 2 == 0){
                name = array[x].toString();
            } else if (x % 2 == 1){
                last_name = array[x].toString();
                sum = name.length + last_name.length;
                count++;
                console.log(count + " - " + name + ", " + last_name + " - " + sum);
            }
        }
        // console.log(last_name);
    }
}
employees_managers(users);
