canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");



ctx.beginPath();
ctx.strokeStle="grey";
ctx.lineWidth=4;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStle="blue";
ctx.lineWidth=5;
ctx.arc(250,210,40 ,0 ,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStle="red";
ctx.lineWidth=5;
ctx.arc(300,250,40 ,0 ,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStle="green";
ctx.lineWidth=5;
ctx.arc(350,210,40 ,0 ,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStle="green";
ctx.lineWidth=5;
ctx.arc(400,250,40 ,0 ,2 * Math.PI );
ctx.stroke();

ctx.beginPath();
ctx.strokeStle="green";
ctx.lineWidth=5;
ctx.arc(450,210,40 ,0 ,2 * Math.PI );
ctx.stroke();