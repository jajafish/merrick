function playSong(){
  SC.stream("/tracks/103512119", function(sound){
    sound.play();
  });
}

window.onload = function() {
  SC.initialize({
    client_id: 'cac82bb56f5d925de0499e607178dd45'
  });


  $('.song_panel').bind('click', function(e) {
    e.preventDefault();
    $('body').addClass("loading");
    playSong();
  });
};

