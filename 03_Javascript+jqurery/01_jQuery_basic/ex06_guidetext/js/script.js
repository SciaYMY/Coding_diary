$(function(){
    $('.guideText').each(function(){
        var guideText = this.defaultValue;
        // var guideText = $(this).val();   //안에 내용이 바뀌기 때문에 사용 안됨
        var element = $(this);
        element.focus(function(){
            if(element.val()==guideText){
                element.val('');
                element.removeClass('guide');
            }
        });
        element.blur(function(){
            if(element.val()==''){
                element.val(guideText);
                element.addClass('guide');
            }
        });
        if(element.val()==guideText){
            element.addClass('guide');
        }
    });
});