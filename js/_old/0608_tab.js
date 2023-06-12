window.onload=function(){

//클릭하면 href속성값을 tabTarget에 저장하고 => #을 삭제
// #tab-1 -> tab-1로 바뀌게

var targetLink = document.querySelectorAll('.tab-menu a');
var tabContent=document.querySelectorAll('.tab-content>div');

for (var i = 0; i < targetLink.length;i++){
    targetLink[i].addEventListener('click',function(){
        var orgTarget = event.target.getAttribute('href');
        console.log(orgTarget);
        var tabTarget = orgTarget.replace('#',"");
        console.log(tabTarget);
        for (var j=0; j<tabContent.length;j++){
            tabContent[j].style.display="none";
        }
        document.getElementById(tabTarget).style.display="block";

        // a태그 active 추가 제거하기
        for (var k=0; k < targetLink.length; k++){
            targetLink[k].classList.remove('active');
        }
        event.target.classList.add('active');
    });
}




}

