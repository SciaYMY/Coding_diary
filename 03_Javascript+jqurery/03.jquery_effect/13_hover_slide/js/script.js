$(function(){
    $('.section1').hover(function(){
        $(this).stop().animate({width: 920}, 500)
    }, function(){
        $(this).stop().animate({width: 200}, 500)
    });

    $('.section2').hover(function(){
        $(this).stop().animate({width: 920, left: 0}, 500)
        $('.visual').stop().animate({left: -240}, 500)
    }, function(){
        $(this).stop().animate({width: 200}, 500)
        $('.visual').stop().animate({left: 0}, 500)
    });

    $('.section3').hover(function(){
        $(this).stop().animate({width: 920, left: 0}, 500)
        $('.visual').stop().animate({left: -480}, 500)
    }, function(){
        $(this).stop().animate({width: 200}, 500)
        $('.visual').stop().animate({left: 0}, 500)
    });

    $('.section4').hover(function(){
        $(this).stop().animate({width: 920, left: 0}, 500)
        $('.visual').stop().animate({left: -720}, 500)
    }, function(){
        $(this).stop().animate({width: 200}, 500)
        $('.visual').stop().animate({left: 0}, 500)
    });
});