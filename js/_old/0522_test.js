function Circle3(r){
    var radius = r; // 캡슐화, 은닉화
    this.getRadius = function(){
        // console.log("radius값 출력" + radius);
        return radius;
    },
    this.setRadius = function(r){
        if(r<0){
            throw "원의 반지름은 양수이어야 합니다"
        }else{
            radius = r;
        }
    }
}

var c3 = new Circle3(5);

console.log(c3);
// console.log(c3.radius);
console.log(c3.getRadius());
// console.log(c3.radius = 6 + "수정 완료");
console.log(c3.getRadius());
// console.log(c3.radius);
console.log(c3);
// c3.radius = 6;
console.log(c3);
