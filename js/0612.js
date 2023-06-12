$(document).ready(function () {
    $('img').css('width', '200px');
    // setInterval(() => {
    //     $('img').first().appendTo('#box');
    // },2000)


    // setInterval(function () { }, 2000);
    setInterval(move, 2000);
    // 매개변수(파라미터)는 전달, 연결해주는 역할
    // 호출은 실행한다.
    // move 함수 자체를 전달
    // move() 함수의 리턴값을 전달

    function move() {
        $('img').first().appendTo('#box');
    }

    // 문서객체복제 - clone()

    setInterval(() => {
        $('#box').append($('img').first().clone());
    },5000)

});