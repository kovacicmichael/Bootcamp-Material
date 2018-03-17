// object shorthand syntax
const name = "Nick";
const age = 42;

// key names and values are computed from variable
const instructor = { name, age };
console.log(instructor); // {name: "Nick", age: 42"}

// reassign variable name
const { name: teacher } = instructor;
console.log(teacher); // Nick

// default assignment
const { course = "FullStack" } = instructor;
console.log(course); // 'FullStack'

console.log(instructor)

// function parameters can also use destructuring and default values!
//the arrow function allows for default parameters
const divide = (a = 4, b = 2) => a / b;
console.log(divide()); // 2

const getName = ({ name: firstName }) => console.log(firstName);
getName(instructor); // Nick



// object shorthand syntax
const name = "Nick";
const age = 42;

// key names and values are computed from variable
// ES6:
const instructor = { name, age };
// ES5:
var instructor = { name: name, age: age };
console.log(instructor); // {name: "Nick", age: 42}

// reassign variable name
// ES6:
const { name: teacher } = instructor;
// ES5:
var teacher = instructor.name;
console.log(teacher); // Nick

// default assignment
// ES6:
const { course = "FullStack" } = instructor;
// ES5:
var course = instructor.course || "FullStack";
console.log(course); // 'FullStack'

// function parameters can also use destructuring and default values!
// ES6:
const divide = (a = 4, b = 2) => a / b;
// ES5:
var divide = function(a, b) {
    if (!a) {
        a = 4;
    }
    if (!b) {
        b = 2;
    }
    return a / b;
}
console.log(divide()); // 2

// ES6:
const getName = ({ name: firstName }) => console.log(firstName);
// ES5:
var getName = function(obj) {
    var firstName = obj.name;
    return console.log(firstName);
}
getName(instructor); // Nick
