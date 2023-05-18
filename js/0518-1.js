// for in 반복문
// windows

for (var i in window) {
    // console.log(`${i} : ${window[i]}`);
}

var user = [
    {
        "userId": 1,
        "id": 1,
        "title": "welcome occaecati excepturi optio",
        "body": "quia et suscipit\nsuscipit"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse light super",
        "body": "est rerum tempore vitae\nsequi sint"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem",
        "body": "et iusto sed quo iure\nvoluptatem occaecati"
    }
]

// console.log(user[0].title);
// console.log(user[0].body);

for (var i = 0; i < user.length; i++) {
    document.write("title: " + user[i].title);
    document.write("<br>");
}

document.write("<hr>");

for (var i = 0; i < user.length; i++) {
    document.write(user[i].id + " : " + user[i].title);
    document.write("<br>");
}

document.write("<hr>");

for (var i = 0; i < user.length; i++) {
    document.write(user[i].body);
    document.write("<br>");
}

for (var i in user) {
    document.write(user[i]);
    // console.log(user[i]);
}

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json));

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));