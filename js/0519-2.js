// parentNode
// childNodes
// children
// firstChild
// lastChild
// previousSibling
// nextSibling

window.onload=function(){

    var ul = document.querySelector('ul');
    var h2 = document.querySelector('h2');
    console.log(ul.childNodes);
    // NodeList(7) [text, li, text, li, text, li, text]
    var nodes = ul.childNodes;
    nodes.item(1).style.color = 'red';
    var text1 = ul.childNodes.item(1).firstChild.nodeValue;
    var text2 = ul.childNodes.item(5).firstChild.nodeValue;
    // console.log(text1);
    h2.innerHTML = text1 + text2;
    
    var li = document.getElementsByTagName('li');
    li[0].parentNode.style.border = '3px solid red';
    var text3=ul.childNodes.item(3).textContent;
    h2.innerHTML= text2 + text3 + text1;
    
    document.getElementById('wrap').children[0].style.color="blue";
    // console.log(document.getElementById('wrap').children[0]);
    var p = document.getElementsByTagName("p")[1];
    p.style.background='gold';

    var nextObj = p.nextSibling;
    while(nextObj.nodeType != 1){
        // 태그가 아니면 != 1  (1번이 태그)
        nextObj = nextObj.nextSibling;
    } nextObj.style.background = 'red';
    
    // p.nextSibling.style.color='red';
    // p.nextSibling.nextSibling.style.background='red';
    
    var s = document.getElementById('food');
    var child = s.firstChild;
    var child2 = s.lastChild;

    // while(child){
    //     if(child.nodeType == 1 && child2.nodeType == 1){
    //         child.style.background = 'red';
    //     }
        
        child = child.nextSibling;
        child2 = child2.previousSibling;
        child.style.background='blue';
        child2.style.background='pink';
    // }

    // 폼 선택하기
    document.fm.style.border='3px solid red';
    document.fm.style.padding='10px';
    document.fm.submit.style.background='gold';
    // console.log(document.fm.submit);
    document.forms[0].style.borderRadius='20px';
    
    document.forms[1].style.border='3px double blue';
    document.forms[1].style.padding='10px';
    document.forms[1].style.borderRadius='20px';

    document.forms[1].elements[0].style.margin = '10px';
    document.forms[1].elements[1].style.margin = '10px';

    document.form2.input2.style.background='cyan';
    f1.ch1.checked = true;
    // document.forms[2].ch1.checked = true;
    // f1.name.value = "원빈";

    f1.name.onfocus=function(){
        var text=f1.name.value;
        var span=document.querySelector('span');
        span.innerHTML=text+"님 어서오세요";
    }
    f1.name.onblur=function(){
        var text=f1.name.value;
        var span=document.querySelector('span');
        span.innerHTML = text + "님 안녕히 가세요";
    }

    // 기본 이벤트 제거
    // submit버튼을 클릭 -> 폼전송
    // a태그 클릭 -> href로 링크

    f1.onsubmit=function(){
        // return false;   // 다음 단계로 이동중지
        // 기본 이벤트 제거
        var pw1 = f1.pw1;
        var pw2 = f1.pw2;
        pw2.value = pw1.value;
        pw2.disabled = true;

        f1.name.defaultValue="원빈";
        
        return false; // 다음단계로 이동중지
        // 기본이벤트 제거
        //return true; 
           
    
    }


} // 윈도우 onload용 중괄호