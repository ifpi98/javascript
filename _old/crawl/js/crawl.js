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

const url = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=KR&date="+year+"-"+month+"-"+day+"&device=iphone";
const url2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=KR&date="+year+"-"+month+"-"+day;
const urlT = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=KR&date="+yearT+"-"+monthT+"-"+dayT+"&device=iphone";
const urlT2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=KR&date="+yearT+"-"+monthT+"-"+dayT;
// console.log(url);
// console.log(url2);
// console.log(urlT);
// console.log(urlT2);

const maxRank = 10;

var content = document.getElementById('rankTable');

function normalRank(){

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

        for (var array of iosArray){
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


function ggyunolRank(){

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

        var iosFree2 = [];
        var iosPaid2 = [];
        var iosGrossing2 = [];

        iosArray = [iosFree, iosPaid, iosGrossing];
        iosArray2 = [iosFree2, iosPaid2, iosGrossing2];

        var removeCount = 0;
        iosFree.forEach((ele, i) => {
        
            var tempobj = {
                rank : iosFree[i].rank,
                icon_url : iosFree[i].icon_url,
                name : iosFree[i].name,
                publisher_name : iosFree[i].publisher_name,
                gRank : ''
            }

            // tempobj.gRank = 1;
            // console.log(tempobj);

            if (MMOLIST.includes(tempobj.name)){
                console.log("MMO Game detected! Remove it!");
                removeCount += 1;
            } else {
                iosFree2.push(tempobj);
                var newRank = iosFree[i].rank - removeCount;
                iosFree2[newRank - 1].gRank = newRank;
            }
            
        });
        
        var removeCount = 0;
        iosPaid.forEach((ele, i) => {
        
            var tempobj = {
                rank : iosPaid[i].rank,
                icon_url : iosPaid[i].icon_url,
                name : iosPaid[i].name,
                publisher_name : iosPaid[i].publisher_name,
                gRank : ''
            }

            if (MMOLIST.includes(tempobj.name)){
                console.log("MMO Game detected! Remove it!");
                removeCount += 1;
            } else {
                iosPaid2.push(tempobj);
                var newRank = iosPaid[i].rank - removeCount;
                iosPaid2[newRank - 1].gRank = newRank;
            }
            
        })

        var removeCount = 0;
        iosGrossing.forEach((ele, i) => {
        
            var tempobj = {
                rank : iosGrossing[i].rank,
                icon_url : iosGrossing[i].icon_url,
                name : iosGrossing[i].name,
                publisher_name : iosGrossing[i].publisher_name,
                gRank : ''
            }

            if (MMOLIST.includes(tempobj.name)){
                console.log("MMO Game detected! Remove it!");
                removeCount += 1;
            } else {
                iosGrossing2.push(tempobj);
                var newRank = iosGrossing[i].rank - removeCount;
                // console.log(newRank);
                // console.log(removeCount);
                iosGrossing2[newRank - 1].gRank = newRank;
            }
            
        })


        for (var array of iosArray2){
            // console.log(array);
        
            for (var i = 0; i < maxRank ; i++){
                output += "<tr>";
                output += "<td>" + array[i].gRank + "</td>";
                output += "<td>" + "<img src=" + array[i].icon_url + ">" + "</td>"
                output += "<td>" + array[i].name + "</td>";
                output += "<td>" + array[i].publisher_name + "</td>";
                
                // output += "<td>" + iosFree[i].previous_rank + "</td>";
                output += "</tr>"
            };
        }

        output += "</table>";
        content.innerHTML = output;

    })

}

ggyunolRank();