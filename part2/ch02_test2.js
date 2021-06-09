var Person={};

Person['age']=19;
Person['name']="김나은";
Person.mobile = '010-1234-5678';

console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);




function add(a,b){
    return a+b;
}

var result = add(10,10);

console.log('더하기 (10,10): %d', result);





var add2 = function (a,b){
    return a+b;
};

var result2 = add2(10,20);

console.log('더하기 (10,20): %d', result2);