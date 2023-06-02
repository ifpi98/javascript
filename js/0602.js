"use strict";

// Array 객체
// isArray()
// indexOf()
// lastIndexOf()

var arr = [1,2,3,4,5,6,4,5,6,7,10];
console.log(Array.isArray(arr));
console.log(arr.indexOf(4));
console.log(arr.lastIndexOf(4));

// forEach() - for in 반복문과 유사
// map -> 배열에 규칙을 적용해서 새로운 배열을 생성

var out = arr.map((a)=>{
    return a*a;
});

var out = arr.map(a=>a*a);
// 자바 람다식
console.log(out);

var sum = 0;
arr.forEach((a,i) => {
    sum += a;
    out += `${i} : ${a} ->  ${sum} \n`;
})
console.log(out);   // 등차수열 구현
// 게시판 페이지 번호

// filter() 조건에 만족하는 요소를 추출
// every() 조건에 모두 만족
// some() 조건에 적어도 하나 만족하는지 확인

var arr2 = arr.filter((a) => {
    return a <= 5;
});

console.log(arr2);

// 요소가 3이 아닌 것만 추출 == 3인 요소를 삭제해라.
arr2 = arr.filter((a) =>{
    return a != 3
});

console.log(arr2);
// 특정 리스트 항목을 삭제할 때 사용한다.

var result = arr.some(num => num>5);
console.log(result);
var result = arr.every(num => num>10);
console.log(result);

// 확인메소드 - isArray()
// 탐색레소드 - indexOf(), lastIndexOf()
// 반복메소드 - forEach(), map()
// 조건메소드 - filter(), every(), some()
// 연산메소드 - reduce(), reduceRight()
// reduce 하나가 될 때까지 왼쪽에서 2개씩 묶는 함수
// reduceRight() 하나가 될 때까지 오른쪽에서 2개씩 묶는 함수

var arr = [1,2,3,4,5,6,7,8,9,10,11]
var out2 = '';
// var out2 = '';

arr.reduce((pre, cur, i, arr) => {
    out2 += `${i} => ${pre} ${cur} \n`;
    return pre + cur;
});
console.log(out2);

// ES5 JSON 객체
// JSON.stringify() 객체를 JSON문자열로 변환
// JSON.parse()     JSON문자열을 자바스크립트 객체로 변환

var 고양이 = {
    이름: "야옹이",
    나이: "2살"
}

console.log(고양이);
console.log(JSON.stringify(고양이));
console.log(JSON.parse(JSON.stringify(고양이)));

// 객체를 배열로 변환하기
// 고전적인 방법

var str = {
    name1: "강감찬",
    name2: "이순신",
    name3: "세종대왕",
    name4: ''
}

var strArr = [];
for (var key in str){
    if(str.hasOwnProperty(key)){
        strArr.push(key);
    }
}

// key값이 있는지 확인 후에 key를 배열로 추가

console.log(strArr);

var strArr = [];
for (var key in str){
    if(str.hasOwnProperty(key)){
        strArr.push(str[key]);
    }
}

// key값이 있는지 확인 후에 value를 배열로 추가
console.log(strArr);

// ES5 => Object.keys() Object.values()
var 이름 = Object.keys(str);
console.log(이름);
var 값 = Object.values(str);
console.log(값);

var 배열 = Object.keys(str).map(item => str[item]);
console.log(배열);

// Object.entries() Object.fromEntries()
var entry1 = Object.entries(str);
console.log(entry1);
// '키와 밸류'를 배열로 가지는 배열로 변경

var entry1 = Object.fromEntries(entry1);
console.log(entry1);
// 자바스크립트 객체로 변경

var JSON1 = JSON.stringify(entry1);
console.log(JSON1);
// JSON 문자열로 변경
// console.log(typeof JSON);

var JSON2 = JSON.parse(JSON1);
// 자바스크립트 객체로 변경
console.log(JSON2);

// ES5 String객체
// trim() 공백제거

// Object 객체들
// Object.defineProperty()  속성추가
// Object.defineProperties()    속성들 추가
// Object.create()  객체생성
// Object.preventWExtensions()  속성추가제한 (수정 및 삭제 가능)
// Object.isExtensible()    속성추가가능여부
// Object.seal()    속성삭제제한 (속성 수정 가능, 추가 및 삭제 불가)
// Object.isSealed()    속성제거가능여부
// Object.freeze()  속성삭제제한 (속성 추가, 삭제, 수정 모두 불가)
// Object.isFrozen()    속성제거가능여부
// Object.keys()    속성을 배열로
// Object.getOwnPropertyNames() 모든 속성을 배열로
// Object.getOwnPropertyDescriptor() 속성의 옵션 객체로

// 객체 속성 옵션
// value 값
// writable 변경가능여부
// get
// set
// configurable 설정변경여부
// enumerable 반복문 검사 여부

var heroes = {};
Object.defineProperty(heroes,"name",{
    value:"수퍼맨",
    configurable:true
})
console.log(heroes);        // 수퍼맨

// heroes.name = "아이언맨";
console.log(heroes);        //  수퍼맨
// 이름이 변경되지 않았다

for (var i in heroes){
    console.log(`i: ${heroes[i]}`);
}

// name 속성이 열거되지 않았다.

Object.defineProperty(heroes,"name",{
    value:"수퍼맨",
    writable:true,
    enumerable:true,
    configurable:true
})

var value="아이언맨";
Object.defineProperty(heroes,"name",{
    get:function(){
        return value;
    },
    set: function(newValue){
        value = newValue;
    }
});

console.log(heroes.name);
value = "스파이더맨";
console.log(heroes.name);
// 자동으로 게터와 세터를 실행한다. 캡슐화, 은닉화

Object.defineProperties(heroes,{
    name: {value:"토르"},
    region: {value:"아스가르드"}
});
console.log(heroes);

var hero2 = Object.create({}, {
    name: {value:"배트맨"},
    skill: {value: "마스크"}
});
console.log(hero2);
hero2.age = '40';
console.log(hero2);
// hero2.name = '수퍼맨';
// hero2.skill = '마스크2';
// hero2.age = '35';
console.log(hero2);

Object.preventExtensions(hero2);
console.log(Object.isExtensible(hero2));
// hero2.skill2 = "날아간다";
console.log(hero2);

// Uncaught TypeError: Cannot define property skill2, object is not extensible
// Object.defineProperty(hero2, "skill2", {
//     value: "fly..."
// });

var hero3 = Object.assign({},hero2);
Object.defineProperty(hero3, "skill2", {
    value: "fly..."
});
console.log(hero3);

Object.seal(hero2);
console.log(Object.isSealed(hero2));
// delete hero2.name;   -> 봉인되어 삭제 불가
Object.seal(hero3);
// delete hero3.age;   -> 봉인되어 삭제 불가
console.log(hero3);
// delete hero3.skill2;

// Object.keys() Object.Values()
// Object.getOwnPropertyNames()     속성을 배열로
// Object.getOwnPropertyDescriptor()        옵션 값 추출

console.log(Object.getOwnPropertyNames(hero2));
console.log(Object.getOwnPropertyDescriptor(hero2,"name"));
console.log(Object.getOwnPropertyDescriptors(hero2));