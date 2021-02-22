function Person(name, money, honey) {
  this.name = name;
  this.money = money;
  this.honey = honey;
  // оч много переменых
  // complicated calc
}
Person.prototype.eatHoney = function () {
  this.honey -= 10;
  console.log('  eatHoney  ==> ', this);
};

Person.prototype.showThis = function () {
  console.log('  showThis  ==> ', this);
};

//создаём экземпляр (instance)
const honeyEater = new Person('Oleg Medvedev', 100, 0);

//функция коструктор потомка
function HoneyKeer(name, money, honey, bee, beeHome) {
  this.bee = bee;
  this.beeHome = beeHome;
  this.name = name;
  this.money = money;
  //обращаемся к коструктору родителя
  Person.call(this, name, money, honey);
}
//заимствуем методы родителя (суперКласса)

HoneyKeer.prototype = Object.create(Person.prototype);
HoneyKeer.prototype.constructor = HoneyKeer;

const pcholkin = new HoneyKeer('Ivan Pcholkin', 111, 22, 1000, 10);

// const eaters = [];
// for (let index = 0; index < 5; index++) {
//   eaters.push(new Person('Oleg Medvedev' + index, Math.random(), 0));
//   console.log(eaters[index]);
// }

honeyEater.showThis();
pcholkin.showThis();
// console.log(pcholkin);

const newObj = Object.create(Person);
console.log(' ==>', newObj);
