song="";

function preload(){
    song=loadSound("music.mp3","musix.mp3");
}
leftWristX=0;
leftWristY=0;

rightWristX=0;
rightWristY=0;


function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet= ml5.poseNet(video, model_loaded);
    posenet.on('pose', gotPoses);
    
}

function model_loaded(){
    console.log("Posenet is intialised");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("left wrist x="+leftWristX+"left wrist y="+leftWristY);
    
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("right wrist x="+rightWristX+"right wrist y="+rightWristY);
    }
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song.play();
    song.setVoume(1);
    song.rate(1);
}