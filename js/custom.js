$(function () {
    'use strict';
    
    $('.projects-links li').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all') {
            $('.shuffle-images a').css('display', 'block');
        }else{
             $('.shuffle-images a').css('display', 'none');
             $($(this).data('class')).css('display', 'block');
        }
    
    });
    
    
 (function autoSlider() {
     $('.reviews .active').each(function () {
         if(!$(this).is(':last-child')){
             $(this).delay(3000).fadeOut(1000, function () {
                 $(this).removeClass('active').next().addClass('active').fadeIn();
                 autoSlider();
             });
         }else{
             $(this).delay(3000).fadeOut(1000, function () {
                 $(this).removeClass('active');
                 $('.reviews div').eq(0).addClass('active').fadeIn();
                 autoSlider();
             });
         }
     });
 }());
    
    
    
var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
       console.log($(this).scrollTop());
        if($(this).scrollTop() >= 800){
            scrollButton.show();
        }else{
            scrollButton.hide();
        }
       
    });
     scrollButton.click(function() {
            $("html, body").animate({scrollTop:0}, 600);
        });

    });


$(function () {
    $(window).ready(function() {
        $(".loading-section").fadeOut(500, 
        function() {
            $("body").css("overflow", "auto");
            $(this).remove();
        });
    });
});

