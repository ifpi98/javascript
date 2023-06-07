// css 초기화

var Aster = $('*');
var AA = $('a');
var H2 = $('h2');
var LI = $('li');
var UL = $('ul');
var ULLI = $('ul>li');
var OL = $('ol');
var OLLI = $('ol>li');

Aster.css({margin:0, padding:0});
AA.css({
    'color':'black',
    'text-decoration':'none',
    padding:'10px',
    display:'block'
});

LI.css('list-style','none');
UL.css('display','flex');
ULLI.css({
    'flex':1, textAlign:'center','background':'orange'
});
OL.css({
    'background':'cyan', 'display':'none'
})

// hover효과 이벤트 주기
// .hover(mouseenter, mouseleave)
ULLI.hover(function(){
    $(this).css('background','gray');
    $(this).find('ol').show();
}, function(){
    $(this).css('background','orange');
    $(this).find('ol').hide();
});

ULLI.css('position','relative');
OL.css('position','absolute');
OL.css('width','100%');
OLLI.hover(function(){
    $(this).css('background','steelblue');
}, function(){
    $(this).css('background','cyan');
});

// css() attr()
H2.attr('title','마우스를 올려보세요');
ULLI.attr('title','마우스를 올려보세요');

var DIVSPAN = $('div span');
var DIVSPAN2 = $('div>span');
DIVSPAN.css('display','inline-block').css('padding','10px').css('cursor','pointer');
DIVSPAN2.first().click(function(){
    $('#img img').attr('src','imgs/beverage2.jpg').attr('width','400px');
});
DIVSPAN2.last().click(function(){
    $('#img img').attr('src','imgs/beverage3.jpg').attr('width','400px');
})
DIVSPAN2.eq(1).click(function(){
    $('#img img').attr('src','imgs/beverage4.jpg').attr('width','400px');
})
