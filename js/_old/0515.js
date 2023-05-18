// javascript basic

// 변수
var name = "홍길동";
var age;
age = 30;

// 변수는 선언을 하고,
// 그 변수에 값을 할당해야한다.
// 할당하지 않으면 undefined;

document.write("<h2>name</h2>");
document.write("<h2>"+name+"</h2>");
document.write("<h2>"+age+"살</h2>");

document.write(`<h2>name</h2>`);
document.write(`<h2>${name}은 ${age}살입니다.</h2>`);
// ` 백틱 (ESC키 아래에 있는 키)
// 문자는 따옴표, 쌍따옴표, 홋따옴표로 감싼다.

var age=40;

var 이름;   // undefined 
document.write(이름);   // undefined 정의가 안되있음
이름 = "장동건";    // 문장 statement
document.write(이름);
이름 = "원빈";
document.write(이름);

console.log("내 이름은 " + 이름 + " 입니다.");

//let 과 const
let name1 = "Mike";
console.log(name1);
name1="Tomson";
console.log(name1);
let name2="마이클"

// let으로 선언된 변수명은 중복사용할 수 없다.
// let과 var는 스코프 scope - 렉시컬환경, 영역

// const : 절대로 바뀌지 않는 상수
const 생일 = "2010-10-01";
console.log(생일);
// 생일="2020-10-10";
console.log(생일);
// 변수이름정의하기

// var 05name="홍길동";
var let = "let me";
console.log(let);
// var if="welcome";
// console.log(if);


// 자바 -> final 로 상수를 표현한다.
// 변수선언할 때 변하지 않는 값은 const
// 변할 수 있는 값은 var와 let
// let은 이름이 중복되면 에러발생
// var는 중복되도 그래도 사용가능
// 변수이름은 첫글자는 숫자가 될 수 없다.
// 변수이름은 예약어로 사용할 수 없다. 
// 가급적 상수는 대문자로 사용한다.
// 변수명은 읽기 쉽고 이해할 수 있게 선언한다.
// 문자와 숫자, $와 _만 사용가능하다.

var BIRTHDAY = new Date();
console.log(BIRTHDAY);
console.log(BIRTHDAY.toDateString());
console.log(BIRTHDAY.toLocaleDateString());
console.log(BIRTHDAY.toLocaleTimeString());

let aaa$aaa=300;
let aaa_aaa=400;
// -는 사용불가
// let aaa-aaa=500;

let msg="I`m a boy";
console.log(msg);
let msg2="I\`m a boy";
console.log(msg2);
let msg3=`My name is ${name}`;
console.log(msg3);
let msg4=`나는 ${30+1}살 입니다`;
console.log(msg4);

// 숫자 Number, 문자 String
// 더하기, 빼기, 곱하기, 나누기, 나머지
//    +     -      *       /     %

console.log(name/2); // NaN, not number
console.log(이름*2); // NaN, not number

console.log(이름+10); // 문자와 연결가능
console.log(이름-10); // NaN, not number

// + 더하기 가능, 문자와 연결연산자 기능

// Boolean 불리언 - 참, 거짓 true, false
// 불대수-논리학

let a = true;
let b = false;

console.log(a==b);
// == 등가 연산자, === 동치연산자 (일치연산자)
console.log(10>5);
console.log(name=="홍길동");

//프로그래머 아내
// 남편 프로그래머
// 만약에 가게가 가서 여자가 있거나 이쁘면 가지마

// if(여자 || 이쁘다){
//     실행
// }

// type of 연산자
console.log(typeof 3);
// string, number, undefined, NaN, boolean,
// null 존재하지 않는 값 
// undefined는 초기화(정의)하지 않는 자료형

var age = null;
console.log(typeof age);
// typeof null -> object 객체

function add(a, b){
    var c = a+b;
    return c
}

console.log(typeof add);

var 고양이 = { }
console.log(typeof 고양이);

// 숫자 + 문자 = 문자
console.log(100 + "hi");

// 문장과 표현식
// statement과 expression
// var a = 10; statement
// 4+10; expression

// 대화상자
// alert 경고창, 알려주는 창
// prompt 입력받는 창
// confirm 확인받는 창

// var 별명 = prompt("별명을 입력하세요","한글로");
// console.log("환영합니다 " + 별명 + "님");

// var 성인 = confirm("당신은 성인입니까?");
// isAdult
// 확인 -> true, 취소 -> false

//조건문
// if (성인==true){
//     console.log("당신은 성인이군요");
// }else{
//     console.log("당신은 아직 미성년자이군요");
// }
// console.log(`${성인}`);

// prompt에서 취소 누르면 null값이 출력된다.

// = 대입연산자
// a = 3; // a라는 변수 3을 대입해라.

// ==, === 같은 지를 확인하는 방법

var x,y;
var input;

// input = prompt("정수를 입력하시오", "정수로");
// x = parseInt(input);

// input = prompt("정수를 입력하시오", "정수로");
// y = parseInt(input);

document.write(x + y + "<br>");