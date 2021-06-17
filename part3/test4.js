var fs = require('fs');

// 파일을 동기식 IO로 읽어 들인다.
var data = fs.readFileSync('./package.json','utf8');

// 읽어 들인 데이터 출력
console.log(data);


//파일을 비동기식 IO로 읽어 들인다.
fs.readFile('./package.json','utf8',function(err,data){
    // 읽어 들인 데이터 출력
    console.log(data);
});

// 파일에 데이터 쓰기
fs.writeFile('./output.txt','Hello World!',function(err){
    if(err){
        console.log('Error : '+err);
    }
    console.log('output.txt 파일에 데이터 쓰기 완료');
});

fs.open('./output.txt','w',function(err,fd){
    if(err)throw err;

    var buf=new Buffer('안녕!\n');
    fs.write(fd, buf, 0, buf.length,null,function(err,written, buffer){
        if(err)throw err;
        console.log(err,written,buffer);
        fs.close(fd, function(){
            console.log('파일 열고 데이터 쓰고 파일 닫기 완료');
        });
    });
});