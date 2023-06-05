// jQuery each
// jQuery.each( array, callback)
// jQuery.each( object, callback)
// .each(function(index, element){})

$('#menu>li').each(function(i,el){
    $(this).text("리스트" + i);
    $(this).css('border',"2px solid");
});

// innerHTML -> html()
// textContent -> text()
// forEach -> each
// length -> size()

var LI = $('ul>li');    // 제이쿼리 객체
var color = ['red', 'blue', 'lime', 'snow', 'pink'];
for (var i =0; i < LI.size(); i++){
    // LI.eq(i).css('background',color[i]);
}

LI.each(function(i,ele){
    $(this).css('background',color[i]);
    $(this).css('border','3px solid ' + color[i] );
});
// border (픽셀 형태 컬러)의 형태를 위해서 한 칸의 공백을 둬야 함.

var 학생 = [
    {name:"이순신", age:20},
    {name:"강감찬", age:30},
    {name:"원빈", age:40},
    {name:"원균", age:50}
]

$.each(학생, function(index,item){
    var out = "";
    out += `<p>${index} - ${item.name} : ${item.age} </p>`

    $('body').append(out);
    
});

$('p').each(function(index,item){
    $(this).addClass('color'+index);    
})
// classList.add()  -> addClass()
// classList.remove()   ->removeClass()

// index()
$('dl>dt').click(function(e){
    e.stopPropagation();        // 이벤트 전달 제거
    var index1 = $(this).index();
    // console.log(index1);
    var index2 = $('dl>dt').index(this);
    // dd가 없었으면 그냥 index를 뽑으면 된다
    // 그런 경우에는 선택자.index(this)를 써야한다.
    console.log(index2);
})
// 형제들 사이의 순번(절대번호)
// .click은 deprecated되었고 아래의 형태를 추천함


$('dl>dt').on('click', function(){
    e.stopPropagation();        // 이벤트 전달 제거
    var index1 = $(this).index();
    // console.log(index1);
    var index2 = $('dl>dt').index(this);
    console.log(index2);
})

// 객체 확장. $.extend()
var hero = {};
hero.name = "아이언맨";
hero.gender = "남성";
hero.skill = "super suit";

// console.log(hero);
$.each(hero, function(i,item){
    out = "";
    out += "<p>" + item + "</p>";
    $('body').append(out);
});
// console.log(hero);
$('body').append("----------");

//객체확장
$.extend(hero,{
    skill2 : "나노수트"
});
$.each(hero, function(i,item){
    out = "";
    out += "<p>" + item + "</p>";
    $('body').append(out);
});
// console.log(hero);

// $('body').append()
// appendTo($('body'))

// $('h1') -> h1태그를 선택
// createElement, createTextNode
// <h1> welcome </h1>
// appendChild
// 동적으로 태그를 추가
// $('<h1>welcome</h1>')

$('<h1>welcome</h1>').appendTo('body');
$('<h1>welcome</h1>').appendTo($('body'));
