// 수학객체, 숫자객체
// Number, Math

var num = 15;
num.toString();
console.log(num);
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(16));

console.log(Math.PI);
//Math.ceil() 올림
console.log(Math.ceil(Math.PI));
//Match.round() 반올림
console.log(Math.round(Math.PI));
// toFixed() 소수점 자릿수
var num2 = 30.12345;
console.log(num2.toFixed(2)); 30.12
console.log(num2.toFixed(0)); 30

// isNan()
var a = "100";
var b = 100;
console.log(isNaN(a));  // false
console.log(isNaN(b));  // false
console.log(isNaN('wel'));  // true
console.log(typeof a);  // string
console.log(typeof b);  // number

//number(), parseInt()

console.log(typeof Number(a));
var margin = "10px";
var margin1 = Number(margin);
var margin2 = parseInt(margin);

console.log(margin);    
console.log(margin1);   // NaN
console.log(margin2);   // 10

//parseFloat() 부동소수점반환
var padding = "18.5%";
console.log(parseInt(padding));     // 18
console.log(parseFloat(padding));   // 18.5

// Math.random() 0~1 사이의 무작위 숫자
console.log(Math.random());
console.log(Math.random()*45);
console.log(Math.floor(Math.random()*45)+1);
// floor 버림 ceil 올림

// 로또 번호 생성기
var lotto = [];

for (var i = 1; i<= 45; i++){
    lotto.push(i);
    // console.log(lotto);
}

document.write(lotto);
document.write("<br>");
document.write("이번주 당첨번호 ");

var num = Math.floor(lotto.length*Math.random());
for (var i = 0; i < 6; i++){
    document.write(Math.floor(lotto.length*Math.random()+1))
    if (i < 5){
        document.write(", ")
    }
}

Array.prototype.random = function(){
    var index = Math.floor(lotto.length*Math.random()); // 0부터 44
    return index;
}

document.write('<br>');

for (var i = 0 ; i<6; i++){
    document.write(lotto.random() + 1);
    if (i != 5){
        document.write(", ");
    }
}

var lotto6 = [];
while(lotto6.length != 6){
    var a = Math.floor(lotto.length*Math.random()+1)
    if (lotto6.includes(a)){
        console.log("중복입니다!");
        continue;
    } else {
        lotto6.push(a);
        // console.log(a + "입력!");
    }
}
document.write("<br>" + lotto6 + "<br>");

// Math.max(), Math.min()
var max = Math.max(1,2,3,4,55,14,5);
var min = Math.min(1,2,3,4,55,14,5);
console.log(max, min);

// Math.abs() 절대값 Math.pow(n,m) 제곱 Math.sqrt() 제곱근
console.log(Math.abs(-10));
console.log(Math.pow(2,5));
console.log(Math.sqrt(16));

// String 객체
var str = "welcome to my world";
var str1 = "안녕하세요";
console.log(str.length);        // 문자열의 길이
console.log(str1[2]);        // 문자열의 길이
// str1[4] = "용";      // 문자열의 특정 문자만 변경 불가
// JavaScript에서 문자열은 변경할 수 없는(immutable) 
// 속성을 가지고 있기 때문에 직접적으로 수정할 수는 없습니다.

// toUpperCase() toLowerCase()
console.log(str.toUpperCase());     // 대문자
console.log(str.toLowerCase());     // 소문자

// str.indexOf (text)
console.log(str.indexOf("wel"));    // 첫번째 글자의 인덱스
console.log(str.indexOf("to"));     // 첫번째 글자의 인덱스
console.log(str.indexOf("war"));     // 없으면 -1 출력됨

if(str1.indexOf("하") > - 1){
    console.log("하가 있습니다.")
}
if(str1.indexOf("핵") > - 1){
    console.log("핵이 있습니다.")
} else {
    console.log("핵이 없습니다.")
}

// slice(n,m) substring(n,m) substr(n,m)
console.log(str.slice(2,5));        //      lce 인덱스 2~5까지의 텍스트
console.log(str);        //      원본은 변화없음
var slice = str.slice(3,8);
console.log(slice);
console.log(str.substring(2,5));
console.log(str);        //      원본은 변화없음
console.log(str.substr(2,5));       // 2번부터 시작하는 5개를 가져온다.
console.log(str);        //      원본은 변화없음

// str.trim()   앞뒤 공백 제거
// str.repeat(n) n번 반복

var hello = "hello";
console.log(hello.repeat(3));

// 문자열을 비교
console.log("a" < "c");
console.log("a".codePointAt());     // 97
console.log("A".codePointAt());     //  65 ASCII 코드
console.log(String.fromCodePoint(65));  //    A

// 금칙어를 조회
if(str.indexOf('성인') > -1){       // 0 -> false null, NaN, undefined
    console.log("금칙어가 있다");
}

// Array 객체
// push, pop, unshift, shift, splice
// concat, forEach
// indexOf lastIndexOf includes
// find, findIndex
// sort, reverse
// map, filter
// join, split

// push() 뒤에 삽입, pop() 뒤에 삭제
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'strawberry', 'banana'];

console.log(과일);
console.log(과일.push('수박'));
console.log(과일);
console.log(fruit.pop());
console.log(fruit);

// unshift 앞에 삽입, shift 앞에 삭제
console.log(과일.unshift('수박'));
console.log(과일);
console.log(fruit.shift());
console.log(fruit);

// splice(n,m) 특정 요소 지움
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'strawberry', 'banana'];

