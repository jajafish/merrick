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

    if ($('body').hasClass( "loading" ) ) {
 
        console.log('loading');
 
    }

});


