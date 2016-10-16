/**
 * Created by Tean on 2016/10/16.
 */
$(function () {

    var returnTop = $('#returnTop');

    $(window).scroll(function () {
        if($(this).scrollTop() > 200) {
            returnTop.stop().animate({bottom:30}, 500);
        } else {
            returnTop.stop().animate({bottom:-130}, 500);
        }
    });
    returnTop.click(function () {
        $('body,html').animate({scrollTop:0}, 500);
    });

});