var amount = 5;
var height = 60;


var wavePath = new Path({
      strokeColor: [0.8],
      strokeWidth: 20,
      strokeCap: 'round'
});

for (var i = 0; i <= amount; i++){
      wavePath.add(new Point(i / amount, 1) * view.size);
}

function onFrame(event){
      
      var animateSoundWave = function() {

            for (var i = 0; i <= amount; i++){
                  var segment = wavePath.segments[i];

                  var sinus = Math.sin(event.time * 3 + i);

                  segment.point.y = sinus * height + 100;
            }

            wavePath.smooth();

      };


      if (window.isSoundPlaying === true) {

            setTimeout(animateSoundWave, 2500);
      }
}

if (window.isSoundPlaying === true) {

      console.log("from the soundwave file");

}



