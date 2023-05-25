const axios = require('axios');
const cheerio = require('cheerio');
const { arrayBuffer } = require('stream/consumers');
const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const Slack = require('slack-node');
const fs = require('fs');

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

// 연, 월, 일 정보 추출
const year = yesterday.getFullYear();
const month = ('0' + (yesterday.getMonth() + 1)).slice(-2);
const day = ('0' + yesterday.getDate()).slice(-2);
// 결과 문자열 생성

const url = "https://app.sensortower.com/api/ios/category_rankings?offset=0&limit=25&category=6014&country=KR&date="+year+"-"+month+"-"+day+"&device=iphone";
const url2 = "https://app.sensortower.com/api/android/category_rankings?offset=0&limit=25&category=game&country=KR&date="+year+"-"+month+"-"+day;

var filteredLines = new Array();
rankWithoutMMO();

(async function myFunction() {
	let driver = await new Builder().forBrowser('chrome').build();  //가상 브라우저 빌드
		try { 
            await driver.get(url);    //get(url) 인거 보면 뭔지 알것같이 생겼다
            await driver.sleep(5000);
            let pageSource = await driver.getPageSource();
            const $ = cheerio.load(pageSource);       
            const bodyText = $('body').text();
            var jsonBodyText = JSON.parse(bodyText);
            
            // console.log(jsonBodyText.data.free[0]);
            
            var iFreeRank = new Array();

            //console.log('★★★★★IOS - 무료★★★★★');
            iFreeRank.push('★★★★★IOS - 무료★★★★★'+'\n');
            
            for (var i = 0; i< 5; i++){
                //console.log(i+1 + " - " + jsonBodyText.data.free[i].name + " - " + jsonBodyText.data.free[i].publisher_name);
                iFreeRank.push(i+1 + " - " + jsonBodyText.data.free[i].name + " - " + jsonBodyText.data.free[i].publisher_name);
            }
            // console.log(iFreeRank);
            slackpost(iFreeRank);

            var iPaidRank = new Array();

            // console.log('★★★★★IOS - 유료★★★★★'+'\n');
            iPaidRank.push('★★★★★IOS - 유료★★★★★'+'\n');

            for (var i = 0; i< 5; i++){
                // console.log(i+1 + " - " + jsonBodyText.data.paid[i].name + " - " + jsonBodyText.data.paid[i].publisher_name);
                iPaidRank.push(i+1 + " - " + jsonBodyText.data.paid[i].name + " - " + jsonBodyText.data.paid[i].publisher_name);
            }
            slackpost(iPaidRank);

            var iTopGRank = new Array();

            // console.log('★★★★★IOS - 매출★★★★★');
            iTopGRank.push('★★★★★IOS - 매출★★★★★'+'\n');

            for (var i = 0; i< 5; i++){
                // console.log(i+1 + " - " + jsonBodyText.data.grossing[i].name + " - " + jsonBodyText.data.grossing[i].publisher_name);
                iTopGRank.push(i+1 + " - " + jsonBodyText.data.grossing[i].name + " - " + jsonBodyText.data.grossing[i].publisher_name);
            }
            slackpost(iTopGRank);

            var iTopGRankWithoutMMO = new Array();
            var iGrossingCount = 0;

            iTopGRankWithoutMMO.push('★★★★★IOS - 매출 - MMO빼고★★★★★'+'\n');

            for (var i = 0; i< 25; i++){
                const item = jsonBodyText.data.grossing[i].name;

                if (filteredLines.includes(item)){
                    continue;
                }
            
                iGrossingCount = iGrossingCount + 1;
                if (iGrossingCount>5){
                    continue;
                }
                iTopGRankWithoutMMO.push(iGrossingCount + " - " + item + " - " + jsonBodyText.data.grossing[i].publisher_name);
                
            }
            // console.log(iTopGRankWithoutMMO);
            slackpost(iTopGRankWithoutMMO);
            
		}
        finally {            
			await driver.quit(); //가상 브라우저를 종료시킨다
        }

    let driver2 = await new Builder().forBrowser('chrome').build();  //가상 브라우저 빌드
		try { 
            await driver2.get(url2);    //get(url) 인거 보면 뭔지 알것같이 생겼다
            await driver2.sleep(5000);
            let pageSource = await driver2.getPageSource();
            const $ = cheerio.load(pageSource);       
            const bodyText = $('body').text();
            var jsonBodyText = JSON.parse(bodyText);

            var aFreeRank = new Array();

            // console.log('★★★★★안드 - 무료★★★★★');
            aFreeRank.push('★★★★★안드 - 무료★★★★★'+'\n');
            
            for (var i = 0; i< 5; i++){
                // console.log(i+1 + " - " + jsonBodyText.data.free[i].name + " - " + jsonBodyText.data.free[i].publisher_name);
                aFreeRank.push(i+1 + " - " + jsonBodyText.data.free[i].name + " - " + jsonBodyText.data.free[i].publisher_name);
            }
            slackpost(aFreeRank);            

            var aPaidRank = new Array();

            // console.log('★★★★★안드 - 유료★★★★★');
            aPaidRank.push('★★★★★안드 - 유료★★★★★'+'\n');            

            for (var i = 0; i< 5; i++){
                // console.log(i+1 + " - " + jsonBodyText.data.paid[i].name + " - " + jsonBodyText.data.paid[i].publisher_name);
                aPaidRank.push(i+1 + " - " + jsonBodyText.data.paid[i].name + " - " + jsonBodyText.data.paid[i].publisher_name);
            }
            slackpost(aPaidRank);     

            var aTopGRank = new Array();

            // console.log('★★★★★안드 - 매출★★★★★');
            aTopGRank.push('★★★★★안드 - 매출★★★★★'+'\n');            
            
            for (var i = 0; i< 5; i++){
                // console.log(i+1 + " - " + jsonBodyText.data.grossing[i].name + " - " + jsonBodyText.data.grossing[i].publisher_name);
                aTopGRank.push(i+1 + " - " + jsonBodyText.data.grossing[i].name + " - " + jsonBodyText.data.grossing[i].publisher_name);
            }
            slackpost(aTopGRank);     

            var aTopGRankWithoutMMO = new Array();
            var aGrossingCount = 0;

            aTopGRankWithoutMMO.push('★★★★★안드 - 매출 - MMO빼고★★★★★'+'\n');

            for (var i = 0; i< 25; i++){
                const item = jsonBodyText.data.grossing[i].name;

                if (filteredLines.includes(item)){
                    continue;
                }
            
                aGrossingCount = aGrossingCount + 1;
                if (aGrossingCount>5){
                    continue;
                }
                aTopGRankWithoutMMO.push(aGrossingCount + " - " + item + " - " + jsonBodyText.data.grossing[i].publisher_name);
                
            }
            // console.log(aTopGRankWithoutMMO);
            slackpost(aTopGRankWithoutMMO);

		}
        finally {            
			await driver2.quit(); //가상 브라우저를 종료시킨다
        }
        
})();

function slackpost(_array){
    
    var webhookUri = "https://hooks.slack.com/services/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";
    var arrayData = new Array();
    arrayData = _array;
    const payload = arrayData.map(item => String(item) + '\n').join('');
    // console.log(payload);
    // payload = "TEST!";

    var slack = new Slack();
    slack.setWebhook(webhookUri);
    
    slack.webhook({
        // channel: "#만트라-시스템",	// 현 슬랙의 채널
        // username: "Mantra!", // 슬랙에서 보여질 웹훅 이름
       text: payload	//텍스트
    }, function (err, response) {
        //console.log(response);
    });
  }

  function rankWithoutMMO(){
    
    // var arrayData = new Array();
    // arrayData = _array;
    
    const mmoListData = fs.readFileSync('./MMOLIST.txt', 'utf8');
    const mmoArray = mmoListData.split('\n');
    filteredLines = mmoArray.map(mmoArray => mmoArray.replace('\r', ''));
    // console.log(filteredLines);

    // const payload = arrayData.map(item => String(item) + '\n').join('');
    // console.log(payload);
    
  }

  