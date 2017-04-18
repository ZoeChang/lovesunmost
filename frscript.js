// carousel 調整速度
$(function(){
    $('.carousel').carousel({interval: 1000});
});


// 縮圖變大

/*
$(function(){
   $('.bigbox1 img').onmousemove({
       var picsrc;
       picsrc = 'hello';
       document.getElementById("demo").innerHTML = picsrc;
   });
});

*/

$(function(){
    $('.bigbox1 img').mouseover(function(){
        var smsrc = $(this).attr("src").substr(18,1);
        var picsrc = 'data/newarrival/00' + smsrc + 'en.jpg';
        var $illus = $('#illus');

        $illus.attr("src" , picsrc );
    });

});
