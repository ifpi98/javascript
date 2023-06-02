"use strict";
// 엄격 모드에서 코드 작성

// 탭메뉴에 클릭활성화하기

var LI = document.querySelectorAll('ul>li');
var DIV = document.querySelectorAll('section>div');

// 메뉴에 data-index 속성을 추가한다.
LI.forEach(function(li,i){
    li.setAttribute('data-index',i);
});

// for (var i = 0; i < LI.length; i++){    
//     LI[i].onclick=function(){

//         var index = this.getAttribute('data-index');
//         // console.log(index);

//         LI.forEach((li)=>{
//             li.classList.remove('active');  // 모두 제거한 후에
//         });

//         this.classList.add('active');   // 클릭한 것만 active

//         DIV.forEach((div)=>{
//             div.classList.remove('display');
//         })
        
//         DIV[index].classList.add('display');
//     }
// }

// 이벤트 위임 기능 추가

var UL = document.querySelector('ul');
document.addEventListener('click',function(e){
    // 이벤트 위임 (delegation)
    if(e.target.nodeName == "LI"){

        // console.log(e.target.nodeName);
        var index = e.target.getAttribute('data-index');
        console.log(index);
    

        LI.forEach((li)=>{
            li.classList.remove('active');  // 모두 제거한 후에
        });

        e.target.classList.add('active');   // 클릭한 것만 active
        // console.log(this);

        var hasClass=LI[index].classList.contains('active');
        console.log(hasClass);

        DIV.forEach((div)=>{
            div.classList.remove('display');
        })
        
        DIV[index].classList.add('display');

    }
})