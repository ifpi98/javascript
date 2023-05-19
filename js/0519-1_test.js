fetch('https://jsonplaceholder.typicode.com/photos')
.then(
    function (response) {
        console.log(response);
        return response.json();
    }
)
.then(
    function (data){
        console.log(data);
        var _array = [];
        
        for (var id in data){
            if(data[id].albumId == 1){
                if(data[id].id < 4){
                    // console.log(data[id]);
                    var obj = {
                        id: data[id].id,
                        title: data[id].title,
                        url: data[id].url,
                        thumburl: data[id].thumbnailUrl
                    }
                    
                    var output = '';
                    output += '<a href='+obj.url+' target="_blank">';
                    output += '<h3> Title: '+ obj.title +'</h3>';
                    output += '<img src='+obj.thumburl+'>'+'<br>';
                    
                    document.write(output);
                    // _array.push(obj);
                }
            }
        }
        // console.log(_array);


    }
);