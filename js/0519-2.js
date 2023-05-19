console.log ("fetch로 통신하기");

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(
    function (response) {
        console.log(response);
        return response.json();
    }
)
.then(
    function (data){
        console.log(data);
        document.write(`사용자아이디 : ${data.userId} 타이틀 : ${data.title}`);
        document.write("<hr>");
        // console.log ("fetch로 통신하기 끝");
    }
);

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        var output = '';
        // console.log(data);
        output += "<table border='1'>";
        output += "<tr>";
        output += "<th>이름</th><th>전화번호</th><th>이메일</th>";
        output += "</tr>";
        
        for (var i in data){
            output += "<tr>";
            output += "<td>" + data[i].name + "</td><td>" + data[i].phone + "</td><td>" + data[i].email + '</td>';
            output += "</tr>";
        }
        output += "</table>";
        document.write(output);
        // console.log ("fetch로 통신하기 끝");
      })

    //   fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))