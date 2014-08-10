function playSong(){
  SC.stream("/tracks/103512119", function(sound){
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


  $('.song_panel').bind('click', function(e) {
    e.preventDefault();
    $('.merrick-mid-scroll-pic').addClass("spinner");

    setTimeout(removeSpinningAnimation, 2500);


    playSong();
    window.isSoundPlaying = true;
    console.log(window.isSoundPlaying);
  });
};

