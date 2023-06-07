/*자동차 옵션 체크 박스를 클릭할 때 마다 
함수 정의문 내에 일련의 실행문을 실행합니다.*/

//함수 정의문
function car() {

    /*defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져옵니다.*/
    var basic_car = Number(document.getElementById("total").defaultValue);

    //1부터 3까지 반복문을 실행합니다.
    for (var i = 1; i <= 3; i++) {

        /* id의 값이 opt1부터 opt3까지 체크 박스에 체크가 되어있으면
        추가 가격을 누적시킵니다.*/
        var chkObj = document.getElementById("opt" + i);
        if (chkObj.checked) basic_car += Number(chkObj.value);
    }

    /*위에서 더해진 가격을 
    id의 값이 total인 요소의 value의 값으로 입력합니다.*/
    // document.getElementById("total").value = basic_car;
    document.getElementById("total").value = basic_car;
    var ten = Number(document.getElementById("total").value);
    // console.log("ten" + ten);
    document.getElementById("total").value = ten.toLocaleString('ko-KR');
    // console.log(ten.toLocaleString('ko-KR'));

}


// 천단위 구분기호 넣는 함수
function numberFormat(inputNumber) {

    return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

}

const n1 = 12345.6789;
const n2 = -12345.6789;

const cn1 = n1.toLocaleString('ko-KR');
const cn2 = n2.toLocaleString('ko-KR');

// document.writeln(cn1);
// document.writeln('<br>');
// document.writeln(cn2);

