var lang = document.getElementById('lang');
var span = document.querySelector('span');

lang.onchange=function(){
    span.innerHTML = 
    `<h3>${lang.selectedIndex} 번째에 ${lang.value}를 선택</h3>`;
}

lang.onblur=function(){
    lang.options[2].value = "HTML5";
    lang.options[2].innerHTML = "HTML5";
}

var last = lang.options[2].value;
lang.options[2].selected=true;
span.innerHTML="<h2>"+last+"부터 시작한다.</h2>"

var button = document.querySelector('button');
// var span = document.getElementById('span');
button.onclick = function(){
    // console.log(span);
    if (span !== null && parents.contains(span)){
        parents.removeChild(span);
    } else{
        console.log("no child");
        return
    }
}

// 자바스크립트 노드 타입
// Node.ELEMENT_NODE (1)    => 태그
// Node.ELEMENT_NODE (2)    => attribute

// var i = 0;
// var stop = setInterval(function(){
//     document.body.innerHTML += "<h1>welcome" + i + "</h1>";
//     i++;
//     // console.log(new Date());
//     if (i == 5){
//         clearInterval(stop);
//         document.body.innerHTML += "인터벌 중지"
//     }
// },1000);

//var ID = setInterval(callback,time)
// time마다 callback을 실행
//clearInterval(ID)
// ID 인터벌을 중지

// var time = document.getElementById('time');
// setInterval(function(){
//     time.innerHTML = new Date().toLocaleDateString() + " ";
//     time.innerHTML += new Date().toLocaleTimeString();
// },1000);

