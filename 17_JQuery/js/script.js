$(document).ready(function(){

    function modalOn() {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown();
    }

    function modalOff() {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp();
    }

    $('.close').on('click', modalOff);
    $('.main_btna').on('click', modalOn);
    $('.main_btn').on('click', modalOn);
    $('li:contains("расписания туров")').on('click', modalOn);
 
  });