function add(a,b,callback){
    var result = a+b;
    callback(result);
}
add(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기(10,10)의 결과 : %d',result);
});




function add2(a,b,callback){
    var result=a+b;
    callback(result);
    var history=function(){
        return a+ '+'+b+'='+result;
    };
    return history;
}

var add_history=add2(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기(10,10)의 결과 : %d',result);
});
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history());




function add3(a,b,callback){
    var result=a+b;
    callback(result);

    var count=0;
    var history=function(){
        count++;
        return a+ '+'+b+'='+result;
    };
    return history;
}

var add_history2=add3(10,10,function(result){
    console.log('파라미터로 전달된 콜백 함수 호출됨');
    console.log('더하기(10,10)의 결과 : %d',result);
});

console.log('결과 값으로 받은 함수 실행 결과 : '+add_history2());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history2());
console.log('결과 값으로 받은 함수 실행 결과 : '+add_history2());