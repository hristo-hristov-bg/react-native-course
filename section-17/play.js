// const userName = "Hristo";
// let age = 42;
// const userHasHobbies = true;

// age = 50;

// normal function declaration
// function summarizeUser(userName, userAge, userHasHobbies) {
//   return (
//     `Name is ` +
//     userName +
//     `, age is ` +
//     userAge +
//     ` and the user has hobbies: ` +
//     userHasHobbies
//   );
// }

// arrow function declaration
// const summarizeUser = (userName, userAge, userHasHobbies) => {
//   return (
//     `Name is ` +
//     userName +
//     `, age is ` +
//     userAge +
//     ` and the user has hobbies: ` +
//     userHasHobbies
//   );
// };

// // short way for arrow functions
// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
// const addRandom = () => 2 + 1;

// console.log(summarizeUser(userName, age, userHasHobbies));
// console.log(add(2, 1));
// console.log(addOne(2));
// console.log(addRandom());

const person = {
  name: "Hristo",
  age: 42,
  greet() {
    console.log(`Hi I am ` + this.name + ` and I am ` + this.age + ` old.`);
  },
};

// person.greet();

const hobbies = ["Sports", "Movies"];

// for (let hobby of hobbies) {
//      console.log(hobby);
// }

// console.log(hobbies, 'old array');
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby), 'new array');

// const coppiedArr = [...hobbies];
// console.log(coppiedArr, 'copied arr');

// const copiedObj = { ...person };
// console.log(copiedObj, 'copied obj');

// const toArr = (...args) => {
//      return args;
// }
// console.log(toArr(1, 2, 3, 'Hristo'), 'rest operator function');

const printName = ({ name }) => {
  console.log(name);
};

printName(person);

const { name, age } = person;
console.log(name, age);
