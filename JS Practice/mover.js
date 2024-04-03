function moveImage(image, xcord, ycord){
    dom = document.getElementById(image).style;
    dom.top = ycord + "px";
    dom.left = xcord + "px";
}