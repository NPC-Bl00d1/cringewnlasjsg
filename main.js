
var img = "";
var status = "";

function preload(){

img = loadImage('bsd by beloved.jpg');

}


function setup(){

canvas = createCanvas(640, 420);
canvas.center();

objectdetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function draw(){

image(img, 0, 0, 640, 420);
fill("#7300ff");
text("Atsushi", 45, 55);
noFill();
stroke("#7300ff")
rect(30, 30, 200, 370);

fill("#11ed4b");
text("Kyouka", 420, 130);
noFill();
stroke("#11ed4b");
rect(400, 110, 200, 300);

fill("#14e0e0");
text("Dazai >:(", 280, 110);
noFill();
stroke("#14e0e0");
rect(270, 100, 100, 300);

}

function modelLoaded(){
console.log("Oneratur!");
status = true;
objectdetector.detect(img, gotResult);

}

function gotResult(error, results){

if(error){

console.log(error);

}

console.log(results);

}