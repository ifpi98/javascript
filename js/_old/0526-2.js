// window.open()
// window.close()
// window.print()
// window.moveBy()
// window.moveTo()
// window.resizeTo()
// window.focus()
// window.blur()

// var child = window.open("", "", "width=300, height=200");
// var width = screen.width;
// console.log(screen.width);
// var height = screen.height;
// console.log(screen.height);

// child.moveTo(0,0);
// child.resizeTo(width,height);

// setInterval(function(){
//     child.resizeBy(-20,-20);
//     child.moveBy(10,10);
// },100)

// screen 객체
var out = '';
for (var key in screen){
    out += `${key}: ${screen[key]} <br>`
}
// document.write(out);
document.write('<hr>');

// location 객체
var out = '';
for (var key in location){
    out += `${key}: ${location[key]} <br>`
}
// document.write(out);
document.write('<hr>');

// navigator객체
var out = '';
for (var key in navigator){
    out += `${key}: ${navigator[key]} <br>`
}
// document.write(out);
document.write('<hr>');

var navi = navigator.userAgent;
console.log(navi);

// 브라우져 검사하기
var mobile = ['iphone', 'android', 'nokia', 'window', 'opera'];
var navi = navigator.userAgent.toLowerCase();
console.log(navi);

for (var i=0; i<mobile.length; i++){
    if(navi.indexOf(mobile[i]) >= 0){       // 모바일이면
        // console.log(mobile[i]);
        // location.href="http://m.naver.com";
        // break;
    }else{
        // location.href="http://www.naver.com";
    }
}

// 정규표현식
// navi.match(/phone[i]/)
// navi.match(new RegExp(phone[i]))

// document.querySelector('h1').style.background = 'red';


// 모든 태그가 화면에 올라가는 순간이 로드가 완료되는 순간
// onready -> jQuery

window.onload=function(){
    document.querySelector('h1').style.background = 'red';
}       

// 이벤트리스터의 DOMContentLoaded 도 비슷한 용도
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('h2').style.background = 'blue';
})

var navi = navigator.userAgent.toLowerCase();

document.write(navigator.appCodeName + '<br>');
document.write(navigator.appName + '<br>');
document.write(navigator.appVersion + '<br>');
document.write(navigator.language + '<br>');
document.write(navigator.product + '<br>');
document.write(navigator.platform + '<br>');
document.write(navigator.geolocation + '<br>');
console.log(navigator.geolocation);