/*
    Created By : Vikram Markali
*/


// first javascript code...
console.log("Hello World!!!");


// Variables in javascript...
var name = 'vikram';
console.log(name);

let firstName ='vikram';
let lastName = 'markali';
console.log(firstName,lastName);


// Constant in javascript...
const interest = 0.3;
// interest = 1;
console.log('Interest:',interest);


// objects in javascript...

let person = {
    name: 'vikram',
    Age: 20
};
console.log(person);
// document.write(person);

person.name = 'Omkar';
console.log(person.name);


// Arrays in javascript...
let colors = [];
colors = ['red','green'];   //arrays are obj in js....it is dynamic as memory and values....
console.log(colors);

colors[2] = 1;
console.log(colors);


// Functions in javascript...
function display(firstName,lastName)    // function keyword is used to declare function in javascript...
{
    console.log('Hello',firstName,lastName);
}

display('vikram','markali');
display('omkar','bhalerao');


// Functions in javascript that returns values...
function square(number)
{
    return number * number;
}

console.log(square(9));

