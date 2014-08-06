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

    

    var loadingGif = "http://38.media.tumblr.com/6a24ed04eb3abeeddec6174a84f22010/tumblr_n9tka96PXV1s2yegdo1_r1_500.gif";
    $('#merricksActualStudioImg').attr('src', loadingGif);
    $('#merrick_studio_pic, #tracks').addClass('hidden');

    playSong();
    window.isSoundPlaying = true;
    console.log(window.isSoundPlaying);
  });
};

