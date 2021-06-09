var Users=[{name:'김나은', age:19},{name:'김미림',age:18},{name:'이미림',age:17}];

console.log('배열 요소의 수 : %d', Users.length);
for(var i =0;i<Users.length;i++){
    console.log('배열 요소 #'+i+' : %s',Users[i].name);
}


console.log('\n\nforEach 구문 사용하기');

Users.forEach(function(item,index){
    console.log('배열 요소 #'+index+' %s',item.name);
});