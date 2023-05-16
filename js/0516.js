// do ~ while
var i = 0;
do {
    console.log("먼저실행 : " + i)
    i++;
}while(i<10)
console.log(i);

// break : 반복문을 빠져나옴
// continue : 실행을 멈추고 다음 반복을 실행
// return : 함수의 끝부분에 선언하며, 리턴문을 만나면 함수는 종료됨. 그 이후의 값을 반환한다.

// while(true){
//     var answer = confirm("계속할까요?");
//     if(!answer){
//         console.log("while문을 빠져나옴");
//         break;
//     }
//     console.log("계속 진행중");
// }

// 홀수만 더하기, 짝수만 더하기
var sum = 0;
for (var i = 0; i <= 10; i++){
    if(i%2 == 0){
        // console.log("합계 : " + sum);
        continue;
    } 
    sum = sum + i
    // 1 + 3 + 5 + 7 + 9 = 25
}
console.log(sum);

console.log("------");
// 홀수만 더하기, 짝수만 더하기
var sum = 0;
for (var i = 0; i <= 10; i++){
    if(i%2 !== 0){
        // console.log("합계 : " + sum);
        continue;
    } 
    sum = sum + i
    // 2 + 4 + 6 + 8 + 10 = 30
}
console.log(sum);

// 1부터 100까지 합을 구하는 반복문
var sum = 0;
for (var i = 1; i <= 100; i++){
    sum = sum + i;      // sum+=i; 라는 표현으로 바꿀 수 있음
}
console.log("결과 => " + sum);

// 중첩 반복문
// i = 0, j => 1~10

var output="";
for (var i = 0; i < 3; i++){
    for (var j = 0; j < 1 + i; j++ ){
        output += "*";
    }
    output+="<br>"
    // console.log(output);
}
// console.log('\n');
document.write(output);

// i가 0일 때 j는 1이 될 때까지 반복 (1회) *한개
// i가 1일 때 j는 2가 될 때까지 반복 (2회) *두개
// ...
// i가 9일 때 j는 10이 될 때까지 반복 (10회) *열개

// i = 0 j = 0
// i = 1 j = 0, 1
// i = 2 j = 0, 1, 2
// i = 3 j = 0, 1, 2, 3

for (var i = 0; i < 3; i++){
    var str="★";
    document.write(str.repeat(i+1)+"<br>");
}

// 구구단 만드는 예제

for (var i = 2; i <= 3; i++){
    document.write("---" + i + "단 ---" + "<br>");
    for (var j = 1; j < 3; j++){
        var gop = 0;
        gop = i * j;
        document.write(gop + " ");
    }
    document.write("<br>");
}

for (var i=2; i<= 3; i++){
    document.write(`----${i}단 ----<br>`);
    for (var j=1; j<=3; j++){
        var sum = i * j;
        // document.write(`${i} * ${j} = ${sum} <br>`);
        document.write(i + "*" + j + "=" + sum + "<br>");
    }
}

// for in 반복문
// for in 객체 또는 배열
// for of 반복문
// for of 배열

var 과일 = "사과";
var 과일바구니 = ["사과", "배", "오렌지", "귤", "수박"];
// 인덱스           0      1       2      3      4

for (var i in 과일){
    document.write(과일[i] + " ");
}
document.write("<hr>");
// 일반 변수에서는 글자 한칸을 인덱스로 쓴다.

// console.log(과일[2]);
// 두 글자짜리 변수이므로 2번 인덱스는 undefined된 상태


console.time("시작");
for (var i in 과일바구니){
    document.write(과일바구니[i] + " ");
}
console.timeEnd("시작");

// 배열에서는 인덱스 순서(0~4)대로 출력
// in을 쓰면 i에는 인덱스 넘버가 들어감

// console.log(과일바구니[2]);
// 배열에서는 인덱스 2번(3번째) 출력

console.time("시작");
document.write("<hr>");
for (var i of 과일바구니){
    document.write(i + " ");
}
console.timeEnd("시작");
// of를 쓰면 i에는 실제값이 들어감

console.time("시작");
document.write("<hr>");
for (var i=0; i < 과일바구니.length; i++){
    document.write(과일바구니[i] + " ");
}
console.timeEnd("시작");
// 배열.length 배열의 개수를 확인하는 방법
document.write("<hr>");

// 객체
// 대괄호 [ ] 배열을 의미
// 중괄호 { } 객체를 의미

var 고양이 = { 
    이름: "나비",
    종류: "페르시안",
    나이: 2,
    먹다: function(음식){
        return this.이름 + "가 " + 음식 + "을 먹고 똥싸다";
    }
};

// this 객체 메서드: 함수가 객체의 메서드로 호출될 때 this는 객체 자체를 가리킵니다. 함수 내에서 개체의 속성 및 메서드에 액세스할 수 있습니다.

console.log(고양이.종류);
console.log(고양이.나이);
console.log(고양이['종류']);
console.log(고양이['나이']);

// 키 : 값
// 객체의 행동 -> 메소드 고양이.먹다('생선')

console.log(고양이.먹다('생선'));
var 결과 = 고양이.먹다('고등어');
console.log(결과);

// key 참조 변수 (다른 값을 써도 무방함)
for(var key in 고양이){
    // document.write(i);
    
    // 메소드만 제외하고 출력하고 싶다.
    if (key != "먹다"){
        document.write(key + " : " + 고양이[key] + "<br>");
    }
}

고양이.색="검정색";
for (var i in 고양이){
    document.write(i + " : " + 고양이[i] + "<br>");
}

//사람을 정의
// 나이는 30살, 이름은 홍길동, 생일은 9월 01일
// 사람이 밥을 먹고 소화를 했다.
// 취미는 인터넷게임

var person = { 
    age: 30,
    name: '홍길동',
    birthday: new Date().getMonth() + "월" + new Date().getDate() + "일",   // 오늘이 생일
    hobby: "internet game",
    eat(food="밥"){
        return this.name + "이 " + food + "을 먹고 소화했다 <br>" 
    }
};

document.write(person.eat("육개장"));
for (var i in person){
    document.write(i + " : " + person[i] + "<br>");
}
document.write("생일은 " + person.birthday + "<br>");
document.write(person.eat() + "<br>");