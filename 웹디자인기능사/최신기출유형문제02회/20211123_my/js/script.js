//MENU
var menu=$('#nav>ul>li');
menu.on({mouseover: function(){
    $(this).find('ul').stop().slideDown(200);
}, mouseout: function(){
    $(this).find('ul').stop().slideUp(200);
}});
//SLIDE
var slide=$('#section ul li');
var current=0;
setInterval(function(){
    var prev=slide.eq(current);
    current++;
    move(prev, 0, '-100%');
    if(current==slide.size()) current=0;
    var next=slide.eq(current);
    move(next, '100%', 0);
}, 2500);
function move(target, start, end){
    target.css('left', start).animate({left: end}, 500);
}
//TAB
var tab=$('.tab ul li'), tabContent=$('.tab-contents>div');
tab.click(function(){
    var target=$(this);
    var i=target.index();
    tab.removeClass('active');
    target.addClass('active');
    tabContent.css('display', 'none');
    tabContent.eq(i).css('display', 'block');
})
//POP-UP
$('.popup').click(function(){
    $('#pop').fadeIn();
});
$('.btn').click(function(){
    $('#pop').fadeOut();
});