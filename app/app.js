;(function(){

$(document).ready(function () {
    $('.tiles').hover(function () {
        $(this).find('img').addClass('darken')
        $(this).find('.text').removeClass('hide');
    }, function () {
        $(this).find('img').removeClass('darken')
        $(this).find('.text').addClass('hide');
    });
});

}());