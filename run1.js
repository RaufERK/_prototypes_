const beeKepper1 = {
  name: 'Ivan Pcholkin',
  bees: 1000,
  beeHome: 10,
  honey: 0,
  money: 0,
  // superKeeper: false,
  collectHoney(param) {
    this.honey += param;
    honeyEater.showThis.call(this);
    if (this.honey > 500) {
      this.superKeeper = [3, 3, 3, 3, 3, 3];
    }
  },
  sellHoney() {
    this.honey -= 10;
    this.money += 10;
  },
  eatHoney() {
    honeyEater.eatHoney.call(this, 1000);
    honeyEater.showThis.call(this);
  },
};

const honeyEater = {
  name: 'Oleg Medvedev',
  money: 100,
  honey: 0,
  globalSomeThing: 0,
  eatHoney(param) {
    this.honey -= param;
  },
  showThis() {
    // calculations
    // calculations
    console.log(' honeyEater => ', this);
  },
  buyHoney(param) {
    param.sellHoney();
    this.money -= 10;
    this.honey += 10;
    this.showThis();
  },
};

beeKepper1.eatHoney(100);
