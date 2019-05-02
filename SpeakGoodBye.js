(function(window){
  var global = window;
  var speakWord = "Good Bye";
  var byeSpeaker = {};

  byeSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  global.byeSpeaker = byeSpeaker;
}(window))

