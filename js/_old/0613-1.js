$('button').each(function(i){
    $(this).click(function(){
        var html=$(this).html();
        var exe = "";
        if(i==9) {exe =`$('#box').stop().${html}`;}
        else {
            exe = `$('#box').stop().${html}()`;
            // eval($('#box').fadeTo('normal',1));
        }
        // eval(exe);
        
    })
})

$('button').first().click(function(){
    $('#box').show('1000','linear',function(){
        $('<h2>임무완료</h2>').appendTo('body');
    });
});
$('button').eq(1).click(function(){
    $('#box').hide('500','swing',function(){
        $('<h2>임무완료</h2>').appendTo('body');
    });
});

$('#box2').css("position","relative");
$('a').first().click(function(){
    $('#box2').stop().animate({left:"+=50"}, 600)
});
$('a').last().click(function(){
    $('#box2').stop().animate({left:"-=50"}, 1000)
});

setInterval(function(){
    $('#box3').animate({left:'400'},1000).animate({left:0},1000)
})

$('button').each(function(){
    $(this).click(function(){
        var html = $(this).html();
        console.log(this);
        var exe = "$('#box3')."+html;
        console.log(exe);
        eval(exe);      //  eval(문자열) 문자열을 자바스크립트로 실행하는 함수
    })
})

// stop(false) 현재 작업 멈추고 다음 대기 작업 실행 (스레드)
// stop(true)  메모리를 비운다. 현재 대기중인 애니메이션 작업 삭제
// stop(false, true) 현재 작업의 끝으로 이동한다.
// stop(true, true)  메모리를 비운다. 현재 작업 끝으로 이동
