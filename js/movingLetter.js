//보조 함수

// 랜덤한 정수를 생성합니다.
function nextRandomInteger(limit){
    return Math.round(Math.random() * limit);
}

// 랜덤한 알파벳을 리턴하는 함수입니다.
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function randomAlphabet() {
    return alphabet.charAt(nextRandomInteger(25));
}

// 양음으로 랜덤한 속도를 생성하는 함수입니다.
function randomSpeed(maxSpeed){
    return Math.random() * maxSpeed - Math.random() * maxSpeed;
}

// 생성자 함수

// MovingText의 생성자 함수
var canvasWidth = 700;
var canvasHeight = 400;

function MovingText(){
    //위치와 속도 속성
    this.x = nextRandomInteger(canvasWidth);
    this.y = nextRandomInteger(canvasHeight);
    this.vx = randomSpeed(10);
    this.vy = randomSpeed(10);

    // 문서 객체를 생성합니다.
    this.body = document.createElement('h1');
    this.body.innerHTML = randomAlphabet();
    this.body.style.position = 'absolute';

    // 문서 객체를 document.body에 추가합니다.
    document.body.appendChild(this.body);
}

MovingText.prototype.move = function(){
    // 범위 검사
    if(this.x < 0 || this.x > canvasWidth){
        this.vx *= -1;
    }
    if(this.y < 0 || this.x > canvasHeight){
        this.vy *= -1;
    }

    //이동
    this.x += this.vx;
    this.y += this.vy;

    // 화면에 이동 표시
    this.body.style.left = this.x + 'px';
    this.body.style.top = this.y + 'px';
}

// 변수를 선언합니다.
var movingTexts = [];

// 배열에 MovingText 객체 100개를 생성합니다.
for (var i = 0; i < 100; i++){
    movingTexts.push(new MovingText());
}

// 움직입니다.
setInterval(function(){
    for (var i in movingTexts){
        movingTexts[i].move();
    }
}, 1000/60);
