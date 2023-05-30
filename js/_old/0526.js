var test = document.getElementById('test');
// console.log(test);

try {
    aconsole.log("welcome");
    throw "무슨 에러인가?";
} catch(err) {
    test.innerHTML = err.message;
}

test.style.color = 'red';

// throw 사용자지정 오류를 만든다.
var numBox = document.getElementById('numBox');
var btn = document.getElementById('btn');
var errText = document.getElementById('errText');

var show = false;
btn.addEventListener('click',function(){
    errText.innerHTML = '';
    var val = numBox.value;
    console.log(val);
    try{
        if(val == "") {throw "비어있음"};
        if(isNaN(val)) throw "숫자가 아닙니다.";
        if(val < 1) throw "숫자가 너무 작다";
        if(val > 10) throw "숫자가 너무 크다";
        show = false;

    }catch(err){
        errText.innerHTML = "에러메시지: " + err;
        show = true;
    }finally{
        if(show){
            numBox.value='';
        }
    }
    errText.style.color = "red";
})


var num = 123.123455;
try{
    console.log(num.toFixed(3));
    console.log(num/0);
    console.log(decodeURI('http://www.daum.net/aaa%%%'));
    // URIError: URI malformed
    console.log(encodeURI('http://www.daum.net/$$$'));
    num.toUpperCase();          // TypeError
    // 고양이.날다() 같은 오류
    eval("alert(hello')");      // SyntaxError
    num = num + num2;           // ReferenceError
    console.log(num.toPrecision(101));      // RangeError
}catch(err){
    errText2.innerHTML = err.name + ": " + err.message;
}
errText2.style.color = 'red';

// toPrecision 수의 길이를 제한 (1~100까지 넣을 수 있음)
// toFixed 소수점의 길이를 제한