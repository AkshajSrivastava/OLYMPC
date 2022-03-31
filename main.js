var mouseevent="empty"
var lastx,lasty;
canvas=document.getElementById("myCanvas")
 canvas.addEventListener("mousedown",my_mousedown)
 function my_mousedown(e){
mouseevent="mousedown"
console.log(mouseevent)
 }
 canvas.addEventListener("mouseup",my_mouseup)
 function my_mouseup(e){
mouseevent="mouseup"
console.log(mouseevent)
 }
 canvas.addEventListener("mouseleave",my_mouseleave)
 function my_mouseleave(e){
mouseevent="mouseleave"
console.log(mouseevent)
 }
 canvas.addEventListener("mousemove",my_mousemove)
 function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    if (mouseevent=="mousedown")
    {
        ctx=canvas.getContext("2d");
        ctx.beginPath();
        ctx.strokeStyle="orange";
        ctx.lineWidth=3;
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(mouse_x,mouse_y)
        ctx.stroke()
    }
    lastx=mouse_x
    lasty=mouse_y
 }