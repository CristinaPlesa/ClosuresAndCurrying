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
      return `${prefix} ${name} ${suffix}`
    }
  }
}

const sirJunior = nameEnhancer("Sir")("the Third");
console.log(sirJunior("Everton"));

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