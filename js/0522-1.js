var h2 = document.getElementsByTagName('h2');
//배열

h2[0].style.backgroundColor = 'red';
h2[0].style.color = 'blue';
h2[0].style.fontStyle = 'italic';

// background-color -> backgroundColor

h2[1].style.cssText = "color:red; border:2px solid blue;"
h2[2].style.cssText = `background-color:gray; border:2px solid blue;`;

var add=document.querySelector('.add');
var del=document.querySelector('.del');
var h2 = document.querySelector('h2'); // 첫번째 것이 선택됨
var h2a = document.querySelectorAll('h2'); 

// 고전이벤트
add.onclick = function(){
    // h2a[4].classList.add('active');
    for (var i = 0; i<h2a.length;i++){
        h2a[i].classList.add('active');
    }
    toggleCount = 1;
    console.log(`토글카운트를 1로`);
}
// 클래스를 동적으로 추가한다.

// 표준이벤트
del.addEventListener('click', function(){
    for (var i = 0; i<h2a.length;i++){
        h2a[i].classList.remove('active');
    }
    toggleCount = 0;
    console.log(`토글카운트를 0으로`);
});

// 토글버튼을 하나 만들고 클릭하면 class추가되고
// 다시 클릭하면 class 제거하자.
// 표준이벤트로

var toggle=document.querySelector('.toggle');

toggleCount = 0;
// toggle.addEventListener('click', function(){
//     toggleCount += 1
//     if(toggleCount%2 == 0){
//         for (var i = 0; i<h2a.length;i++){
//             h2a[i].classList.remove('active');
//         }
//     }
//     else{
//         for (var i = 0; i<h2a.length;i++){
//             h2a[i].classList.add('active');
//         }
//     }
//     console.log(`지금은 ${toggleCount}`);
// });

var tog=document.getElementsByClassName('toggle')[0];
// console.log(tog);
//배열

// callback 앞의 작업이 끝나면 나중에 실행되는 함수

function toggle1(){
    toggleCount += 1
    if(toggleCount%2 == 0){
        for (var i = 0; i<h2a.length;i++){
            h2a[i].classList.remove('active');
        }
    }
    else{
        for (var i = 0; i<h2a.length;i++){
            h2a[i].classList.add('active');
        }
    }
    console.log(`지금은 ${toggleCount}`);
}

tog.addEventListener('click', toggle1); 

var h3 = document.querySelectorAll('h3');
// console.log(h3);

for (var i = 0; i< h3.length; i++){
    h3[i].onclick = function(){
        this.style.border = '5px solid blue';
    }
}

var h2 = document.querySelectorAll('h2');
for (var i = 0; i< h2.length; i++){
    h2[i].onclick = function(){
        this.style.border = '5px solid blue';
    }
}

var h4 = document.querySelectorAll('h4');
    // h4[0].onclick = function(){
    //     for (var i = 0; i < h4.length; i++){
    //         h4[i].style.border = '5px solid blue';
    //     }
    // }

for (var j = 0; j < h4.length; j++){
    h4[j].onclick = function(){
        for (var i=0; i<h4.length;i++){
            h4[i].style.border = "5px solid red";
        }
    }
}

