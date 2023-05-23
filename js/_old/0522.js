var 과일 = ["사과", "수박"];
let fruit = ['apple', 'melon'];
const day=['월', '화', '수'];

// 배열은 문자, 숫자, 객체, 함수 등을 포함한다.
// 리터럴(literal) - 데이터 그 자체
// 배열은 요소의 길이 length
// iterable 객체 - 반복가능한 객체
// 인덱스(순번) -> 0번 시작

console.log(day.length);
for (var i = 0; i < 과일.length; i++){
    document.write(`day => ${과일[i]} `);
    // console.log(day[i]);
}
document.write('<br>');

for (var i = 0; i <= fruit.length - 1; i++){
    document.write(i + " : " + fruit[i] + " ");
}
document.write('<br>');

// 배열 api
// push() 배열 끝에 요소 추가
// 스택이라는 메모리

과일.push("귤");
console.log(과일);
과일.push("참외");
console.log(과일);
// 배열 마지막 요소 제거
과일.pop();
console.log(과일);

// 자료 구조
// 배열은 순서가 있는 리스트
// 배열 앞의 요소를 제거 또는 추가
// unshift(), shift()

day.unshift('일');
console.log(day);
// 제거
day.shift();
console.log(day);

// for ~ in / for ~ of
for (var i of 과일){
    document.write(`${i} `);
}
document.write('<br>');

for (var i in day){
    document.write(`${day[i]} `);
}
document.write('<br>');

// Array.forEach(function(ele,i)){
//     document.write(`${i} => ${ele} <br>`)
// }
fruit.forEach((ele,i) => {
    document.write(`${i} => ${ele} <br>`);
});

// 일반 변수와 참조 변수
var a = 10;
var b = 20;
// 일반 변수: 값을 가지고 있는 변수
// a와 b의 값을 바꾸고자 할 경우 (교환)
// a = b;  // a = 20
// b = a;  // b = 20

// 변수를 하나 추가해서 교환한다.
var c;
c = a;
a = b;
b = c;

console.log(a,b);

// 참조변수: 주소를 가지고 있는 변수
// 배열선언, 객체선언할 때 사용하는 변수
// 과일, fruit, day => 참조변수

var 푸드 = 과일;
console.log(푸드);
console.log(푸드==과일);
푸드.push("딸기");
console.log(과일);

// 생성자 함수
function Student(name, kor, math, eng, sci){
    this.name = name;
    this.kor = kor;
    this.math = math;
    this.eng = eng;
    this.sci = sci;

}

// 함수를 그냥 호출하는 방식으로 하면 오류 발생
// var 학생1 = Student('원빈', 50, 30, 20, 40);
// document.write("총점 : " + 학생1.getSum());

// new 키워드를 이용할 경우 정상 작동(this등이)
var 학생1 = new Student('원빈', 50, 30, 20, 40);
// document.write("총점 : " + 학생2.getSum());
var 학생2 = new Student('장동건', 54, 30, 20, 40);
var 학생3 = new Student('이정재', 50, 38, 20, 40);
var 학생4 = new Student('이정제', 50, 30, 32, 40);

// 프로토타입   -> 공통 영역에 메소드를 할당    -> 힙(heap)
// 메모리 절약

Student.prototype.getSum = function(){
    var sum = this.kor + this.math + this.eng + this.sci;
    return sum;
}
document.write("총점: " + 학생1.getSum() + "<br>");

Student.prototype.getAvg = function(){
    var avg = this.getSum()/4;
    return avg;
}
document.write("평균: " + 학생2.getAvg() + "<br>");

// 자바스크립트 정의
// 프로토타입을 기본으로 하는 함수형 언어
// 함수를 1급 객체로 취급한다.
// 생성자함수는 new 키워드를 사용한다.
// this -> new 생성된 참조변수형 객체를 나타낸다.
// new를 사용하지 않으면 생성자함수의 this -> window

// immutable과 mutable
// 일반 변수와 참조변수

var obj1 = {
    name:"kim"
}
var obj2 = obj1;
obj2.name = "LEE";
console.log(obj2, obj1);

var a1 = 10;
var a2 = a1;
a2 = 20;
console.log(a1, a2);

// 생성자 함수
function Car(model, speed, color){
    this.model = model;     // 필드, 속성
    this.speed = speed;
    this.color = color;

    this.getSpeed = function(){     // 메소드
        return this.speed;
    }

    this.setSpeed = function(speed){
        if(speed<0){
            return "속도는 음수가 안됩니다.";
        }
        this.speed = speed;
        return `${speed}로 설정되었습니다.`;
    }

}

var car1 = new Car('그랜저', 60, '블랙');
console.log(car1.getSpeed());
car1.speed = -100;      // 이렇게 설정하면 안된다.
console.log(car1.getSpeed());
console.log(car1.setSpeed(100));

//캡슐화, 은닉화
console.log(car1.setSpeed(-100));
// 잘못 사용될 수 있는 객체의 특정 부분을 사용자가 사용할 수 없게 막는 기술

// 프로토타입체인, 상속, 클로저, 콜백

var user={
    name: "마이클"
}
console.log(user);

