img.style.width = "200px";
img.style.height = "150px";

var i = 0;
function change(){
    if (i%2 == 0)
        img.src = "./imgs/cat2.png";
    else {
        img.src = "./imgs/cat1.png";
    }
    i++
}

// 클로저, 내부 함수 호출

function hide(){
    img.style.visibility="hidden";
}
function show(){
    img.style.visibility="visible";
}
var changeStyle =()=> {
    var h2 = document.querySelector('h2');
    h2.style.background="pink";
    h2.style.fontStyle='italic';
    h2.style.color='red';
    h2.style.fontSize='30px';
    // h2.style = {
    //     background: 'pink !important',
    //     fontStyle: 'italic',
    //     color: 'blue',
    //     fontSize:"35px",
    //     boxShadow:"3px 3px gray"
    // };
    
};