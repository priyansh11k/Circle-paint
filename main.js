var mouseevent = "empty";
var lastX,lastY; 

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

colour = "black";
width = 1;

canvas.addEventListener("mousedown",myMousedown);
  function myMousedown(e){
   mouseevent="mouseDown" ;
    colour=document.getElementById("color").value;
    width=document.getElementById("width").value;


  }

  canvas.addEventListener("mouseup",myMouseup);
  function myMouseup(e){
   mouseevent="mouseUp" ;
  }
   
  canvas.addEventListener("mouseleave",myMouseleave);
  function myMouseleave(e){
   mouseevent="mouseLeave" ;
  }

  canvas.addEventListener("mousemove",myMousemove);
  function myMousemove(e){
   currentX=e.clientX-canvas.offsetLeft;
   currentY=e.clientY-canvas.offsetTop;

   if(mouseevent=="mouseDown"){
   ctx.beginPath();
   ctx.strokeStyle=colour;
   ctx.lineWidth=width;
   ctx.arc(currentX,currentY,20,0,2*Math.PI);
   ctx.stroke();
   }
   lastX=currentX;
   lastY=currentY;
  }

  function cleararea(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
 }
  


