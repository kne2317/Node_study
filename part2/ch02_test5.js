var Users=[{name:'김나은', age:19},{name:'김미림',age:18}];
console.log('초기 배열의 요소 수 : %d', Users.length);

Users.push({name:'이미림', age:17});
console.log('push() 호출 후 배열의 요소 수 : %d', Users.length);

Users.pop();
console.log('pop() 호출 후 배열의 요소 수 : %d', Users.length);

Users.unshift({name:'이미림', age:17});
console.log('unshift() 호출 후 배열의 요소 수 : %d', Users.length);

Users.shift();
console.log('shift() 호출 후 배열의 요소 수 : %d', Users.length);

delete Users[1];
console.log('delete 키워드로 배열 요소 삭제 후');
console.log(Users);

Users.splice(1,0,{name:'이미림', age:17});
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.log(Users);

Users.splice(2,1);
console.log('splice()로 인덱스 2의 요소를 1개 삭제한 후');
console.log(Users);