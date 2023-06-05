// this를 지정할 수 있다.
var person1 = {
    name: "이순신"
}
var person2 = {
    name: "강감찬"
}
function showName(){
    console.log(this.name);
}

showName();     // this -> window
showName.call(person1);
// this를 binding처리하였다.
// call메서드는 모든 함수에 사용할 수 있다.
showName.call(person2);

function update(생일, 주소){
    this.생일 = 생일;
    this.주소 = 주소;
}
update.call(person1,2000,"서울");
console.log(person1);
update.call(person2,2020,"성남모란");
console.log(person2);

// apply()
생일주소 = [2010,"모란"];
update.apply(person2, 생일주소);
console.log(person2);

var num = [4, 10, 5, 3, 2];
var 최소 = Math.min(num);
var 최대 = Math.max(num);
console.log(최소);      // NaN
console.log(최대);      // NaN
var 최소 = Math.min.apply(null, num);
var 최대 = Math.max.apply(null, num);
console.log(최소);      // 2
console.log(최대);      // 10
var 최소 = Math.min(...num);
var 최대 = Math.max(...num);
console.log(최소);      // 2    - 스프레드 연산자
console.log(최대);      // 10

// apply는 배열을 받는다.

// bind() 메소드는 함수의 this값을 영구히 바꿀 수 있다.
var person3 = update.bind(person1);
person3(1999,"부산");
console.log(person1);

var user = {
    name: "을지문덕",
    showName:function(){
        console.log(`Hello, ${this.name}`);
    }
}

user.showName();
var fn = user.showName;
fn();
fn.call(user);
fn.apply(user);

var binding=fn.bind(user);
binding();

// Class 문법
// ES5 -> ES6 에 추가된 스펙
var User = function(name, age){
    this.name = name;
    this.age = age;
    this.showName = function(){
        console.log(this.name+" : " +this.age);
    }
}

var 학생1 = new User("이순신", 50);
console.log(학생1);
학생1.showName();

class User2{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name+" : "+this.age);
    }
}

var 학생2 = new User2("세종대왕", 40);
console.log(학생2);
학생2.showName();

// new를 통해 호출 생성자 함수와 동일하다.
// 클래스 내부에 constructor라는 객체를 만들어주는
// 생성자 메소드가 있다.
// 생성자는 return값이 없다.
// 학생1에는 showName이 객체 내부에 있고,
// 학생2에는 showName은 객체 프로토타입 내부에 있음.
// 프로토타입은 공유메모리 영역에 거주한다.
var User3 = function(name, age){
    this.name = name;
    this.age = age;
}

User3.prototype.showName2 = function(){
    console.log("프로토타입호출 : " + this.name);
}

var 학생3 = new User3("강감찬",20)

학생3.showName2();
// console.log(학생3);

// new를 사용하지 않으면 undefined가 나온다.
// var 학생5 = User2("홍길동",30);
// 학생5.showName2();
// class는 new없이 실행할 수 없다.
// 생성자함수는 new없이도 실행은 가능함

var 학생5 = new User2("홍길동",30);
학생5.showName();

console.log("==========");

// for in 반복문
for (var i in person1){
    console.log(i);
}

for (var i in person2){
    console.log(i);
}

//////////////////////////
// class 상속
// extends

class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive(){
        console.log("운전한다...");
    }
    stop(){
        console.log("정지한다...");
    }
}

class Bmw extends Car{
    constructor(color){
        super(color);
        this.navi = 1;
    }
    park(){
        console.log("주차한다...")
    }
    // 메서드 오버라이딩
    drive(){
        console.log("driving......")
    }
    stop(){
        super.stop();       //  부모 메서드 호출
        console.log("stop....")
    }
}

var car1 = new Bmw("blue");
console.log(car1);
car1.drive();
car1.stop();
car1.park();
// 메소드 오버라이딩 : 부모의 메소드를 재정의하는 기법
// method overriding
// 오버로딩은 메소드의 이름은 같으나 매개변수가 다른 것
// super() 부모 메소드를 호출한다.

// 생성자 오버라이딩
// 자식생성자는 무조건 부모생성자를 호출해야한다.
// super를 이용해 호출한다.

const SHOW = "show";
const firstSlide = document.querySelector('.item:first-child');
console.log(firstSlide);

function slide(){
    var currentSlide = document.querySelector("." + SHOW);
    var currentSlide = document.querySelector(`.${SHOW}`);
    // console.log(currentSlide + "1");

    if (currentSlide){
        // 현재 슬라이드는 클래스 제거
        // console.log(currentSlide + "2");
        currentSlide.classList.remove(SHOW);
        var nextSlide = currentSlide.nextElementSibling;

        // 다음 슬라이드가 있으면 다음 슬라이드에 클래스를 추가하고
        // 없으면 처음 슬라이드에 클래스를 추가한다.
        if(nextSlide){
            nextSlide.classList.add(SHOW);
        }else{
            firstSlide.classList.add(SHOW);
            console.log("마지막 슬라이드 상태에서 next가 없으면 여기로 오겠네");
        }
        // console.log(currentSlide + "3");

    } else {
        firstSlide.classList.add(SHOW);
    }
    
}

slide();
var STOP = setInterval(slide,2000);
var slider = document.getElementById('slider');
slider.addEventListener('mouseenter',function(){
    clearInterval(STOP);
    console.log("마우스가 들어왔다. 멈춰!");
})
slider.addEventListener('mouseleave',function(){
    STOP = setInterval(slide,2000);
    console.log("마우스가 나갔다. 시작!")
})

var LI = document.querySelectorAll('ul>li');
var LEFT = document.querySelector('p button:first-child');
var RIGHT = document.querySelector('p button:last-child');

var prev = 0;
var current = 0;
var next = 0;

LEFT.onclick = function(){
    Linit();
    var prev = LI[current];
    prev.style.left = 0;
    prev.style.left = "-100%";
    current++;
    if (current % 5 == 0){
        current = 0;
        Linit();
    }
    
    var next = LI[current];
    next.style.left = "-100%"   
    next.style.left = 0;

}

RIGHT.onclick = function(){
    Rinit();
    var prev = LI[current];
    prev.style.left = 0;
    prev.style.left = "100%";
    // current = current + 5;
    current++;
    if (current % 5 == 0){
        current = 0;
        Rinit();
    }
    
    var next = LI[current];
    next.style.left = "100%"   
    next.style.left = 0;

}

function Linit(){
    for (var i = 0; i < LI.length; i++){
        LI[i].style.left = "-100%";
    }
}

function Rinit(){
    for (var i = 0; i < LI.length; i++){
        LI[i].style.left = "100%";
    }
}
