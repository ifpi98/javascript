// end() 문서객체선택을 한단계 뒤로 돌린다.

var H2 = $('h2');
var H3 = $('h3');
var BOX = $('#box');
var BUTTON = $('button');

$('h2').css('background', 'orange').filter(":even").css('color', 'white').end().filter(':odd').css('color', 'red');
// eq(1) 0부터 시작
// first()
// last()
// eq(-1) last

H2.eq(2).css('border', '2px solid black');
H2.first().css('border', '5px solid black');
H2.last().css('border', '5px solid black');
// 2px solid -> black(color -> black)
H2.eq(-1).css('padding', '10px');
// add() 문서 객체를 추가적으로 선택한다.
H2.css('font-size', '30px').add('h3').css('margin', 0).css('font-style', 'italic');
// is() 문서객체의 특징을 판별
H2.each(function () {
    if ($(this).is('.select')) {
        $(this).css('border-radius', '30px').css({ textAlign: 'center' })
    }
})

// slice(2,5) -> index2부터 5이전(4)까지 선택
H2.slice(2, 5).css('margin', '5px');
// size() -> 요소의 개수
var h2length = H2.size();
console.log(h2length);
$("<h3>" + h2length + "</h3>").appendTo($('body'));
$(`<h3>${h2length}</h3>`).appendTo($('body'));
$('body').append(`<h3>${h2length}</h3>`);

// contains(), has(), not(), closest()
$("h3:contains('내일')").css('border', '2px solid');
$("h3:has('b')").css('background', 'red');
H3.not(":has('b')").css('background', 'gold');

H3.closest('div').css('border', '5px double').css('padding', '10px');
BOX.css('border', '2px solid').css('background', 'gray').css('height', '100px').css('width', '200px');

// show, hide, toggle
BUTTON.eq(0).click(function () {
    BOX.show();
})
BUTTON.eq(1).click(function () {
    BOX.hide();
})
BUTTON.eq(2).click(function () {
    BOX.toggle();
})

BUTTON.each(function () {
    $(this).click(function () {
        var html = $(this).html();
        var exec = "$('#box')" + html + "()";
        // eval(exec);     // exec 문자열을 제이쿼리로 실행
    })
})