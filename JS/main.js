function setup(){
    createCanvas(screen.width / 3.5, screen.height / 2.5)

    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, screen.width / 3.5, screen.height / 2.5)
}

function modelLoaded() {
    console.log("PoseNet is initalized")
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        // console.log(results[0].pose.nose.x)  
    } 
}

