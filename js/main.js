$(document).ready(function(){
    var image = $("#playButton").children("img");
    $("#playButton")
        .mouseover(function() { 
            var src = "/img/icons/playIconOnHover.png";
            image.attr("src", src);
        })
        .mouseout(function() {
            var src = "/img/icons/playIcon.png";
            image.attr("src", src);
        });

    var originalContent = $('.myTR td').html();
    $('.myTR').hover(function() {
         $('.myTR td').html('<strong>New HTML</strong>');   
    }, function() {
         $('.myTR td').html(originalContent); 
    });

});



$(window).scroll(function () {
    var $this = $(this);
    if ($this.scrollTop() > 800) {
        $('#music-menu-option h2').addClass('on-nav-link');
        $('#music-menu-option h2').removeClass('off-nav-link');

        $('#bio-menu-option h2').addClass('off-nav-link');
        $('#bio-menu-option h2').removeClass('on-nav-link');

        $('#social-menu-option h2').addClass('off-nav-link');
        $('#social-menu-option h2').removeClass('on-nav-link');
    } if ($this.scrollTop() > 1970) {
        $('#music-menu-option h2').addClass('off-nav-link');
        $('#music-menu-option h2').removeClass('on-nav-link');

        $('#bio-menu-option h2').addClass('on-nav-link');
        $('#bio-menu-option h2').removeClass('off-nav-link');

        $('#social-menu-option h2').addClass('off-nav-link');
        $('#social-menu-option h2').removeClass('on-nav-link');
    } if ($this.scrollTop() > 2865) {
        $('#music-menu-option h2').addClass('off-nav-link');
        $('#music-menu-option h2').removeClass('on-nav-link');

        $('#bio-menu-option h2').addClass('off-nav-link');
        $('#bio-menu-option h2').removeClass('on-nav-link');

        $('#social-menu-option h2').addClass('on-nav-link');
        $('#social-menu-option h2').removeClass('off-nav-link');
    }
}); 


