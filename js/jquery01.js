$(document).ready(function(){
    $('h1').css('background','pink');
    $('h1').css('text-align','center');
});

//익명함수
$(function(){
    $('ul').css('border','2px solid');
    // $('ul').css('background-color', 'rgb(128,128,128)');
});

jQuery(document).ready(function(){
    // $('h1').css('text-align','center');
});

jQuery(function(){
    $('ul').css('border-radius','30px');
});

$('li').css('background','gray').css('margin',"5px");

// var kim = $.noConflict();

// kim(document).ready(function(){
//     kim('h1').css('color','red');
// });

$(()=>{
    // 메소드 체이닝 기법
    $('#first').css('font-style','italic').css('color','red').css('background','pink');
});

$('li.menu').css({
    'font-weight':'bold', textAlign : "center", border: "2px solid blue", 'box-shadow': '3px 3px black', 'background-color': 'rgb(128,128,128)'
});

// css()의 getter 기능
var color = $('li.menu').css('background-color');
console.log(color);

$('div#info').html(color);  // innerHTML을 대체
$('input[type="text"]').val("Hello jQuery");        // value

// 필터선택자
// input:reset
// input:submit
// input:text

$('input:submit').css('color','red');
$('input:text').css('color','red');
$('input:button').css('color','red');

// input:focus
// input:checked
// input:disabled
// input:enabled
// input:selected

$('input:focus').css('background','gold');

setInterval(function(){
    $('input:focus').css('background','gold');
},1000);

$('input:text').blur(function(){
    $(this).css('background','blue');
});

// input:blur -> XXXX
$('input:text').focus(function(){
    $(this).css('background','red');
});

$('select').change(function(){
    var 동물 = $('option:selected').val();
    $('#info').html("<span>" + 동물+ "</span>" + " 좋아요");
    $('span').css('color','blue');
})

// 필터선택자
// input:password

// 위치필터선택자
// input:odd 홀수 (인덱스는 0부터 시작)
// 요소: even 짝수
// 요소: first
// 요소: last


$('ul>li:odd').css('background','steelblue');
$('ul>li:even').css('background','cyan');
$('ul>li:last').css('border','3px solid red');
$('ul>li:first').css('border','3px solid red');

// 함수필터선택자
// li:eq(3)
// li:lt(2)     less than
// li:gt(2)     greater than
// li:not(:first)   first가 아닌 거
// li:nth-child(2n)
// li:nth-of-type(2n)
// li:contain(문자열)   특정문자열을 포함하는 거

$('li:eq(5)').css('padding','10px');
$('li:lt(3)').css('font-size','20px');
$('li:gt(3)').css('font-size','30px');
$('li:nth-child(2n)').css('color','red');
$('li:nth-of-type(2n+1)').css('color','blue');
$('li:contains("menu5")').css('border-radius','30px');

// li:has("strong")    li태그 중에서 strong태그가 있는 객체 선택
// $('li').closest('div')   li태그에서 가장 가까운 div태그 선택
// $('a, span')     복합선택자 a태그, span태그 선택
// $('a', 'li')     li태그에서 그 하위태그 a를 선택하라.
// $('li').find('a')     li태그에서 그 하위태그 a를 선택하라.
// $('li a)         

$('li:has("span")').css('width','200px');
$('li').closest('ul').css('padding','20px');
$('a','li').css('font-weight','bold');
$('li').find('a').css('font-style','italic');