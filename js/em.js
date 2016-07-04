$(function() {
    var ex = $('.ex1');

    $('.ev1').click(function(){
        $(this).css("background", "#ccc");
        ex.text("Voce clicou!");
    });

    $('.ev2').dblclick(function(){
        $(this).css("background", "#ccc");
        ex.text("Voce clicou 2 vezes!");
    });

    $('.ev3').focusin(function(){
        $(this).css("background", "#ccc");
        ex.text("Voce deu foco!");
    }).focusout(function(){
        $(this).css("background", "#000");
        ex.text("Voce tirou foco!");
    });

    $('.ev4').hover(function(){
        $(this).css("background", "#ccc");
        ex.text("Passou o mouse!");
    });
});