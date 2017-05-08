$(document).ready(function(){
        $('.or1').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            speed: 150,
        });
});


$(document).ready(function(){
        $('.or2').slick({
            dots: false,
            arrows: true,
            autoplay: false,
            infinite: true,
        });
});

$(document).ready(function(){
    
    $('#small img').click(function(){
        
        var N = $(this).attr("id").substr(2);
        
        $('#big').attr( "src" , "Photo/S__1195213" + N + ".jpg");
    });
    
});


$(document).ready(function(){
    
    $('#small1 img').click(function(){
        
        var M = $(this).attr("id").substr(3);
        
        $('#big1').attr( "src" , "Photo/newarr2/00" + M + ".jpg");
        
    });
    
});