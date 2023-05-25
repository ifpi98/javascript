// json 파일 요청 - 비동기
// fetch, ajax (jQuery), axios

var content = document.getElementById('content');

function search(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        // console.log(Array.isArray(data));       // false
        var output = "<table border='1'>";
        output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>";

        data.forEach((ele, i) => {
            output += "<tr>"
            output += "<td>" + "<a href='javascript:void(0)' onclick=detail("+ (i+1) + ")>" + (i+1) + "</a>" + "</td>";
            output += "<td>" + ele.username + "</td>";
            output += "<td>" + ele.phone + "</td>";
            output += "<td>" + ele.email + "</td>";
            output += "</tr>"
        });    
    
        output += "</table>";
        content.innerHTML = output;
    })

}


         

function detail(id) {

    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => {
        // console.log(Array.isArray(data));       // false

        if (Array.isArray(data)){
            var dataArray = data;
        } else{
            var dataArray = [data];
        }
        // const dataArray = [data];
        var output = "<table border='1'>";
        output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>";

        dataArray.forEach((ele, i) => {
            output += "<tr>"
            output += "<td>" + ele.id + "</td>";
            output += "<td>" + ele.username + "</td>";
            output += "<td>" + ele.phone + "</td>";
            output += "<td>" + ele.email + "</td>";
            output += "</tr>"
        });

        // data.forEach((ele, i) => {
            // output += "<tr>"
            // output += "<td>" + data.id + "</td>";
            // output += "<td>" + data.username + "</td>";
            // output += "<td>" + data.phone + "</td>";
            // output += "<td>" + data.email + "</td>";
            // output += "</tr>"
            // document.write(ele.username + "<br> ");
            // document.write(ele.email + "<br> ");
            // document.write(ele.phone + "<br> ");

        output += "</table>";
        content2.innerHTML = output;

    });


}

// detail(1);

// 순번, 사용자이름, 전화번호, 이메일
// username, email. phone

function detail2(id="") {

    fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(data => {
        console.log(Array.isArray(data));       // false

        if (Array.isArray(data)){
            var dataArray = data;
        } else{
            var dataArray = [data];
        }
        // const dataArray = [data];
        var output = "<table border='1'>";
        output += "<tr><th>순번</th><th>이름</th><th>전화번호</th><th>이메일</th></tr>";

        dataArray.forEach((ele, i) => {
            output += "<tr>"
            output += "<td>" + ele.id + "</td>";
            output += "<td>" + ele.username + "</td>";
            output += "<td>" + ele.phone + "</td>";
            output += "<td>" + ele.email + "</td>";
            output += "</tr>"
        });

        // data.forEach((ele, i) => {
            // output += "<tr>"
            // output += "<td>" + data.id + "</td>";
            // output += "<td>" + data.username + "</td>";
            // output += "<td>" + data.phone + "</td>";
            // output += "<td>" + data.email + "</td>";
            // output += "</tr>"
            // document.write(ele.username + "<br> ");
            // document.write(ele.email + "<br> ");
            // document.write(ele.phone + "<br> ");

        output += "</table>";
        content3.innerHTML = output;

    });

}

// detail2();

function search2(){

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(Array.isArray(data));       // false
        var output = "<table border='1'>";
        output += "<tr><th>순번</th><th>타이틀</th><th>완료여부</th></tr>";

        data.forEach((ele, i) => {
            output += "<tr>"
            // output += "<td>" + "<a href='#' onclick=detail("+ (i+1) + ")>" + (i+1) + "</a>" + "</td>";
            output += "<td>" + (i+1) + "</td>";
            output += "<td>" + ele.title + "</td>";
            output += "<td>" + (ele.completed ? "완료" : "미완료") + "</td>";
            output += "</tr>"
        });    
    
        output += "</table>";
        content.innerHTML = output;
    })

}

var a = [1,2,3];
var b = a;
a.push(4);
console.log(b);


var a = [1, 2, 3]; 
var b = a; 
a.length = 0; 
console.log(a);
// a.push(1, 2, 3, 4); 
console.log(b); // [1, 2, 3, 4]

var a = [1,2,3];
b = Array.from(a);
a = [1,2,3,4];
console.log(b); // [1,2,3,4]

var a = { value: [1, 2, 3] };
var b = a;
a = { value: [1, 2, 3, 4] };
console.log(b.value);