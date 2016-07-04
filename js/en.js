$(function() {
    $('img').error(function(){
        var image = $(this).attr("src");
        $('img').attr("src","img/err.jpeg"); 

        alert("Imagem" + image + " indisponivel!");
    });

    $('img').width($(window).width()).height($(window).height());
    $(window).resize(function(){
        $('img').width($(window).width()).height($(window).height() + 500);
    });
        
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top > 500)
            $('img').fadeOut('1000')
        else
            $('img').fadeIn('1000')
    });
});