(function(window){
  var global = window;
  var speakWord = "Hello";
  var helloSpeaker = {};

  helloSpeaker.speak = function speak(name) {
    console.log(speakWord + " " + name);
  }

  global.helloSpeaker = helloSpeaker;
}(window))

