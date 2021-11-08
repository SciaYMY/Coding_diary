$('.slideshow').each(function(){
    var timer;
    var container = $(this);
    function switchImg(){
        var anchors = container.find('a')
        var first = anchors.eq(0);
        var second = anchors.eq(1);
        first.fadeOut().appendTo(container);
        second.fadeIn();
    }
    // switchImg();
    function startTimer(){
        timer = setInterval(switchImg, 3000)
    }
    function stopTimer(){
        clearInterval(timer);
    }

    container.find('a').hover(stopTimer,startTimer);
    startTimer();
});