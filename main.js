leftwrist_x=0;
leftwrist_y=0;
rightwrist_x=0
rightwrist_y=0;
song_harry="";
song_whatever="";
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(610,390);
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}
function preload(){
    console.log("Page is Loaded !!");
    song_harry=loadSound("music.mp3");
    song_whatever=loadSound("Imagine_Dragons_-_Whatever_It_Takes_(getmp3.pro).mp3");
}
function draw(){
    image(video,0,0,300,300);
}
function modelloaded(){
    console.log("Model is loaded !!");
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftwrist_x=results[0].pose.leftWrist.x;
        leftwrist_y=results[0].pose.leftWrist.y;
        rightwrist_x=results[0].pose.rightWrist.x;
        rightwrist_y=results[0].pose.rightWrist.y;
        if(rightwrist_x >= 0){
            song_harry.play();
        }
        if(leftwrist_x >= 0){
            song_whatever.play();
        }
    }
}
