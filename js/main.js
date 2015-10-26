//global varibles
var mywinWidth, mywinHeight;


function setup(){
//creat the canvas
    var cnv = createCanvas(1500,3000);
    cnv.parent("windows");

    //set the width and height of the window i will draw
    mywinHeight = 250;
    mywinWidth = 100;
    var colWidth = 160;
    var rowHeight = 300;
    var x = 40;
    var y = 40;
   for(var i=0; i<30; i++){
   drawWindow(x,y);
       x += colWidth;
       if(x >width-mywinWidth){
       x = 40;
       y += rowHeight;
       }

   }//end for loop

}//end setup

function drawWindow(startX,startY){
     fill('Sienna');
    rect(startX,startY,mywinWidth,mywinHeight);
    stroke('peru');
    var x1, x2,y1, y2;
    x1 = startX+mywinWidth/2;//middle of window
    y1 = startY;
    x2 = startX+mywinWidth/2;
    y2 = startY+mywinHeight;
    line(x1, y1,x2,y2);

    //add box at the top
    x1 = startX - 20;
    y1 = startY - 20;
    rect(x1,y1,mywinWidth+40,20);

    //horizontal line across the top
    x1 = startX;
    y1 = startY+mywinHeight*.25;
    x2 = startX+mywinWidth;
    y2 = y1;
    line(x1, y1,x2,y2);

    //horizontal line1/2 across the top
    x1 = startX;
    y1 = startY+mywinHeight*.5;
    x2 = startX+mywinWidth;
    y2 = y1;
    line(x1, y1,x2,y2);

    //horizontal line3/4 across the top
     x1 = startX;
    y1 = startY+mywinHeight*.75;
    x2 = startX+mywinWidth;
    y2 = y1;
    line(x1, y1,x2,y2);

    //add box at the bottom
    x1 = startX -20;
    y1 = startY + mywinHeight;
    rect(x1,y1,mywinWidth+40,20);
}
