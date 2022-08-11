
var img = "";
var status = "";

function preload(){

img = loadImage('bedroom.jpg');

}

function setup(){

    canvas = createCanvas(640, 420);
    canvas.center();
    
    objectdetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";

}

function modelLoaded(){
    console.log("yea");
    status = true;
    objectdetector.detect(img, gotResult);
    
    }
   
    
    console.log(results);
    objects = results;
    
    
    function draw(){

        image(img, 0, 0, 640, 420);
        if(status != ""){
        
        for(i = 0; i < objects.length; i++){
        
        document.getElementById("status").innerHTML = "Status: Object(s) Detected";
        
        fill("#7f58c7");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#7f58c7");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        
        }
        
        }
        
        }
    
    function gotResult(error, results){
    
    if(error){
    
    console.log(error);
    
    }
    
    console.log(results);
    
    }