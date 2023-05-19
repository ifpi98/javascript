// DOM 문서 객체 선택하기

    // getElementById();
    // getElementByTagName();
    // getElementByClassName():

    // Elements가 들어가는 것은 배열을 의미함

    // var test = document.getElementById();
    // var test = document.getElementsByTagName();
    // var test = document.getElementsByClassName():

    var li = document.getElementsByTagName("li");
    // console.log(li);
    // console.log(typeof li);

    li[0].style.backgroundColor = 'red';
    li[1].style.backgroundColor = 'blue';
    
    for (var i = 0; i < li.length; i++){
        li[i].style.backgroundColor='gold';
        li[i].style.border="2px solid black";
        li[i].style.margin="5px";
    }

    for (var i of li){
        i.style.padding="1px";
    }

    for (var i in li){
        // console.log(i);
        if(!isNaN(i))   // 키값이 숫자면 
        li[i].style.borderRadius="20px";
    }

    // for (var i of li){
    //     i.style.borderRadius="10px";
    // }

    // var ul = document.getElementsByClassName("menu");
    // console.log(ul);

    var menu = document.getElementsByClassName('menu');
    // console.log(menu);
    menu[0].style.border = "3px solid red";
    // console.log(menu.length);

    var menu = document.getElementsByClassName('menu')[0];
    // console.log(menu);
    menu.style.border = "5px double red";

    var lia = document.querySelector('li>a');
    // console.log(lia);
    lia.style.fontSize = "25px";

    var lia = document.querySelectorAll('li>a');
    // console.log(lia);
    
    for (var i = 0; i < lia.length ; i++){
        lia[i].style.color="black";
        lia[i].style.fontSize=(3 * (i+1)) + "px";
    }

    Array.from(li).forEach((ele) => {
        ele.style.textAlign = "center";
    })

    // main_title.innerHTML="DOCUMENT MODEL";
    // html.innerHTML="<span>innerHTML</span>";
    // text.textContent="<span>innerHTML</span>";

    var h1 = document.getElementsByTagName('h1');
    // console.log(typeof h1);
    document.write(h1.length);
    document.write("<hr>");
    document.write(h1.item(0));
    document.write("<hr>");
    document.write(h1.item(0).nodeName);
    document.write("<hr>");
    document.write(h1.item(0).nodeValue);
    document.write("<hr>");
    document.write(h1.item(0).childNodes[0].nodeValue);
    document.write("<hr>");
    document.write(h1.item(1).childNodes[0].nodeValue);
    document.write("<hr>");
    document.write(h1.item(2).childNodes[0].nodeValue);
    document.write("<hr>");
    document.write(h1.item(3).childNodes[0].nodeValue);

    var header = document.getElementById('header');
    // document.write(header);
    document.write(header.childNodes);
    console.log(header.childNodes);
    document.write("<hr>");
    document.write(header.childNodes[0].nodeValue);
    document.write("<br>");
    document.write(header.childNodes[1]);
    document.write("<br>");
    document.write(header.childNodes[2]);
    document.write("<br>");
    document.write(header.childNodes[1].textContent);

    var span = document.querySelector('h2>span');
    document.write("<br>");
    document.write(span.parentNode.nodeName);
    document.write("<br>");
    document.write(span.parentElement);
    document.write("<br>");
    document.write(header.firstChild.nodeName);
    document.write(header.firstChild.nodeValue);

    document.write("<br>");
    var html = document.getElementById('html');
    document.write(html.nextSibling.nextSibling.nodeName);
    document.write("<br>");
    document.write(html.children);
    document.write("<br>");
    console.log(html.children);
    console.log(header.children);
    document.write(header.children[0].nodeName);
    document.write("<br>");
    document.write(header.nodeType);
    console.log(header.nodeType);   
    // 노드타입 1번 태그 2번 속성 3번 텍스트
    // 예시) <h2 title="title"> text </h2>
    document.write("<br>");
    document.write(header.className);

    var ul = document.querySelector('ul');
    console.log(ul.children[1]);
    header.classList.add("welcome");

    console.log(header.id);
    console.log(header.title);
    console.log(header.src);
    console.log(header.childElementCount);

