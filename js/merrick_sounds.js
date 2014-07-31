            function playSomeMusic(genre) {
              console.log(genre);
              SC.get('/tracks', {
                genres: genre,
                bpm: {
                  from: 120
                }
              }, function(tracks) {
                var random = Math.floor(Math.random() * 49);
                var track = tracks[random];
                // SC.oEmbed(track.uri, { auto_play: true }, document.getElementById('target'));




              });
            }

            window.onload = function() {
              SC.initialize({
                client_id: 'cac82bb56f5d925de0499e607178dd45'
              });

              // SC.stream("/tracks/293", function(sound){
              //   sound.play();
              // });

              var menuLinks = document.getElementsByClassName('genre');
              for (var i = 0; i < menuLinks.length; i++) {
                menuLinks[i].onclick = function(e) {
                  e.preventDefault();
                  playSomeMusic(this.innerHTML);
                };
              }
            };