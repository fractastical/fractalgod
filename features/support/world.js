// features/support/world.js

const { setWorldConstructor } = require('cucumber')

class CustomWorld {
  constructor() {
    this.variable = 0
  }

  setTo(number) {
    this.variable = number
  }

  incrementBy(number) {
    this.variable += number
  }

  digitalRoot(number)
  {
    var sum = 0;
    while(number > 0)
    {
      var loose = number % 10;
      sum += loose;
      console.log("n:",number," s:",sum, " l:",loose);
      number = (number - loose) / 10;
    }

    this.variable = sum;

  }

}

setWorldConstructor(CustomWorld)
