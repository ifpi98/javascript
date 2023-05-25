// 생성자 함수 선언
// 학생배열제작
// 전체학생출력

function Student(name, html, css, js, java) {
    this.name = name;
    this.html = html;
    this.css = css;
    this.js = js;
    this.java = java;

    this.getSum = function () {
        return this.html + this.css + this.js + this.java;
    }

    this.getAvg = function () {
        return this.getSum() / 4;
    }

    // toString override
    this.toString = function () {
        return this.name + " " + this.getSum() + " " + this.getAvg();
    }
}

// var 학생1 = new Student('원빈', 50, 60, 70, 80);
// console.log(학생1.getSum());
// console.log(학생1.getAvg());

var students = [];
students.push(new Student("원빈", 90, 70, 60, 40));
students.push(new Student("장동건", 81, 82, 56, 45));
students.push(new Student("강호동", 62, 54, 92, 50));
students.push(new Student("유재석", 73, 46, 48, 95));
students.push(new Student("소녀시대", 94, 68, 44, 60));
students.push(new Student("BTS", 65, 80, 40, 65));
students.push(new Student("2PM", 46, 32, 96, 70));
students.push(new Student("동방신기", 57, 64, 72, 85));
students.push(new Student("이정재", 78, 36, 88, 80));
students.push(new Student("빅뱅", 89, 38, 64, 85));

// console.log(students);

//전체성적
function allStudent() {
    var output = "이름 총점 평균 <br> <hr>";
    for (var i in students) {
        output += (Number(i) + 1) + " : " + students[i].toString() + "<br>";
    }
    output += "<hr>";
    list.innerHTML = output;
}

// 장학금 1등~3등
function good() {
    var output = "이름 총점 평균 <br> <hr>";

    var students2 = students.slice().sort(function (a, b) {
        return b.getSum() - a.getSum();
    }).slice(0, 3);
    // console.log(students2);

    for (var i in students2) {
        output += (Number(i) + 1) + " : " + students2[i].toString() + "<br>";
    }
    output += "<hr>";
    list.innerHTML = output;
}

// 성적이 나쁜 경우
function bad() {
    var output = "이름 총점 평균 <br> <hr>";
    var students3 = students.slice().sort(function (a, b) {
        return a.getSum() - b.getSum();
    }).slice(0, 3);
    // console.log(students2);

    for (var i in students3) {
        output += (Number(i) + 1) + " : " + students3[i].toString() + "<br>";
    }
    output += "<hr>";
    list.innerHTML = output;
}

// 장려상
function jang() {
    var output = "이름 총점 평균 <br> <hr>";
    var students4 = students.slice().sort(function (a, b) {
        return b.getSum() - a.getSum();
    }).slice(3, 7);
    // console.log(students2);

    for (var i in students4) {
        output += (Number(i) + 1) + " : " + students4[i].toString() + "<br>";
    }
    output += "<hr>";
    list.innerHTML = output;
}

// 삭제
function del() {
    students.splice(0, 1);

    var output = "이름 총점 평균 <br> <hr>";
    // var students4=students.slice().sort(function (a,b){
    //     return b.getSum() - a.getSum();
    // }).slice(3,7);
    // console.log(students2);

    for (var i in students) {
        output += (Number(i) + 1) + " : " + students[i].toString() + "<br>";
    }
    output += "<hr>";
    list.innerHTML = output;
}

// 리로드
function reload() {

    location.reload();
}

// getFullYear()
// getMonth()
// getDate()
// getDay() 요일

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth()+1;
var day = date.getDate();
var 요일 = date.getDay();

switch(요일){
    case 0 : 요일 = "일요일"; break;
    case 1 : 요일 = "월요일"; break;
    case 2 : 요일 = "화요일"; break;
    case 3 : 요일 = "수요일"; break;
    case 4 : 요일 = "목요일"; break;
    case 5 : 요일 = "금요일"; break;
    case 6 : 요일 = "토요일"; break;   
}

time.innerHTML=year+"년 " + month + "월 " + day + "일 " + 요일;

