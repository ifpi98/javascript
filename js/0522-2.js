// setAttribute
// getAttribute

varA = document.querySelectorAll("a");
for (var i = 0; i < varA.length; i++){
    // console.log(varA[i]);
    // console.log(varA[i].getAttribute("value"));
    varA[i].style.backgroundColor = varA[i].getAttribute("value");
}

for (var i = 0; i < varA.length; i++){
    varA[i].setAttribute('index',i);
    console.log(varA[i].getAttribute('index'));
}

// data- 사용자정의속성 dataset 속성
// a태그를 클릭하면 data-color 속성을 읽어들여어 글자색변경

for (var i = 0 ; i < varA.length; i++){
    varA[i].addEventListener('click', function(){
        // this.style.color = this.getAttribute('data-color');
        this.style.color = this.dataset.color;
        this.innerHTML = this.dataset.coffeeName;
        console.log(this.dataset.coffeeName);
    });
}

// var btn = document.querySelector('button');
var btn = document.querySelectorAll('button');
var box = document.getElementById('box');
var str = '';
str+="<ul>";
str+="<li>JavaScript</li>";
str+="<li>jQuery</li>";
str+="<li>Ajax</li>";
str+="<ul>";

// btn.addEventListener('click', function(){
//     box.innerHTML = str;    
// });
toggleCount = 0;

function addList(){
    box.innerHTML = str;
    toggleCount = 1;
}

function remList(){
    box.innerHTML = '';
    toggleCount = 0;
}

function toggleList(){
    toggleCount = toggleCount + 1
    if( toggleCount % 2 == 0){
        remList();
    }
    else{
        addList();
    }
    console.log(toggleCount);
}

function toggleList2(){
    i++;
    i%2==0 ? remList() : addList();;
    console.log(toggleCount);
}

btn[0].onclick = addList;

var btn2 = document.getElementById('remList');
var btn3 = document.getElementById('toggleList');

btn[1].onclick = remList;
btn[2].onclick = toggleList2;

// innerHTML, textContent
// h1.innerHTML = "<span> hi </span>"
// h1.textContent = "<span> hi </span>"

// 버튼을 하나 만들어서 클릭했을 때
// 리스트 목록이 추가되는 예제