console.log(과일);
// 과일.splice(1,2);
console.log(과일.splice(2,2));      // 귤(2)~딸기(3) 제거 (시작, 갯수)
console.log(과일);                  // 0, 1, 4가 남았음. 원본 변화 있음
console.log(과일.splice(1,0,"방울토마토"));     // 0은 제거할 개수
console.log(과일);                  // 1번 자리에 방울토마토가 추가됨

var 쓰레기 = fruit.splice(1,2);
console.log(쓰레기);
console.log(fruit);                 // 원본 변화 있음

//slice(n,m) 시작, 끝-1
var 과일 = ['사과', '배', '귤', '딸기', '바나나'];
var fruit = ['apple', 'strawberry', 'banana'];
console.log(과일.slice(1,4));           // 배, 귤, 딸기 (1, 2, 3번 인덱스)
console.log(과일);                      // 원본 유지

// concat합쳐서 새 배열을 반환
console.log(과일.concat(fruit));
console.log(fruit);
console.log(과일);                      // 원본 유지됨
var 장바구니 = 과일.concat(fruit);      // 별도로 저장 필요
console.log(장바구니);

// forEach 배열 반복
과일.forEach((item,index)=>{
    console.log(`${index} : ${item}`);
});

// indexOf lastIndexOf 
// 앞에서 부터 검색, 뒤에서부터 검색
var 과일 = ['사과', '배', '바나나', '귤', '딸기', '바나나', '귤'];
console.log(과일.indexOf('귤'));        // 귤이 발견된 최초 인덱스, 없으면 -1
console.log(과일.lastIndexOf('바나나'));    // 바나나가 발견된 마지막 인덱스,  없으면 -1

// find(), findIndex()
// 찾으면 true, 없으면 undefined

var result = 과일.find((item)=>{
    return item=="귤";
});
console.log("==" + result);

var arr = [1,2,3,4,5,6,7,8,9];
var result=arr.find((item)=>{
    return item % 2 == 0
});
console.log("==" + result);

var result=arr.find((item)=>{
    return item % 3 == 0
});
console.log("==" + result);

var user=[
    {name : "원빈1", age:30},
    {name : "원빈2", age:14},
    {name : "원빈3", age:10}
];

var result = user.find((a)=>{
    if(a.age<15){
        return true;
    } return false;
});

console.log(result);

var result = user.findIndex((a)=>{
    if(a.age<15){
        return true;
    } return false;
})

console.log(result);

// filter 만족하는 모든 요소를 배열로 반환한다.
var result = user.filter((a)=>{
    if(a.age<15){
        return true;
    } return false;
})

console.log(result);
// 찾는 값이 있으면 true로 반환하고 result에 저장한다.
// 없으면 false를 반환하고 그 다음 요소를 찾는다.

var fruit=['apple', 'strawberry', 'banana', 'cherry', 'coconut', 'blueberry'];
// fruit에서 글자가 7개 이상인 과일명만 추출하시오.
// filter를 사용하자.

var result = fruit.filter((item) => {
    if (item.length >= 7){
        return true;
    } return false;
});

// 화살표 함수를 사용해본 케이스
var result2 = fruit.filter((item) => item.length <= 6);
console.log(result2);

// forEach를 이용해서 fruit의 데이터를 
// <ul> 태그에 <li> 태그 리스트로 삽입해보자.
// document로 출력
// 0 : apple 

var ul_li_str = '';
ul_li_str += '<ul>';

fruit.forEach((item,index)=>{
    ul_li_str += `<li> ${index} : ${item} </li>`;
})
// ul_li_str += '<li> a </li>';
// ul_li_str += '<li> b </li>';
// ul_li_str += '<li> c </li>';
ul_li_str += '</ul>';
// console.log(ul_li_str);

var ulli = document.getElementById('ulli');
ulli.innerHTML = ul_li_str;

// map 함수를 받아 특정기능을 수행하고 새로운 배열을 반환한다.

var user = [
    { name: "원빈1", age: 30 },
    { name: "원빈2", age: 20 },
    { name: "원빈3", age: 10 },
    { name: "원빈4", age: 40 }
];

var user2 = user.map((a,i) => {
    return a.name+"님 " + (a.age-1) + "살";
});
console.log(user2);
console.log(user);      // 원본 변화 없음

// join, split
var join = 과일.join("-");
console.log(join);              // 하나의 문자열로 합침
document.write(join);
document.write('<br>');
// console.log(과일);
document.write(과일);           // 원본 변화 없음

var str = "welcome, to , my, world";
var split = str.split(",");      // 한글자씩 분해되거나, 넣은 값을 기준으로 분리됨
document.write("<br>");         
console.log(split);             // 결과물이 배열로 나온다.
document.write(split);

// isArray() 배열 확인
console.log(Array.isArray(과일));
console.log(Array.isArray(split));
console.log(Array.isArray(str));
console.log(Array.isArray(join));

//sort() reduce()
var arr = [1,5,2,6,3,9]
arr.sort();                 // 정렬됨, 원본 수정함.
console.log(arr);

arr.sort(function(a,b){
    return b-a;            // 내림차순, b>a인 경우에는 자리를 바꾸는 방식
})
console.log(arr);

var user = [
    { name: "원빈", age: 30 },
    { name: "장동건", age: 20 },
    { name: "손흥민", age: 10 },
    { name: "유재석", age: 40 }
];

user.sort();
// console.log(user);
user.sort(function(a,b){
    if(a.name < b.name){
        return 1;
    } else if(a.name > b.name) {
        return -1;
    } else {
        return 0;
    }
});
console.log(user);
