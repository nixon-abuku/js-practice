const name = "Nixon";
const age = 25;
const isLearning = true;

//SCORES
let score = 100;
score = 200;

console.log(score);
console.log(name);
console.log(age);
console.log(isLearning);

//Data types 
console.log(typeof name);
console.log(typeof age);
console.log(typeof isLearning);


function greet(name){
    console.log(`Hello ${name}`);
}
greet("Nixon");
greet("World");
greet();

function add(a, b){
    return a + b;
}
const result = add(10, 5);
console.log(result);

//MINI CHALLENGE 
function multiply(a, b){
    return a * b;
}
const product = multiply(6, 7);
console.log(product);
console.log(`${name} has ${product} points`);