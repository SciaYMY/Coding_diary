//MENU
var menu=$('#nav>ul>li');
menu.on({mouseover: function(){
    menu.find('ul').stop().slideDown();
    $('#nav .bg').stop().slideDown();
}, mouseout: function(){
    menu.find('ul').stop().slideUp();
    $('#nav .bg').stop().slideUp();
}});
//SLIDE
var slide=$('#slide ul li');
var current=0;
setInterval(function(){
    var prev=slide.eq(current);
    move(prev, 1, 0);
    current++;
    if(current==slide.size()) current=0;
    var next=slide.eq(current);
    move(next, 0, 1);
}, 2500)
function move(target, start, end){
    target.css('opacity', start).animate({opacity: end}, 500);
}
//popup
$('.popup1').click(function(){
    $('#pop').stop().fadeIn();
    $('#pop .pop1').stop().fadeIn();
    $('#pop .pop3').css('display', 'none');
})
$('.btn1').click(function(){
    $('#pop').stop().fadeOut();
})
$('.popup3').click(function(){
    $('#pop').stop().fadeIn();
    $('#pop .pop3').stop().fadeIn();
    $('#pop .pop1').css('display', 'none');
})
$('.btn3').click(function(){
    $('#pop').stop().fadeOut();
})