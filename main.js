x = 0;
y = 0;
screen_width = 0;
screen_heigt = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var apple = "";

var speak_data = "";

var to_number = "";

function preload() {
  loadImage("apple.png");
  apple = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

  to_number = Number(content);

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

  if(Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Started drawing apple(s)";
    draw_apple = "set";
  } else {
    document.getElementById("status").innerHTML = "The speech said is not a number. Please say a number";
  }

}

function setup() {
  loadImage("apple.png");
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  createCanvas(screen_width, screen_height - 150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak_data = to_number + " Apples drawn."
    speak();
    for(var i = 1; i <= to_number; i++)
      {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
      }
  }
}

function speak(){
    var synth = window.speechSynthesis;
    https://drive.google.com/drive/folders/1sW9L9qvtdB9Kpytbyfo28EJ8bdxXEtqf?usp=sharing
    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}