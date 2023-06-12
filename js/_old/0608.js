function checkForm(){
    event.preventDefault();
    if(document.login.name.value == ""){
        alert("이름을 입력하세요!");
        login.name.focus();     // 커서자동포커스
        return false;   // 다음 단계로 전달금지
    } 

    var str="이름: "+login.name.value+"\n";
    str += "아이디: "+login.id.value+"\n";
    str += "비밀번호: " + login.passwd.value;
    // alert(str);
    info.innerHTML = str;
    // 이름은 3자리 이상 5자리 이내로 입력하세요.
    if(login.name.value.length<2 || login.name.value.length>5){
        alert("이름은 2자리 이상 5자리 이내로 입력하세요");
        login.name.select();        // 입력한 값이 선택된 상태
    }

    // 이름에 숫자를 입력한 경우 isNaN(is Not a Number)
    // 숫자 -> false, 숫자가 아니면 true
    if(!isNaN(login.name.value.substr(0,1))){
        alert("이름은 숫자로 시작할 수 없습니다.");
        login.name.select();
    }

    // 아이디 영문소문자만 입력하기
    for (var i = 0; i < login.id.value.length; i++){
        var ch = login.id.value.charAt(i);
        if((ch<'a' || ch>'z')&& (ch>'A' || ch<'Z') && (ch>'0' || ch<'9')){
            alert("아이디 영문소문자만 입력하세요.");
            login.id.select();
            return false;    
        }
    }


}

function press(f){
    console.log(f);
    if(f.keyCode==13){
        login.submit();
    }else{} 
}