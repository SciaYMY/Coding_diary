/* $('#springBtn').stop().click(function(){
    $('#image img').attr("src", "./images/spring.jpg")
})
$('#summerBtn').stop().click(function(){
    $('#image img').attr("src", "./images/summer.jpg")
})
$('#fallBtn').stop().click(function(){
    $('#image img').attr("src", "./images/fall.jpg")
})
$('#winterBtn').stop().click(function(){
    $('#image img').attr("src", "./images/winter.jpg")
}) */


$('#springBtn').on('click', function(){
    $('#image>img').attr({src: "./images/spring.jpg", alt:'봄'})
})
$('#summerBtn').on('click', function(){
    $('#image>img').attr({src: "./images/summer.jpg", alt:'여름'})
})
$('#fallBtn').on('click', function(){
    $('#image>img').attr({src: "./images/fall.jpg", alt:'가을'})
})
$('#winterBtn').on('click', function(){
    $('#image>img').attr({src: "./images/winter.jpg", alt:'겨울'})
})
