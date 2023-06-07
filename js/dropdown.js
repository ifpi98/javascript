function dropDown(x) {
    document.getElementById(x).classList.toggle('show');
    // add, remove, toggle
}

// 바탕을 클릭하면 메뉴 숨기기
window.onclick = function () {
    
    // dropbtn을 제외한 이벤트가 걸리면 show를 제거해라.
    if (!event.target.matches('.dropbtn')) {
        var dropContent = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropContent.length; i++) {
            if(dropContent[i].classList.contains('show')){
                dropContent[i].classList.remove('show');
            }
        }
    }
}