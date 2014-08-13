function playSong(sound){
  SC.stream(sound, function(sound){
    sound.play();
  });
}




window.onload = function() {
  SC.initialize({
    client_id: 'cac82bb56f5d925de0499e607178dd45'
  });

    var removeSpinningAnimation = function(){
      $('.merrick-mid-scroll-pic').removeClass("spinner");
    };


    // PLAY AROUND

    $('#aroundSong').bind('click', function(e){
      e.preventDefault();

      playSong("/tracks/103026878");
      window.isSoundPlaying = true;

      $('.merrick-mid-scroll-pic').addClass("spinner");

      setTimeout(removeSpinningAnimation, 2500);

    });

    // PLAY VISION

    $('#visionSong').bind('click', function(e){
      e.preventDefault();

      playSong("/tracks/103512119");
      window.isSoundPlaying = true;

      $('.merrick-mid-scroll-pic').addClass("spinner");
      setTimeout(removeSpinningAnimation, 2500);
    });


    // PLAY 23

    $('#23Song').bind('click', function(e){
      e.preventDefault();
      playSong("/tracks/103279817");
      window.isSoundPlaying = true;

      $('.merrick-mid-scroll-pic').addClass("spinner");
      setTimeout(removeSpinningAnimation, 2500);
    });

    

};