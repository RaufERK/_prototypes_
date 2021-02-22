// const beeKepper = {
//   name: 'Ivan Pcholkin',
//   bees: 1000,
//   beeHome: 10,
//   honey: 0,
//   collectHoney() {
//     this.honey += 100;
//     console.log(this);
//   },
// };

// const honeyEater = {
//   name: 'Oleg Medvedev',
//   money: 1000,
//   honey: 0,
//   eatHoney() {
//     this.honey -= 10;
//   },
//   showThis() {
//     console.log(' showThis => ', this);
//   },
// };

// beeKepper.collectHoney();
// honeyEater.eatHoney();
// honeyEater.showThis();
function myFunc({ name, age, skills, salary }) {
  console.log('name = ', name);
  console.log('age = ', age);
  console.log('skills = ', skills);
  console.log('salary = ', salary);
}

person = { name: 'Ivan', salary: 100, age: 33, skills: 'JS HTML' };

myFunc(person);

const foo = (param) => {
  const { name, age } = param;
  console.log('foo : name =>', name);
};

foo(person);

const arr = [22, 33, 44];

let [param1, param2, param3] = arr;
console.log(param2);
param2 = 5555;
console.log(arr);

// const person = {
//   surName,
//   age,
//   salary,
// };

// console.log(person);
