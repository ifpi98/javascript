// setInterval(function(){},1000)
// var button = document.getElementsByTagName('button');
// button.addEventListener('click',function(){})
// function 부분이 콜백함수

// 콜백함수 예시
// 함수를 매개변수로 받은 경우
function add(a, b, callback){
    var result=a+b;
    callback(result);
}

add(10,5,function(result){
    document.write("파라미터로 콜백할 수 있을까? <br>");
    document.write("더하기 결과: " + result);
    console.log("결과 : %d", result);
});

// 함수를 리턴하는 경우

function mul(a,b){
    var mul=a*b;
    var output = function(){
        return `${a}*${b}=${mul}`
    }
    return output;
}

var out = mul(5,6);         // 외부 함수 호출
document.write('<br>');
document.write(out);
var out = mul(5,6)();       // 내부 함수 호출
document.write('<br>');
document.write(out);
var out = mul(5,6);
document.write('<br>');
document.write(out());      // 내부 함수 호출

// 클로저
// 클로저를 사용하지 않은 예문

var count = 0;      // 전역변수를 선언

function fncCount(){
    count++;
    console.log(count);
    return count;
}

var counter = fncCount();

fncCount();
// fncCount();
// fncCount();
// fncCount();

// 모듈화, 은닉화에 위배된다. 
// 특정 함수를 쓰기위해 별도의 전역변수를 필요로 하기 때문에

// 클로저를 사용하는 경우

function fncCount2(){
    var count1 = 0;
    
    function addCount(){
        count1++;
        return count1;
    }
    return addCount
}

var counter2 = fncCount2();

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());

// 외부에서 내부변수에 접근가능하다.
// 자바에서 getter, setter 활용

var color = ['red', 'gold', 'silver', 'blue'];
var body = document.querySelector('body');
var button = document.querySelector('button');

var i1 = 0;                      // 전역 변수
function bgChange1(){
    body.style.background = color[i1];
    i1++;        // 내부에서 전역변수 변경
}

function bgChange(){
    var i = -1;
    function inner(){
        i++;
        i = i % color.length;
        body.style.background = color[i];
        console.log(i);
    }
    return inner
}

var bgC = bgChange();
button.onclick=function(){
    bgC();
}
