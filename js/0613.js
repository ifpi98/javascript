$('select option').eq(1).attr('selected', true);
$('select').change(function () {
    var val = $('select>option:selected').val();
    var index = $('select>option:selected').index();
    var html = $('select>option:selected').html();
    var text = $('select>option:selected').text();

    var out = `${index} : ${html} : ${text} : ${val}`;
    $(`<p>${out}</p>`).appendTo('#info');
})

$('iframe').load(function(){
    $('#wrap').append("<p>로딩완료...</p>");
});
$(document).ready(function(){
    $('#wrap').append("<p>레디 완료...</p>");
})

$('.parent').focusout(function(){
    $('<h2>부모 focusout</h2>').appendTo('body');
})
$('.parent').blur(function(){
    $('<h2>부모 블러</h2>').appendTo('body');
})
$('.parent').focusin(function(){
    $('<h2>부모 focusin</h2>').appendTo('body');
})
$('.parent').focus(function(){
    $('<h2>부모 focus</h2>').appendTo('body');
})

$('input').focusout(function(){
    $('<h2>자식 focusout</h2>').appendTo('body');
})
$('input').blur(function(){
    $('<h2>자식 블러</h2>').appendTo('body');
})
$('input').focusin(function(){
    $('<h2>자식 focusin</h2>').appendTo('body');
})
$('input').focus(function(){
    $('<h2>자식 focus</h2>').appendTo('body');
})

// setTimeout(function(){
//     $('input[type=text]').focusin();
// },1000)

$('input[type=text]').trigger('focusin');

$('#img img').hide();
$('#img img').eq(0).show();
$('input[type=range]').on('mousemove mousedown mouseup', function(){
    var range = $(this).val();
    $('span').html(range);
    $('#img img').hide();
    $('#img img').eq(range).show();
});

var i = 0;
setInterval(function(){
    i++; i = i % 10;
    // var range = $('input[type=range]').val();
    $('span').html(i);
    $('#img img').stop().hide();
    $('#img img').eq(i).stop().fadeToggle('fast');   // fadeIn(), slideDown()
    // fast(200ms), slow(600ms), normal(400ms), 숫자를 입력해도 무방
},1000)

$('img').css('width','200px');

