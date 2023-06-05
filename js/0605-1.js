$(document).ready(function(){
    $('h3').css({
        backgroundColor:"black",
        color:"white"
    })
});         // end

// .ready는 deprecated되었으므로 아래의 형태를 추천함

document.addEventListener('DOMContentLoaded', function() {
    // 문서가 준비되었을 때 실행될 로직을 여기에 작성합니다.
  });

// index가 짝수인 객체만 선택
$('h3').filter(':even').css({
    border: "5px solid red"
})

// index가 3의 배수인 경우만 선택
$('h3').filter(function (index){
    return index % 3 == 0;
}).css('font-size', "30px");

$('h3').filter(function (index){
    return index % 3 !== 0;
}).css('color', "red");

function stock(money, month ,rate){
    for (var j = 0; j < month; j++){
        for (var i = 0; i < 20 ; i++){
            money = money + (money * rate /100);
        }
        money = money-1000000;
    }
    return money;
}

console.log(stock(2000000,6,2));




// filter, end, eq, first, last, add
// is, find()
// 문서객체선택과 탐색
