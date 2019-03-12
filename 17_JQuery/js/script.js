$(document).ready(function(){
    function modalOn() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown();
    }

    $('.close').on('click', function() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp();
    });

    $('.main_btna').on('click', modalOn);
    $('.main_btn').on('click', modalOn);
    $('li:contains("расписания туров")').on('click', modalOn);
 
  });