$(function(){

    $("#news_wrap h2 a").on("click", function(e){
        e.preventDefault();
        $("#news_wrap h2 a").removeClass("on");
        $(this).addClass("on");
        $.ajax({
            url: $(this).attr("href"),
            dataType:"xml",
            success:function(data){
                // console.log(data);
                $("#news_list").empty();

                $.each($(data).find('item'), function(i,d){
                    if (i == 5) return false;
                    var title = $(this).find('title').text();
                    var link = $(this).find('link').text();
                    var date = $(this).find('pubDate').text();
                    date = new Date(date);
                    var m = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

                    $("#news_list").append('<li><a href="' + link + '" target="_blank">' + title + '</a><span>' + m + '</span></li>');

                });
            }
        });
    });

    $("#news_wrap h2 a").eq(0).click();
})