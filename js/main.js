( function( $ ) {
    

    $window = $(window);
    $slide = $('.homeSlide');
    $body = $('body');
    
    
    function adjustWindow(){
        
        var s = skrollr.init();
         
        // Refresh Skrollr after resizing our sections
        s.refresh($('.homeSlide'));
        
        
        // Get window size
        winH = $window.height();
        
        // Keep minimum height 550
        if(winH <= 550) {
            winH = 550;
        } 
        
        // Resize our slides
        $slide.height(winH);
        
        // Refresh Skrollr after resizing our sections
        
        
    }
        
} )( jQuery );