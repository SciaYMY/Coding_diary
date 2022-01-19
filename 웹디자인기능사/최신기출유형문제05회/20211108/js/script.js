//메뉴
var menu=$('#nav > ul li');
var bg=$('#nav>.bg');
menu.on({mouseover: function(){
    menu.find('ul').stop().slideDown();
    bg.stop().slideDown();
}, mouseout: function(){
    menu.find('ul').stop().slideUp();
    bg.stop().slideUp();
}});

//슬라이드
var slide=$('#slide ul li')
var current=0;
setInterval(function(){
    var prev=slide.eq(current);
    move(prev, 1, 0);
    current++;
    if(current==slide.size()) current=0;
    var next=slide.eq(current);
    move(next, 0, 1);
}, 3000);
function move(tg, start, end){
    tg.css('opacity', start).animate({opacity: end}, 500);
}

// 팝업
$('.popup').click(function(){
    $('.pop').stop().fadeIn();
});
$('.btn').click(function(){
    $('.pop').stop().fadeOut();
});