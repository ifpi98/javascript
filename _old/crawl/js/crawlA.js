// 참고 사이트
// https://app.sensortower.com/top-charts?category=6014&country=KR&device=iphone&os=ios&locale=ko

// 날짜를 기준으로 정보 가져오기

const today = new Date();
// console.log(today);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
// console.log(yesterday);

// 연, 월, 일 정보 추출
const yearT = today.getFullYear();
const monthT = ('0' + (today.getMonth() + 1)).slice(-2);
const dayT = ('0' + today.getDate()).slice(-2);

const year = yesterday.getFullYear();
const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
const day = ('0' + yesterday.getDate()).slice(-2);
// 결과 문자열 생성

const url = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=KR&date=" + year + "-" + month + "-" + day + "&device=iphone";
const url2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=KR&date=" + year + "-" + month + "-" + day;
const urlT = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=KR&date=" + yearT + "-" + monthT + "-" + dayT + "&device=iphone";
const urlT2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=KR&date=" + yearT + "-" + monthT + "-" + dayT;

const maxRank = 10;

var content = document.getElementById('rankTable');
var content2 = document.getElementById('rankTable2');
var content3 = document.getElementById('rankTable3');
var contentArray = [content, content2, content3];

let MMOLIST = [];

fetch('MMOLIST.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        const dataArray = lines.map(line => line.trim());

        //   console.log(dataArray);
        MMOLIST = dataArray;
        // Do something with the array here
    })
    .catch(error => console.error(error));

    // console.log(url2);

function ggyunolRank() {

    fetch(url2)
        .then(response => response.json())
        .then(data => {

            var aosFree = data.data.free;
            var aosPaid = data.data.paid;
            var aosGrossing = data.data.grossing;

            var aosFree2 = [];
            var aosPaid2 = [];
            var aosGrossing2 = [];

            aosArray = [aosGrossing, aosFree, aosPaid];
            aosArray2 = [aosGrossing2, aosFree2, aosPaid2];

            
            for (var i = 0; i < aosArray.length; i++) {
                var removeCount = 0;
                for (var j = 0; j < aosArray[i].length; j++) {
                    
                    var tempobj = {
                        rank: aosArray[i][j].rank,
                        icon_url: aosArray[i][j].icon_url,
                        name: aosArray[i][j].name,
                        publisher_name: aosArray[i][j].publisher_name,
                        gRank: ''
                    }

                    if (MMOLIST.includes(tempobj.name)) {
                        console.log("MMO Game detected! Remove it!");
                        removeCount += 1;
                    } else {
                        aosArray2[i].push(tempobj);
                        var newRank = aosArray[i][j].rank - removeCount;
                        aosArray2[i][newRank - 1].gRank = newRank;
                    }
                }
                // console.log(tempobj);
            }
            
            var aosCaption = ['GooglePlay - Top Grossing', 'GooglePlay - Free', 'GooglePlay - Paid'];
            
            for (var j = 0; j < contentArray.length; j++) {

                var output = "<table border='1'>";
                output += `<caption>${aosCaption[j]}</caption>`
                output += "<tr><th>순위</th><th>썸네일</th><th>제목</th><th>퍼블리셔</th></tr>";  

                for (var i = 0; i < maxRank; i++) {
                    output += "<tr>";
                    output += "<td class='rank'>" + aosArray2[j][i].gRank + "</td>";
                    output += "<td>" + "<img src=" + aosArray2[j][i].icon_url + ">" + "</td>"
                    output += "<td class='title'>" + aosArray2[j][i].name + "</td>";
                    output += "<td class='pname'>" + aosArray2[j][i].publisher_name + "</td>";

                    // output += "<td>" + iosFree[i].previous_rank + "</td>";
                    output += "</tr>"
                };

                output += "</table>";
                contentArray[j].innerHTML = output;
                // content.innerHTML = output;
            }

        })

}

ggyunolRank();
















function normalRank() {

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(Array.isArray(data));       // false
            var output = "<table border='1'>";
            output += "<tr><th>순위</th><th>이전 순위</th><th>게임제목</th><th>제작사</th></tr>";

            var iosFree = data.data.free;
            var iosPaid = data.data.paid;
            var iosGrossing = data.data.grossing;
            // console.log(data.data);

            iosArray = [iosFree, iosPaid, iosGrossing];

            // console.log(iosFree);
            // console.log(iosPaid);
            // console.log(iosGrossing);



            for (var array of iosArray) {
                console.log(array);

                array.forEach((ele, i) => {
                    output += "<tr>"
                    output += "<td>" + array[i].rank + "</td>";
                    output += "<td>" + "<img src=" + array[i].icon_url + ">" + "</td>"
                    output += "<td>" + array[i].name + "</td>";
                    output += "<td>" + array[i].publisher_name + "</td>";

                    // output += "<td>" + iosFree[i].previous_rank + "</td>";
                    output += "</tr>"
                });
            }

            output += "</table>";
            content.innerHTML = output;
        })

}

// normalRank();
