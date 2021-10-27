status = "";

variable = "";

function preload()
{
}

function setup()
{
    canvas = createCanvas(600, 350);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 350);
}

function start()
{
   //video.loop();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);

    document.getElementById("status").innerHTML = "Status: Detecting Objects";

    variable = document.getElementById("text").value;
}

function modelLoaded()
{
   console.log("Model Loaded");
   status = true;
   console.log(variable);
}