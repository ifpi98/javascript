var req = new XMLHttpRequest();
// console.log(req);

function getData() {
    req.onreadystatechange = function () {
        if (req.readyState == 4 && req.status == 200) {
            target.innerHTML = req.responseText;
        }
    }

    // 비동기
    req.open("GET", "https://jsonplaceholder.typicode.com/users", false);
    req.send();
};

// 도큐먼트와 콘솔은 동기 방식이므로 그냥 실행 시 데이터가 없는 상태에서 실행함

// setTimeout(function(){
//     document.write(req.responseText);
//     console.log(req.responseText);
// },1000);

var req1;
if (window.XMLHttpRequest) {
    req1 = new XMLHttpRequest();
} else {
    req1 = new ActiveXObject("Microsoft.XMLHTTP");
}

req1.onreadystatechange = function () {
    if (req1.readyState == 4 && req1.status == 200) {
        // document.getElementById('target').innerHTML = req1.responseText;
    } else {

    }
}

req1.open("GET", "welcome.txt", true);
req1.send();

var req2 = new XMLHttpRequest();
// console.log(req2);

req2.onreadystatechange = function () {
    if (req2.readyState == 4 && req2.status == 200) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(req2.responseText, "text/xml");
        console.log(xmlDoc);

        var bookNL = xmlDoc.getElementsByTagName('book');
        var html = "";
        html += "<ol>";
        for (var i = 0; i < bookNL.length; i++) {
            var bookE = bookNL.item(i);
            var bookName = bookE.getElementsByTagName('name').item(0).firstChild.nodeValue;
            var pubName = bookE.getElementsByTagName('publisher').item(0).firstChild.nodeValue;
            var authorName = bookE.getElementsByTagName('author').item(0).firstChild.nodeValue;
            var price = bookE.getElementsByTagName('price').item(0).firstChild.nodeValue;
            html += "<li>"
            html += bookName + "<br> - " + pubName + "<br> - " + authorName + "<br> - " + price;
            html += "</li>"
        }
        html += "</ol>";
        bookInfo.innerHTML = html;
    }
}

// 비동기
req2.open("GET", "books.xml", true);
req2.send();


function getJson(){
    var req = new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(req.readyState == 4 && req.status == 200){
            var data = req.responseText;
            var json2 = JSON.stringify(data);
            // 객체를 json 문자열로 변환
            var obj = JSON.parse(data)
            // json 문자열을 객체로 변환
            var book = obj.books.book;

            
            var out = "<ol>";
            book.forEach(ele => {
                out += `<li>${ele.name}`;
                out += `<ul><li>${ele.publisher}</li>`;
                out += `<li>${ele.author}</li>`;
                out += `<li>${ele.price}</li></ul>`;
                out += `</li>`;
            });
        
            out += "</ol>";
            target.innerHTML = out;
        }
    }

    req.open('GET','books.json',true);
    req.send();
}


