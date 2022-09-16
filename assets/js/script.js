$(function(){
    $(window).scroll(function() {
    if($(this).scrollTop() >= 120) {
    $('.topnav').addClass('fixed');
    }
    else{
    $('.topnav').removeClass('fixed');
    }
    });
   });