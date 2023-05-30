// div.addEventListener('click', function(){
//     console.log("div click");
// })

// span.addEventListener('click', function(){
//     console.log("span click");
// })

// btn.addEventListener('click', function(){
//     console.log("btn click");
// })

// 이벤트 위임 구현
// div.addEventListener('click', function(e){
//     var id = e.target.id;
//     console.log(e.currentTarget);
//     console.log(e.target);
//     if(id=="div"){
//         console.log("div Click");
//     }else if(id=="span"){
//         console.log("span Click");
//     }else if(id=="btn"){
//         console.log("btn Click");
//     }

//     var tagName = e.target.tagName;
//     if (tagName == "div"){
//         console.log("div Click")
//     } else if (tagName == "span"){
//         console.log("span Click");
//     }else if(id=="btn"){
//         console.log("btn Click");
//     }
    
// });

// document.addEventListener('click', function(e){
//     console.log(e.srcElement);
//     var target = e.target || e.srcElement;

//     if(e.target.tagName == "DIV"){
//         console.log("div Click");
//     } else if (e.target.tagName == "SPAN"){
//         console.log("span Click");
//     } else if (e.target.tagName == "BUTTON"){
//         console.log("btn Click");
//     }
// })

// 키보드 관련 이벤트
// event.keyCode
// String.fromCharCode()
window.onkeydown=function(e){
    console.log(e.keyCode); // ASCII 코드
    console.log(String.fromCharCode(e.keyCode));
    if(e.keyCode==65){
        document.querySelector('body').style.background='red';
    }
    if(e.keyCode==66){
        document.querySelector('body').style.background='blue';
    }
    if(e.keyCode==67){
        document.querySelector('body').style.background='gold';
    }
    if(e.keyCode==68){
        document.querySelector('body').style.background='pink';
    }
}

// window.onload = function(){
//     var count = 0;
//     var image = document.getElementById('image');
//     var frames = [
//         'imgs/otherimage1.jpg', 'imgs/otherimage2.jpg',  'imgs/otherimage3.jpg',  'imgs/otherimage4.jpg',  'imgs/otherimage5.jpg',  'imgs/otherimage6.jpg', 'imgs/otherimage7.jpg',  'imgs/otherimage8.jpg',  'imgs/otherimage9.jpg', 'imgs/otherimage10.jpg',  'imgs/otherimage11.jpg', 'imgs/otherimage12.jpg', 'imgs/otherimage13.jpg', 'imgs/otherimage14.jpg', 'imgs/otherimage15.jpg', 'imgs/otherimage16.jpg', 'imgs/otherimage17.jpg', 'imgs/otherimage18.jpg', 'imgs/otherimage19.jpg',
//     ]
//     // setInterval(function(){
//     //     // image.src = frames[count % frames.length];
//     //     count = (count % 19)+1;
//     //     image.src = "./imgs/otherimage" + count + ".jpg";
//     //     count = count + 1;
//     // }, 200);

//     // css파일에서 이미지 폴더는 ../ 상위폴더로 이동하지만
//     // js에서 이미지폴더는 html에서 ./현재폴더로 이동하면 된다.
// }

// var outer = document.querySelector('.outer');
// var inner = document.querySelector('.inner');

// outer.onmouseover = function(){
//     var h1 = document.createElement("h1");
//     h1.textContent = "mouseover";
//     document.body.appendChild(h1);
// }
// outer.onmouseout = function(){
//     var h1 = document.createElement("h1");
//     h1.textContent = "mouseout";
//     document.body.appendChild(h1);
// }
// outer.onmouseenter = function(){
//     var h1 = document.createElement("h1");
//     h1.textContent = "mouseenter";
//     document.body.appendChild(h1);
// }
// outer.onmouseleave = function(){
//     var h1 = document.createElement("h1");
//     h1.textContent = "mouseleave";
//     document.body.appendChild(h1);
// }

// over는 이벤트 버블링이 적용
// enter는 안에 있는지 여부만 따짐

// 이벤트를 연결합니다.

window.onload = function(){
    //문서 객체를 선택합니다.
    var input_1 = document.querySelectorAll('input')[0];
    var input_2 = document.querySelectorAll('input')[1];
    // input_1
    input_1.onkeydown = function(){
        // 글자 개수가 여섯 개 이상일 경우
        if (6 <= input_1.value.length) {
            // input_2 문서 객체로 초점을 이동합니다.
            input_2.focus();
        }
    }
    // input_2
    input_2.onkeydown = function(event){
        // 이벤트 객체를 추출합니다.
        var event = event || window.event;
        // 사용자의 입력이 '백 스페이스'이고 입력된 글자가 없는 경우
        if (event.keyCode == 8 && input_2.value.length == 0){
            input_1.focus();
        }
    }


}

window.onload = function(){
    var form1 = document.f1;
    var form2 = document.f2;
    var eventObj;
    document.onmousemove = function(e) {
        eventObj = e?e:window.event;
        var cx = eventObj.clientX;
        var cy = eventObj.clientY;
        form1.client_x.value = cx;
        form1.client_y.value = cy;

        var px = eventObj.pageX;
        var py = eventObj.pageY;
        form1.pg_x.value = px;
        form1.pg_y.value = py;
    }
}