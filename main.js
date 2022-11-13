function preload(){
mustach_pic = loadimage("https://drive.google.com/file/d/1CW0SBWi9iH7QEV7Pai3rThy4sowv3Wcq/view")
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
}

function draw(){
    
}
