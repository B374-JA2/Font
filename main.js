var xRightWrist = 0;
var xLeftWrist = 0;
var distanceMeasure = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.size(500, 400);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    console.log(results);
    xRightWrist = results[0].pose.rightWrist.x;
    xLeftWrist = results[0].pose.leftWrist.x;
    distanceMeasure = floor(xRightWrist - xLeftWrist);

}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    background("darkblue");
    fill("white");
    stroke("hotpink");
    strokeWeight(5);
    document.getElementById("fontSize").innerHTML="font size- " + distanceMeasure;
    textSize(distanceMeasure);
    text("Preppy", 100, 200);
}