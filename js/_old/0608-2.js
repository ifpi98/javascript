$('button').first().on('click', function () {
    var str = "<ul><li>동적</li><li>동적</li><li>동적</li></ul>";
    $('#content').html(str);
});

$('button').eq(1).on('click', function () {
    var str = "<ul>";
    str += "<li>동적2</li>"
    str += "<li>동적2</li>"
    str += "<li>동적2</li>"
    str += "</ul>"
    $('#content').html(str);
});

$('button').eq(2).on('click', function () {
    $('#content').html($('#none').html());
});

// 정적인 컨텐츠만 이벤트 연결
// $('li').click(function(){
// $(this).css('background','red');
// });

// 동적인 컨텐츠에 이벤트 연결 - 이벤트 위임 delegate
// 클릭 이후에 콜백으로 연결
// $(document).on('click', 'li', function () {
//     $(this).css('background', 'red');
// });

// 객체가 들어가 처리 (이벤트 다수 연결 가능)
$(document).on(
    {
        'click': function () {
            $(this).css('background', 'red');
        },
        'mouseenter':function () {
            $(this).css('background', 'pink');
        },
        'mouseout':function () {
            $(this).css('background', 'blue');
        }
    }, 'li'     //  이벤트를 위임할 대상
)