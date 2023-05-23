
am5.ready(function() {

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");

// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(
  am5percent.PieChart.new(root, {
    endAngle: 270
  })
);

// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(
  am5percent.PieSeries.new(root, {
    valueField: "value",
    categoryField: "category",
    endAngle: 270
  })
);

series.states.create("hidden", {
  endAngle: -90
});

// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data


 //비동기 방식 async
 fetch('https://jsonplaceholder.typicode.com/users')
 .then(response => response.json())
 .then(json => {

    var dataArray = [];
     for (var i in json){
        dataArray.push({category: json[i].name,value: (2**(10-(i/2))) + Math.random() * 4 });
     }
     
     for (var i in dataArray){
        console.log(dataArray[i].value);
     }

     //  console.log(json[i].name);
    console.log(dataArray);
    series.data.setAll(dataArray);

    //  series.data.setAll([{
    //     category: "Lithuania",
    //     value: 501.9
    //   }, {
    //     category: "Czechia",
    //     value: 301.9
    //   }, {
    //     category: "Ireland",
    //     value: 201.1
    //   }, {
    //     category: "Germany",
    //     value: 165.8
    //   }, {
    //     category: "Australia",
    //     value: 139.9
    //   }, {
    //     category: "Austria",
    //     value: 128.3
    //   }, {
    //     category: "UK",
    //     value: 99
    //   }]);
      
 }
 )

series.appear(1000, 100);

}); // end am5.ready()
