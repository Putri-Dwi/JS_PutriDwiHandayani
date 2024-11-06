
// 1. Define Practice
function printHeart() {
    console.log("<3");
}
printHeart();

//2. Return Value Practice
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3));  // 6
console.log(multiply(9, 9));  // 81
console.log(multiply(5, 4));  // 20

//3. Scope Practice
let animal = "Giant Pacific Octopus";
function observe(){
    let animal = "Pajama Squid";
    console.log(animal);
}
observe(); 
//A. Output : Pajama Squid

let deadlyAnimal = "Blue-Ringed Octopus";
function handleAnimal() {
    let deadlyAnimal = "Scorpionfish";
    console.log(deadlyAnimal);
}
handleAnimal();
console.log(deadlyAnimal) 
//B. Output : 
//   Scorpionfish 
//   Blue-Ringed Octopus

//4. Arrow Function Exercise
const sayHello = (name) => {
    return `Hello ${name}!`;
}
console.log(sayHello("Hagrid"));  // Output: "Hello Hagrid!"
console.log(sayHello("Luna"));    // Output: "Hello Luna!"



