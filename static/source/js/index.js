/**
 * Created by Tean on 2016/10/14.
 */
$(function () {
    var open = false;
    $('#btnNav').click(function () {
        if (!open) {
            $(this).stop().animate({left: 220}, 500, function () {
                $(this).find('div:nth-child(1)').animate({top: 15}, 300, function () {
                    $(this).addClass('line-t');
                });
                $(this).find('div:nth-child(2)').animate({opacity: 0}, 300);
                $(this).find('div:nth-child(3)').animate({top: -15}, 300, function () {
                    $(this).addClass('line-b');
                });
            });
            $('#navigate').stop().animate({left: 0}, 500);
        } else {
            $(this).stop().animate({left: 30}, 500, function () {
                $(this).find('div:nth-child(1)').removeClass('line-t').animate({top: 0}, 600);
                $(this).find('div:nth-child(2)').animate({opacity: 1}, 300);
                $(this).find('div:nth-child(3)').removeClass('line-b').animate({top: 1}, 600);
            });
            $('#navigate').stop().animate({left: -320}, 500);
        }
        open = !open;
    });

    $(window).blur(function () {
       document.title = '这里更精彩！';
    }).focus(function () {
        document.title = "Tean's Blog";
    });
});