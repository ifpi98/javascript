// 한글 입력 시에 전송한다.
var form2 = document.getElementById('form2');
// form2.onsubmit=function(e){
//     var val = name2.value;
//     console.log(val);

//     if(val==""){
//         return false;
//     }
    
//     if(val.replace(/[가-힝]/g,"").length==0){
//         return true;    // 다음 단계를 실행
//     } else {
//         alert("한글 이름을 입력하세요");
//         e.preventDefault();
//     }
    
// }

// 이벤트 버블링 : 자식 -> 부모
// 이벤트 캡쳐링 : 부모 -> 자식
// eventPhase

// btn.addEventListener('click',function(e){
//     console.log("btn" + e.eventPhase);
// },false);
// field.addEventListener('click',function(e){
//     console.log("field" + e.eventPhase);
// },false);
// body.addEventListener('click',function(e){
//     console.log("body" + e.eventPhase);
// },true);
// // 1. 캡쳐링 2. 타겟 3. 버블링
// html.addEventListener('click',function(e){
//     console.log("html" + e.eventPhase);
// },true);

function handler(e){
    var phase = ['캡쳐링', '타겟', '버블링'];
    console.log(e.target.nodeName, this.nodeName, phase[e.eventPhase-1]);
}

// btn.addEventListener('click',handler, true);
// field.addEventListener('click',handler, true);
// body.addEventListener('click',handler, true);
// html.addEventListener('click',handler, true);


// e.target.nodeName -> e.target 최종 자식 엘리먼트
// this.nodeName -> e.currentTarget 이벤트가 호출된 엘리먼트

btn.addEventListener('click',handler, false);
field.addEventListener('click',handler, false);
body.addEventListener('click',function(){
    event.stopPropagation();
}, false);
html.addEventListener('click',handler, false);

// 이벤트 전달방지
// event.stopPropagation();
// 이벤트 버블링 제거
// 익스플로러 event.cancelBubble=true;

a.onclick = function(e){
    this.style.background = "gold";
    e.stopPropagation();
}
// a를 클릭하면 a, p, div 이벤트가 발생한다.
// 전파 중지를 설정하면 자신만 이벤트가 발생한다.

p.onclick = function(e){
    this.style.background = "cyan";
    e.stopImmediatePropagation();
}
// p를 클릭하면 p, div 이벤트가 발생한다.
// a는 p의 값을 따른다. (별도 설정된 값이 없으면)
// 전파 중지를 설정하면 자신만 이벤트가 발생한다.

div.onclick = function(){
    this.style.background = "pink";
}
// div를 클릭하면 div 이벤트가 발생한다.
// a, p는 div의 값을 따른다 (별도 설정된 값이 없으면)