var bmw={
    color : 'red',
    wheel : 4,
    drive(){
        console.log("bmw drive...");
    }
}

var audi={
    color : 'blue',
    wheel : 4,
    drive(){
        console.log("audi drive...");
    }
}

// bmw와 아우디의 공통적 부분을 처리하자.'
var car = {
    wheel: 4,
    drive(name){
        document.write(`${name}이 운전하다.... <br>`);
    }
}

var bmw = {
    color: 'red'
}
bmw.__proto__ = car;        // 상속
console.log(bmw.color);
console.log(bmw.wheel);
// document.write{}
bmw.drive('원빈');
console.log(car.color);     // car에는 color가 없음
console.log(bmw.color);     // bmw에는 color가 있음

audi.__proto__ = bmw;
audi.drive("장동건");
// 프로토타입 체인 prototype chain
// audi에 drive메소드가 없으면 bmw에서 찾고
// 또 없으면 car에서 찾는다.

// 원의 면적을 구하는 객체를 생성하기
function Circle(radius){
    this.radius = radius;
    this.getArea=function(){
        var area = this.radius*this.radius*Math.PI;
        return area;
    }
}

var circle = new Circle(5);
document.write("원의 면적 : " + circle.getArea() + '<br>');

var circle = new Circle(-8);
document.write("원의 면적 : " + circle.getArea() + '<br>');

function Circle2(radius){
    this.radius = radius;
}

Circle2.prototype.getArea=function(){
    var area = this.radius*this.radius*Math.PI;
    return area;
}

var circle2 = new Circle2(6);
document.write("원의 면적 : " + circle2.getArea() + '<br>');
document.write(circle instanceof Circle);
document.write('<br>');
document.write(circle2 instanceof Circle2);
document.write('<br>');
document.write("원의 반지름 : " + circle2.radius + '<br>');
circle2.radius = 10;
document.write("원의 면적 : " + circle2.getArea() + '<br>');


// radius에 this를 쓰지 않아서 직접 제어불가능
function Circle3(r){
    var radius = r; // 캡슐화, 은닉화
    this.getRadius = function(){
        // console.log("radius값 출력" + radius);
        return radius;
    },
    this.setRadius = function(r){
        if(r<0){
            throw "원의 반지름은 양수이어야 합니다"
        }else{
            radius = r;
        }
    }
}

// 원의 지름을 구하는 프로토타입을 만들자.
Circle3.prototype.getLength = function(){
    return 2*Math.PI*this.getRadius();
}
Circle3.radius = -100;
console.log(Circle3.radius);

var c3 = new Circle3(1);
c3.radius=2;
console.log(c3.radius);

var c3 = new Circle3(-1);
console.log(c3.getLength());
c3.setRadius(5);
console.log(c3.getLength());
// c3.setRadius(-5);
c3.radius = 20
console.log(c3);
// console.log(c3 instanceof Circle3);
// console.log(c3 instanceof Circle);
console.log(c3.radius);
// console.log(c3.getRadius());
// console.log(c3.getLength());
c3.setRadius(10);
c3.radius = 20
// console.log(c3.radius);
// console.log(c3.getRadius());
// console.log(c3.getLength());

function Circle3(r){
    var radius = r; // 캡슐화, 은닉화
    this.getRadius = function(){
        // console.log("radius값 출력" + radius);
        return radius;
    },
    this.setRadius = function(r){
        if(r<0){
            throw "원의 반지름은 양수이어야 합니다"
        }else{
            radius = r;
        }
    }

    // 오버라이딩 메소스 재정의
    this.toString=function(){
        return "반지름은" + this.getRadius() + "이고 원의 둘레는" + this.getLength();
    }
    this.print=function(){
        return `${this.getRadius()} : ${parseInt(this.getLength())}`;
    }
    this.output=function(){
    }

}

document.write(c3.toString());
c3.radius = 5;
c3.setRadius(5);
document.write(c3.toString());
document.write('<br>');
document.write(c3.print());

// radius의 값을 가져올 때 getRadius로 하자.
// this.radius -> radius, getRadius로 하자.
// parseInt() 정수값을 변환하는 함수

// 프로토타입과 상속에 대하여

function Grand(){
    Grand.prototype.재산 = "1억";
    this.나이 = 40;
}

var Father = new Grand();
console.log("나이" + Father.나이);
document.write(`<h2> ${Father.재산} <h1>`);

Father.재산="2억";
// Grand.prototype.재산 = "3억";
document.write(`<h2> ${Father.재산} <h1>`);

function Mama(){}
var 엄마 = new Mama();

Mama.prototype.재산 = Father.재산;
document.write(`<h2> ${엄마.재산} <h1>`);
console.log(`<h2> ${엄마.재산} <h1>`);

function Son(){}
Son.prototype = new Mama();
// console.log(Son);
var 아들 = new Son();
console.log(아들);
// 아들.prototype = 엄마;
document.write(`<h2>아들재산 ${아들.재산} <h1>`);

엄마.재산="만원";
document.write(`<h2>아들재산 ${아들.재산} <h1>`);

Mama.prototype.재산="5억";
document.write(`<h2>아들재산 ${아들.재산} <h1>`);