// createElement()
// createTextNode()
// <h1> welcome </h1>
// append나 appendChild
// 문서 객체 만들기

// 객체를 생성
var header = document.createElement('h1');
var text = document.createTextNode("welcome");

// 노드를 연결
// header.appendChild(text);
// document.body.appendChild(header);

// var box = document.getElementById('box');
// box.innerHTML = "header";
// box.style.backgroundColor="blue";
// box.appendChild(header);

// var box2 = document.getElementById('box2');
// box2.style.backgroundColor="yellow";
// box2.appendChild(header);

// box.innerHTML=header.innerHTML;
// box2.innerHTML=header.innerHTML;

//이벤트
// add.onclick=function(){}
// 고전 이벤트

// 표준 이벤트
// add.addEventListener('click', function(){})

// addEventListener(type, listener)
// addEventListener(type, listener, options)
// addEventListener(type, listener, useCapture)
// listener는 콜백을 의미한다.

var add = document.getElementById('add');
add.addEventListener('click', function () {
    var h2 = document.createElement('h2');
    var text = document.createTextNode('welcome');
    h2.appendChild(text);
    document.body.appendChild(h2);
    var h2DelArray = document.getElementsByTagName('h2');
    console.log(h2DelArray.length);
});

var del = document.getElementById('del');
del.addEventListener('click', function () {
    var _h2DelArray = document.getElementsByTagName('h2');
    // document.body.removeChild(_h2DelArray[0]);
    if (_h2DelArray.length == 0) {
        console.log("child is Zero");
    } else {
        document.body.removeChild(_h2DelArray[0]);
        console.log(_h2DelArray.length);
    }



});

    var marine_death = "마린은 이미 사망했습니다.<br>";
    var marine_current_hp = "마린의 현재 체력은: "
    var medic_cure = "메딕은 치료합니다<br>";

function Terran(level, model, gender, attackRate=5) {
    this.level = level;
    this.model = model;
    this.gender = gender;
    this.attackRate = attackRate;
    this.life = 50;
    this.fire = function () {
        if (this.life == 0){
            console.log(marine_death);
        }
        else if (this.life <= 10) {
            console.log("마린이 공격합니다<br>");
        }
        else if (this.level >= 5) {
            // document.write("5이상: " + this.level);
            console.log("마린이 스팀팩을 쓰고 공격합니다<br>");
            this.life = this.life - 10;
            console.log(marine_current_hp + this.life + '<br>');
        } else {
            // document.write("5미만: " + this.level);
            console.log("마린이 공격합니다<br>");
        }
        this.level += 1;
        console.log(this.level);
    }
    this.cure = function () {
        if (marine.life == 0){
            console.log(marine_death);
        }
        else if (marine.life == 50){
            console.log("마린의 체력이 가득 차 있습니다.<br>")
        }
        else if (marine.life>40){
            console.log(medic_cure)
            marine.life = 50;
            console.log(marine_current_hp + marine.life + "<br>");
        } else{
            console.log(medic_cure)
            marine.life += 10;
            console.log(marine_current_hp + marine.life + "<br>");
        }
    }

    this.attack = function () {
        if (marine.life == 0){
            console.log(marine_death);
        }
        else if (marine.life <= this.attackRate){
            console.log("적의 공격으로 마린은 사망했습니다.");
            marine.life = 0;
        }
        else {
            marine.life -= this.attackRate;
            console.log("공격 받아 " + marine_current_hp + marine.life + "<br>");
        }
    }

}

marine = new Terran(1, "combat", "male");
medic = new Terran(1, "support", "female");
enemy1 = new Terran(1, "combat", "female", 7);
enemy2 = new Terran(1, "combat", "male", 8);
enemy3 = new Terran(1, "combat", "female", 9);


document.write('<br>');
document.write("모델:" + marine.model + " 레벨:" + marine.level + "<br />");
document.write("모델:" + medic.model + " 레벨:" + medic.level + "<br />");
document.write("모델:" + enemy1.model + " 공격력:" + enemy1.attackRate + "<br />");
document.write("모델:" + enemy2.model + " 공격력:" + enemy2.attackRate + "<br />");
document.write("모델:" + enemy3.model + " 공격력:" + enemy3.attackRate + "<br />");

var fire = document.getElementById('fire');
fire.addEventListener('click', function () {
    marine.fire();
});

var cure = document.getElementById('cure');
cure.addEventListener('click', function () {
    medic.cure();
});

var defend1 = document.getElementById('defend1');
defend1.addEventListener('click', function () {
    // console.log(enemy1);
    enemy1.attack();
});

var defend2 = document.getElementById('defend2');
defend2.addEventListener('click', function () {
    enemy2.attack();
});

var defend3 = document.getElementById('defend3');
defend3.addEventListener('click', function () {
    enemy3.attack();
});

setInterval(marine.fire(), 3000);