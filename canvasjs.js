// Canvas Drawing
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var cloud = document.getElementById("cloud");

//problem: the scales are not wrapped up in each function
context.fillStyle = 'deepskyblue';
context.fillRect(0, 0, canvas.width, canvas.height);

context.translate(300,450);
context.scale(0.5,0.5);

function drawFace(){
context.beginPath();
context.arc(200,200,100,0,2*Math.PI);
context.fillStyle = '#717171';
context.fill();
}


function drawTongue(){
    
context.beginPath();
context.arc(200,290,40,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();

context.beginPath();
context.arc(200,310,15,0,2*Math.PI);
context.fillStyle = 'pink';
context.fill();
}

function drawLeftCheek(){
context.beginPath();
context.arc(160,275,50,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
}

function drawRightCheek(){
context.beginPath();
context.arc(240,275,50,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
  
}

function drawLeftBrow(){
context.beginPath();
context.arc(170,170,20,0,2*Math.PI)
context.fillStyle = 'white';
context.fill();
    
context.beginPath();
context.arc(171,177,22,0,2*Math.PI);
context.fillStyle = '#717171';
context.fill()
}

function drawRightBrow(){
context.beginPath();
context.arc(240,170,20,0,2*Math.PI)
context.fillStyle = 'white';
context.fill();

context.beginPath();
context.arc(239,177,22,0,2*Math.PI);
context.fillStyle = '#717171';
context.fill()
}

function drawLeftEye(){
context.beginPath();
context.scale(1,1.5);
context.arc(171,126,15,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
  
context.beginPath();
context.arc(175,123,10,0,2*Math.PI);
context.fillStyle = 'black';
context.fill();
    
context.beginPath();
context.arc(172,119,3,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
}

function drawRightEye(){
context.beginPath();
context.arc(240,126,15,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
  
context.beginPath();
context.arc(244,123,10,0,2*Math.PI);
context.fillStyle = 'black';
context.fill();
    
context.beginPath();
context.arc(242,119,3,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
context.scale(1,2/3);
}

function drawWhiskers(){
context.beginPath();
context.moveTo(200, 305);
context.quadraticCurveTo(185, 318, 170, 305);
context.lineWidth = 3;
context.stroke();
    
context.beginPath();
context.moveTo(200, 305);
context.quadraticCurveTo(215, 318, 230, 305);
context.lineWidth = 3;
context.stroke();
    
context.beginPath();
context.moveTo(200,305);
context.lineTo(200,270);
context.stroke();
}

function drawSnout(){
context.beginPath();
context.moveTo(200, 272);
context.quadraticCurveTo(212.5, 280, 225, 240);
context.quadraticCurveTo(200, 225, 175, 240);
context.quadraticCurveTo(187.5, 280, 200, 272);
context.closePath();
context.fillStyle = 'black';
context.fill();
    
context.beginPath();
context.scale(2,1);
context.arc(100,243,6,0,2*Math.PI);
context.fillStyle = 'white';
context.fill();
context.scale(0.5,1);
}

function drawLeftEarInside(){
context.beginPath();
context.scale(2,1);
context.moveTo(60,140);
context.quadraticCurveTo(40,120,48,73);
context.quadraticCurveTo(80,90,75,116);
context.quadraticCurveTo(100,100,60,140);
context.closePath();
context.fillStyle = 'white';
context.fill();
context.scale(0.5,1);
}

function drawLeftEarOutside(){
context.beginPath();
context.scale(2,1);
context.moveTo(56,155);
context.quadraticCurveTo(30,120,47,64);
context.quadraticCurveTo(73,60,80,110);
context.quadraticCurveTo(56,155,56,155);
context.closePath();
context.fillStyle = '#717171';
context.fill();
context.scale(0.5,1);
}

function drawRightEarInside(){
context.beginPath();
context.scale(2,1);
context.moveTo(120,140);
context.quadraticCurveTo(160,120,142,73);
context.quadraticCurveTo(120,90,120,116);
context.lineTo(120,140);
context.closePath();
context.fillStyle = 'white';
context.fill();
context.scale(0.5,1);
}

function drawRightEarOutside(){
context.beginPath();
context.scale(2,1);
context.moveTo(116,155);
context.quadraticCurveTo(172,120,145,64);
context.quadraticCurveTo(125,60,115,110);
context.lineTo(116,155);
context.closePath();
context.fillStyle = '#717171';
context.fill();
context.scale(0.5,1);
}

function drawBody(){
context.scale(2,1);
context.beginPath();
context.moveTo(70,275);
context.quadraticCurveTo(50,290,40,370);
context.quadraticCurveTo(30,450,60,470);
context.quadraticCurveTo(80,480,100,480);
context.quadraticCurveTo(145,480,145,350);
context.quadraticCurveTo(145,300,125,270);
context.lineTo(70,275);
context.closePath();
context.fillStyle = "#717171";
context.fill();
context.scale(0.5,1);
    
context.beginPath();
context.moveTo(78,380);
context.quadraticCurveTo(85, 345,94,328);
context.quadraticCurveTo(120, 325, 130,340);
context.quadraticCurveTo(140,355,140,375);
context.quadraticCurveTo(140,390,120,400);
context.quadraticCurveTo(90,420,78,380);
context.closePath();
context.fillStyle = "white";
context.fill();
}

function drawLeftLeg(){
context.beginPath();
context.moveTo(180,340);
context.quadraticCurveTo(150,390,170,440);
context.quadraticCurveTo(140,470,170,490);
context.quadraticCurveTo(185,500,200,490);
context.quadraticCurveTo(215,480,205,445);
context.quadraticCurveTo(220,430,210,350);
context.quadraticCurveTo(200,330,180,340,)
context.fillStyle = 'white';
context.fill();
}

function drawRightLeg(){
context.translate(10,0);
context.beginPath();
context.moveTo(250,330);
context.quadraticCurveTo(230,330,230,350);
context.quadraticCurveTo(232,380,230,435);
context.quadraticCurveTo(220,460,225,480);
context.quadraticCurveTo(245,490,267,477);
context.quadraticCurveTo(275,440,275,400);
context.quadraticCurveTo(275,325,250,330);
context.fillStyle = 'white';
context.fill();
context.translate(-10,0);
}

function drawCollar(){
context.beginPath();
context.moveTo(120,290);
context.quadraticCurveTo(106,300,103,310);
context.quadraticCurveTo(200,360,280,305);
context.lineTo(120,290);
context.closePath();
context.fillStyle = 'blue';
context.fill();
context.beginPath();   
context.arc(223,340,12,0,2*Math.PI);
context.fillStyle = 'yellow';
context.fill();
}

function drawTail(){
context.beginPath();
context.moveTo(80,400);
context.quadraticCurveTo(30,375,20,370);
context.quadraticCurveTo(10,375,20,400);
context.quadraticCurveTo(40,430,90,450);
context.lineTo(80,400);

context.fillStyle = 'white';
context.fill();
}

function Head(){
drawLeftEarOutside();
drawLeftEarInside();
drawRightEarOutside();
drawRightEarInside();
drawFace();
drawTongue();
drawLeftCheek();
drawRightCheek();
drawLeftBrow();
drawRightBrow();
drawLeftEye();
drawRightEye();
drawWhiskers();
drawSnout();  
}

function wholeBody(){
drawTail();
drawBody();
drawCollar();
drawLeftLeg();
drawRightLeg();    
}

function drawHouse(){
context.lineWidth = 0.1;
context.beginPath();
context.rect(400,180,300,240);
context.closePath();
context.fillStyle = '#BE8936';
context.fill();  

context.beginPath();
context.rect(400,180,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();

context.beginPath();
context.rect(400,220,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
    
context.beginPath();
context.rect(400,260,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
  
context.beginPath();
context.rect(400,300,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();

context.beginPath();
context.rect(400,340,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
    
context.beginPath();
context.rect(400,380,300,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
    
context.beginPath();
context.rect(400,160,300,20);
context.closePath();
context.fillStyle = '#BE8936';
context.fill();

context.beginPath();
context.rect(420,140,260,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
    
context.beginPath();
context.rect(440,120,220,20);
context.closePath();
context.fillStyle = '#BE8936';
context.fill();
    
context.beginPath();
context.rect(465,100,170,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
 
context.beginPath();
context.rect(490,80,120,20);
context.closePath();
context.fillStyle = '#BE8936';
context.fill();
    
context.beginPath();
context.rect(520,60,65,20);
context.closePath();
context.fillStyle = '#C59C5F';
context.fill();
    
//The roof  
context.beginPath();
context.moveTo(405,180);
context.lineTo(550,60);
context.lineTo(695,180);
context.lineTo(740,180);
context.lineTo(550,30);
context.lineTo(360,180);
context.lineTo(400,180);
context.stroke();
context.closePath();
context.fillStyle = '#C10000';
context.fill();
 
//Hole
context.lineWidth = 1;
context.beginPath();
context.moveTo(470,400);
context.bezierCurveTo(450,200,650,200,630,400);
context.lineTo(640,400);
context.bezierCurveTo(670,190,425,190,460,400); 
context.lineTo(470,400);
context.closePath();
context.fillStyle = '#BE8936';
context.fill();
context.beginPath();
context.moveTo(470,400);
context.bezierCurveTo(450,200,650,200,630,400);
context.lineTo(470,400);
context.closePath();
context.fillStyle = 'black';
context.fill();
  
// Name Plate
context.beginPath();
context.rect(500,130,100,40);
context.closePath();
context.fillStyle = '#AE7A49';
context.fill();
}

function drawFoodBowl(){
context.beginPath();
context.moveTo(350,460);
context.quadraticCurveTo(400,450,450,460);
context.quadraticCurveTo(400,470,350,460);
context.lineTo(335,490);
context.quadraticCurveTo(400,510,465,490);
context.lineTo(450,460);
context.closePath();
context.stroke();
context.fillStyle = '#009D45';
context.fill();

context.rect(365,470,70,20);
context.fillStyle = '#BE8936';
context.fill();
context.stroke();
}



function landscape(){
    
    context.beginPath();
    context.moveTo(1800,-200);
    context.quadraticCurveTo(1000, -300, 100,100)
    context.lineTo(1800,100);
    context.lineTo(1800,-200);
    context.closePath();
    context.fillStyle = 'green';
    context.fill()
    
    context.beginPath();
    context.moveTo(-600,-300);
    context.quadraticCurveTo(600,-200,1200,300);
    context.lineTo(-600,300);
    context.lineTo(-600,-300);
    context.closePath();
    context.fillStyle = 'darkgreen';
    context.fill();
    
    context.beginPath();
    context.moveTo(1800,0);
    context.quadraticCurveTo(200,100,-400,600);
    context.lineTo(1800,600);
    context.lineTo(1800,0);
    context.closePath();
    context.fillStyle = 'mediumseagreen';
    context.fill();
    
    context.beginPath();
    context.moveTo(-600,0);
    context.quadraticCurveTo(200,100,1200,600);
    context.lineTo(-600,600);
    context.lineTo(-600,0);
    context.closePath();
    context.fillStyle = 'forestgreen';
    context.fill();
    
    
    
    context.drawImage(cloud, -200,-400);
    context.drawImage(cloud,-300,-600);
    context.drawImage(cloud,-490,-680);
    context.drawImage(cloud,-340,-800);
    context.drawImage(cloud,300,-600);
    context.drawImage(cloud,700,-800);
    context.drawImage(cloud,600,-660);
    context.drawImage(cloud,730,-500);
    
}

landscape();
drawFoodBowl();
drawHouse();

wholeBody();
Head();

function drawSun(){
    context.translate(100,-100);
    // Sun
    context.beginPath();
    context.rect(1300,-700,200,200);
    context.fillStyle = "darkorange";
    context.fill();
    
    context.beginPath();
    context.rotate(0.25*Math.PI);
    context.rect(470,-1520,200,200);
    context.fillStyle = "darkorange";
    context.fill();
    
    context.beginPath();
    context.rotate(-0.25*Math.PI);
    context.arc(1400,-600,115,0,2*Math.PI);
    context.fillStyle = "gold";
    context.fill();
    
    context.translate(-100,100);
}

drawSun();



