window.onload=function(){
// html body에 문서를 자유롭게 읽을 수 있다.

} // 

// 객체와 배열을 사용한 데이터 관리
// 학생데이터 생성

var 학생0={이름:'kim1', 국어:87, 영어:70, 수학:40, 과학:60}
var 학생1={이름:'장동건', 국어:88, 영어:70, 수학:60, 과학:80}
var 학생2={이름:'강호동', 국어:87, 영어:60, 수학:40, 과학:80}
var 학생3={이름:'유재석', 국어:87, 영어:70, 수학:40, 과학:90}
var 학생4={이름:'손흥민', 국어:87, 영어:70, 수학:80, 과학:80}
var 학생5={이름:'김연아', 국어:57, 영어:70, 수학:40, 과학:80}
var 학생6={이름:'소녀시대', 국어:57, 영어:70, 수학:40, 과학:80}

var 학생0총점 = 학생0.국어 + 학생0.영어 + 학생0.수학 + 학생0.과학;
document.write(`<h2> 총점 : ${학생0총점} </h2>`);

var 학생5총점 = 0;

// 객체에 필요한 데이터를 추출하는 작업
for (var key in 학생5){
    if (key != "이름")  // 이름 키를 제외하고 계산한다.
        학생5총점 += 학생5[key];
    
}
document.write(`<h2>학생5 총점 : ${학생5총점} </h2>`)

function averagePoint(_obj){
    var aP = 0;
    for (var key in _obj){
        if (key != "이름")  // 이름 키를 제외하고 계산한다.
        aP += _obj[key];
    }
    return aP;
}

// document.write(averagePoint(학생0) + '<br>');
// document.write(averagePoint(학생1) + '<br>');
// document.write(averagePoint(학생2) + '<br>');
// document.write(averagePoint(학생3) + '<br>');
// document.write(averagePoint(학생4) + '<br>');
// document.write(averagePoint(학생5) + '<br>');

// 배열에 데이터를 추가하기
var students=[];
students.push({이름:'원빈', 국어:87, 영어:70, 수학:40, 과학:60});
students.push(학생1);
students.push(학생2);
students.push(학생3);
students.push(학생4);
students.push(학생5);
students.push(학생6);

// console.log(students);

// 모든 학생 배열 내의 객체에 메소드를 추가하기
for (var i in students){
    students[i].getSum=function(){
        return this.과학+this.국어+this.수학+this.영어;
    }
    students[i].getAvg=function(){
        return this.getSum()/4;
    }
}

// document.write(`학생3의 총점 : ${students[3].getSum()}<br>`);
// document.write(`학생3의 평균 : ${students[3].getAvg()}<br>`);

// 전체학생 이름, 총점, 평균출력하기

// 전체학생 성적출력하기

for (var i in students){
    // document.write(students[i].이름 + ' ' + students[i].getSum() + ' ' + students[i].getAvg() + '<br>');
    // console.log(stName);
}

// 하나의 변수에 저장하기
var output = "<hr> 이름 총점 평균 <br>";
for(var i in students){
    with(students[i]){
        output += 이름+ ' ' + getSum() + ' ' + getAvg()
 + '<br>';
    }
    // output += students[i].이름 + ' ' + students[i].getSum() + ' ' + students[i].getAvg() + '<br>'
}
// output 변수에 문자열로 학생데이터 값이 하나씩 추가된다.

// console.log(output);

// document.write(output);
// document.write('<hr>');
// console.log(students.pop());
// console.log(students.pop());

// 지금까지 객체를 사용한 데이터 생성이었습니다.
// 함수를 사용한 객체 생성

function 학생성적표(name, korean, math, english, science){
    var 성적출력 = {
        이름: name,
        국어: korean,
        수학: math,
        영어: english,
        과학: science,
        getSum: function(){
            return this.국어 + this.수학 + this.영어 + this.과학;
        },
        getAvg: function(){
            return this.getSum()/4;
        },
        // toString 메소드 재정의 -> 오버라이드 override
        toString: function(){
            return this.이름 + " " + this.getSum() + " " + this.getAvg();
        }
    }
    return 성적출력;
}

var 학생들=[];
학생들.push(학생성적표('원빈1',89,12,30,40));
학생들.push(학생성적표('원빈2',79,22,40,60));
학생들.push(학생성적표('원빈3',69,32,50,80));
학생들.push(학생성적표('원빈4',59,42,60,95));
학생들.push(학생성적표('원빈5',49,72,80,90));
// console.log(학생들);

// 성적출력

var 결과 = `이름 총점 평균<br>`;
for (var i in 학생들){
    결과 += 학생들[i].toString() + '<br>';
}
document.write('<hr>');
// document.write(결과);

// 생성자 함수
// new 키워드, instance 인스턴스

function Student(name, korean, math, english, science){
        this.이름 = name;
        this.국어 = korean;
        this.수학 = math;
        this.영어 = english;
        this.과학 = science;
        this.getSum = function(){
            return this.국어 + this.수학 + this.영어 + this.과학;
        };
        this.getAvg = function(){
            return this.getSum()/4;
        };
        // toString 메소드 재정의 -> 오버라이드 override
        this.toString = function(){
            return this.이름 + " " + this.getSum() + " " + this.getAvg();
        };
}

var 학생1 = new Student('장동건', 40, 30, 50, 40);
console.log(학생1);
// document.write(학생1);
document.write(학생1.toString());
// document.write(학생1);
// new를 사용하면 this는 학생1이 된다.
// new를 빼면 this는 window가 된다.

// var 학생2 = new Student('김동건', 50, 40, 60, 70);
// console.log(학생2);
// document.write(학생2);

var students=[];
students.push(new Student('장동건1', 40, 30, 50, 40));
students.push(new Student('장동건2', 50, 30, 50, 40));
students.push(new Student('장동건3', 60, 30, 50, 40));
students.push(new Student('장동건4', 70, 30, 50, 40));
students.push(new Student('장동건5', 80, 30, 50, 40));
students.push(new Student('장동건6', 90, 30, 50, 40));

var 결과 = `이름 총점 평균<br>`;
for (var i in students){
    결과 += students[i].toString() + '<br>';
}
document.write('<hr>');
document.write(결과);
// document.write(장동건1.toString());

// var str = "welcome";
// console.log(str);
// console.log(str.toString());
// document.write(str);
// document.write(str.toString());

// instanceof
// 해당 객체가 어떤 생성자 함수로 생성되었는가? 확인하기

var 학생10 = new Student("강호동", 10, 20, 30, 40);
console.log(학생10 instanceof Student);