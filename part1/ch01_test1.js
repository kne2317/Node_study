//duration_sum은 시작부터 끝까지의 시간을 측정한다.

var result = 0;

console.time('duration_sum');

for (var i =1; i<=1000; i++){
    result+=i;
}

console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result);




//자바 스크립트 객체만들기
var Person = {name:"짱구", age:5};
console.dir(Person);