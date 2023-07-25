// 참고 사이트
// https://app.sensortower.com/top-charts?category=6014&country=KR&device=iphone&os=ios&locale=ko

// 날짜를 기준으로 정보 가져오기

const today = new Date();
// console.log(today);
const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
// today.setDate(today.getDate() + 1);
// console.log(yesterday);

// 연, 월, 일 정보 추출
const yearT = today.getFullYear();
const monthT = ('0' + (today.getMonth() + 1)).slice(-2);
const dayT = ('0' + today.getDate()).slice(-2);

const year = yesterday.getFullYear();
const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
const day = ('0' + yesterday.getDate()).slice(-2);
// 결과 문자열 생성

const url = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=JP&date=" + year + "-" + month + "-" + day + "&device=iphone";
const url2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=JP&date=" + year + "-" + month + "-" + day;
const urlT = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=JP&date=" + yearT + "-" + monthT + "-" + dayT + "&device=iphone";
const urlT2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=JP&date=" + yearT + "-" + monthT + "-" + dayT;

const maxRank = 10;

var content = document.getElementById('rankTable');
var content2 = document.getElementById('rankTable2');
var content3 = document.getElementById('rankTable3');
var content4 = document.getElementById('rankTable4');
var contentArray = [content, content2, content3, content4];

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

function ggyunolRank() {

    // Fetch data from address a, and if it fails, try address b
    fetchData(urlT2)
        .catch(error => {
            console.log('Failed to fetch from address a. Trying address b...');
            return fetchData(url2);
        })
        .then(data => {
            // Process the fetched data
            insideCompute(data);
            console.log('Fetched data:', data);
        })
        .catch(error => {
            console.log('Both attempts failed. Error:', error);
        });

    //     fetch(url2)
    //         .then(response => response.json())
    //         .then(data => {
    //             insideCompute(data);
    //         })

}

// Function to fetch from a specific URL
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Network response was not OK");
            }
        });
}

function insideCompute(fetchdata) {
    var aosFree = fetchdata.data.free;
    var aosPaid = fetchdata.data.paid;
    var aosGrossing = fetchdata.data.grossing;

    var aosFree2 = [];
    var aosPaid2 = [];
    var aosGrossing2 = [];

    var mmoGrossingGames = [];

    aosArray = [aosGrossing, aosFree, aosPaid];
    aosArray2 = [aosGrossing2, aosFree2, aosPaid2, mmoGrossingGames];

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
                
                if (i == 0){
                    // console.log("MMO Game in TG detected! Remove it!");
                    mmoGrossingGames.push(tempobj);
                    mmoGrossingGames[removeCount].gRank = removeCount + 1;
                    // console.log(mmoGrossingGames[removeCount]);
                    // console.log(mmoGrossingGames[removeCount].gRank);
                }

                removeCount += 1;

            } else {
                aosArray2[i].push(tempobj);
                var newRank = aosArray[i][j].rank - removeCount;
                aosArray2[i][newRank - 1].gRank = newRank;
            }
        }
    }

    // console.log(mmoGrossingGames);

    var aosCaption = ['GooglePlay - Top Grossing', 'GooglePlay - Free', 'GooglePlay - Paid', 'GooglePlay - Top Grossing (리니지라이크)'];

    for (var j = 0; j < contentArray.length; j++) {

        var output = "<table border='1'>";
        output += `<caption>${aosCaption[j]}</caption>`
        output += "<tr><th>순위</th><th>썸네일</th><th>제목</th><th>퍼블리셔</th></tr>";

        // console.log(iosArray2[j].length);

        if(aosArray2[j].length < 10){
            var maxRank = aosArray2[j].length;
        } else {
            var maxRank = 10;
        }

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
