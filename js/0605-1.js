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
        premoney = money;
        // console.log("이번 달 시작 금액 :"+premoney)
        for (var i = 0; i < 20 ; i++){
            money = money + (money * rate /100);
        }
        money = money-1000000;
        
        console.log("이번 달 잔고 :"+money)
        console.log("번 돈 :"+(money-premoney));
    }
    return money;
}

// console.log(stock(3000000,12,2));

// filter, end, eq, first, last, add
// is, find()
// 문서객체선택과 탐색

$(function(){

    var xml = "";
    xml += '<friends>';
    xml += '<friend>';
    xml += '<name>강감찬</name>';
    xml += '<lang>HTML</lang>';
    xml += '</friend>';
    xml += '<friend>';
    xml += '<name>이순신</name>';
    xml += '<lang>CSS</lang>';
    xml += '</friend>';
    xml += '</friends>';
    console.log(xml);

    var str2xml = $.parseXML(xml);
    // each문을 이용해 xml데이터를 화면에 출력하기
    $(str2xml).find('friends').each(function(index){
        var out='';
        out += "<p>" + $(this).find('name').text() + "</p>"
        out += "<strong>" + $(this).find('lang').text() + "</p>" + "</strong>"
        console.log(out);
        $('body').append(out);
    })

});

var request = new XMLHttpRequest();
var url = 'https://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108'; // 받아올 XML 파일의 주소

request.open('GET', url, true);
request.onreadystatechange = function() {
  if (request.readyState === 4 && request.status === 200) {
    var xmlData = request.responseXML; // XML 데이터를 변수에 저장
    // 원하는 작업을 수행하거나 변수를 활용할 수 있습니다.
    console.log(xmlData);
  }
};
request.send();


