// $(selector).on(eventName, Listener);
// $(selector).on({object});

$('h3').on('click', function(){
    $(this).html("환영합니다");
    $(this).html(function(i,html){
        i++;
        return html + i + "별";
    });
});

$('h3').on({
    mouseenter:function(){
        $(this).addClass('bg');
    },
    mouseleave:function(){
        $(this).removeClass('bg');
    }
});

var i = 0;
$('img').on({
    mouseenter:function(){
        $(this).attr('src','./imgs/ferment2.jpg');
    },
    mouseleave:function(){
        $(this).attr('src','./imgs/ferment1.jpg');
    },
    click:function(){
        i++;
        i%2 == 0 ? $(this).attr('src','./imgs/ferment3.jpg')
        : $(this).attr('src','./imgs/ferment4.jpg');
        // 삼항연산자
    },
    dblclick:function(){
        $(this).off()}
    
});

// 이벤트 제거 - off();
// name : value 쌍

// 매개변수 context
// 2개 입력할 수 있다.

// click(function(){}), mouseover(function(){})

$('li').click(function(){
    $(this).find('span').css('background','red');
    $('span',this).html("Monday");
})

// event 객체
$(document).mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    $('p').html(`x: ${x} y:${y}`);
})

// 이벤트 강제 실행
// $().click(), $().trigger('click');
$('li').click();

setInterval(()=>{
    $('img').click();
},2000)

// $('img').click();

setInterval(()=>{
    $('h3').trigger('mouseenter');
},2000);
setInterval(()=>{
    $('h3').trigger('mouseleave');
},3000)

// 기본이벤트제거와 이벤트전달제거
$('section,div,p').css({
    border: '1px solid',
    margin: '10px',
    padding: '10px'
});
// $('section').on('click',function(){
//     $(this).css('background','pink');
// });
// $('div').on('click',function(){
//     $(this).css('background','blue');
//     return false;
// });
// $('p').on('click',function(){
//     $(this).css('background','gold');
//     return false;
// });

// 동적인 요소도 이벤트를 연결할 때
$('section').on('click','p',function(){
    $('p').css('background','steelblue');
});

// textarea글자를 입력할 때
// 입력한 글자를 표시하고
// 남은 글자수를 구하고, 
// 넘치면 입력을 막고, 빨간색으로 표시하기

$('textarea').keyup(function(){
    var 입력글자 = $(this).val().length;
    var 남은글자 = 30 - 입력글자;
    $('h5').html(입력글자 + "EA");
    if(남은글자>=0){
        $(this).css('color','blue');
    }else{
        // $(this).attr('disabled',true)
        $('h5').css('color','red').html("그만입력하세요");
        // this.returnValue = false;
        $(this).val('');    // 30자 넘으면 초기화
    }
});

// 윈도우이벤트
// ready, load, unload, resize, scroll, error, 
// scroll

// 무한스크롤 구현
$(window).scroll(function(){
    var scrollTop =$(window).scrollTop();
    var windowHeight = $(window).height();
    // var documentHeight = $(document).height();
    var 문서높이 = $(document).height();
    var 스크롤높이 = scrollTop + windowHeight;

    // 스크롤높이가 문서높이가 같을 때 객체를 추가한다.
    // 데이터를 가져와서 추가한다.

    if(스크롤높이 >= 문서높이 - 100){
        for (var i=0; i < 10; i++){
            $('<h1>무한스크롤</h1>').appendTo('body');
            $("<img src='./imgs/otherimage1"+i+".jpg'>").appendTo('body');
        }
    }
})