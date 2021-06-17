var Calc = require('./calc1');

var calc = new Calc();
calc.emit('stop');

console.log(Calc.title+'에 이벤트 전달함');