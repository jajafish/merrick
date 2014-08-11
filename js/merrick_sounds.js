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

    // PLAY SONG

    $('.song_panel').bind('click', function(e){

      e.preventDefault();

      if ($(".song_panel").is("#aroundSong")) {
        playSong("/tracks/103026878");
      }

      else if ($('.song_panel').is("#visionSong")) {
        playSong("/tracks/103512119");
      }

      else if ($('.song_panel').is("#23Song")) {
        playSong("/tracks/103279817");
      }

      window.isSoundPlaying = true;

      $('.merrick-mid-scroll-pic').addClass("spinner");
      setTimeout(removeSpinningAnimation, 2500);


    });

};





