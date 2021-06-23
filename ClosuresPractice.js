// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

function addPrefix(prefix) {
  return function(name) {
    return `${prefix} ${name}`;
  }
}
const prefix = addPrefix("Sir");
console.log(prefix("Smith"));


// Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:

function soundMaker(sound) {
  return function(animal) {
    return `${animal} cries out with a ${sound}!`
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");
console.log(mouseSound("Mouse"));

nameEnhancer = (prefix) => { 
  return addSuffix = (suffix) => { 
    return getName = (name) => {
      return `Hello ${prefix} ${name} ${suffix}!`;
    }
  }
}

// function nameEnhancer2(prefix, suffix, name) {
//   return `Hello ${prefix} ${name} ${suffix}`;
// }

// console.log(nameEnhancer2("Ms."));

const sir = nameEnhancer("Sir")
const madam = nameEnhancer("Madam");

const theThird = sir("the Third");
const theSecond = sir("the second");
const nameWithPrefixAndSuffix = theThird("Everton")
const princeHenry = theSecond("Henry");
const princeEdward = theSecond("Edward");
const kingFloyd = theThird("Floyd");
console.log(nameWithPrefixAndSuffix);
console.log(nameEnhancer("Dutchess")("the XIV")("Elizabeth"));

addMult = (addNum) => {
  return multiply = (multiplyNum) => {
    return number = (num) => {
      return (num + addNum) * multiplyNum;
    }
  }
}

const addTwoMultiplyByThree = addMult(2)(3)(5);
const addTwo = addMult(2);
const multiplyByThree = addTwo(3);
const multiplyByFour = addTwo(4);
const f = multiplyByFour(5);
const n = multiplyByThree(5);
console.log(n, f);

// Use a closure that takes a person's name, age and occupation and return a string
// create a function employeeInfo that returns "Employee Marney is x years old and works as a someOccupation"

employeeInfo = (name) => {
return employeeAge = (age) =>{
  return employeeOccupation = (occupation) =>{
    return `${name} is ${age} years old and works as a ${occupation}. Way to go ${name}!!!!!!`
    }
  }
}

const name = employeeInfo("Marney");
const age = name(30);
const occupation = age("junior dev");
console.log(occupation)
