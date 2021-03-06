song = "";

function preload() {
    song = loadSound("music.mp3", "musix.mp3");
}
leftWristX = 0;
leftWristY = 0;
scoreLefttWrist = 0;

rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, model_loaded);
    posenet.on('pose', gotPoses);

}

function model_loaded() {
    console.log("Posenet is intialised");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLefttWrist = results[0].pose.keypoints[9].score;

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x=" + leftWristX + "left wrist y=" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x=" + rightWristX + "right wrist y=" + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
    fill('#FF0000');
    stroke('#FF0000');

    if(scoreRightWrist > 0.2){
        circle(rightWristX, rightWristY, 20);
        InNumrightWristY = Number(rightWristY);
        song.play("music.mp3");
    }

    if (scoreLefttWrist > 0.2) {
        circle(leftWristX, leftWristY, 20);
        InNumleftWristY = Number(leftWristY);
        song.play("musix.mp3");
    }

}

function play() {
    song.play();
}