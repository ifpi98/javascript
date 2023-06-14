// $.ajax(url, {option});
$.ajax("/data.txt",{
    success:function(data){
        $('body').append(data);
        console.log(data);
    }
})

$.ajax({
    url: '/parameter',
    type:"get",
    data:{
        name:"admin",
        region:"seoul"
    },
    success:function(data){
        $('body').append(data);
    }
});

//load
$('#one').load('/data.html');
$('#two').load('/parameter?name=kim&region=seoul');
$('#sam').load('/data.xml');
$('#sa').load('/data.json');

