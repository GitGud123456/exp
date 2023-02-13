// moving stuff

// setup canvas and context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 500;

// global V
let box_X = 400;
let box_Y = 250;
let box_X2 = 450;
let box_Y2 = 300;
let Wispressed = false;
let Sispressed = false;
let boxspeed = 10;
let box2speed = 0;
let Aispressed = false;
let Dispressed = false;
leftsidehit = false;
rightsidehit = false;
let Switch = 0;
let collision = box_X < box_X2 + 50 && box_X + 50 > box_X2 && box_Y + 50 > box_Y2 && box_Y < box_Y2 + 50

// MAIN ANIMATION LOOP
requestAnimationFrame(draw);






function draw() {
// logic

//console.log("X1", box_X, "Y1", box_Y, "X2", box_X2, "Y2", box_Y2);
   //boxspeed += 0.02;
 
 if (Wispressed) {
    box_Y -= boxspeed;
    console.log("Y+");
 }
 if (Sispressed) {
    box_Y += boxspeed;
    console.log("Y-");
 }

 if (Aispressed) {
    box_X -= boxspeed;
    console.log("X+");
 }
 if (Dispressed) {
    box_X += boxspeed;
    console.log("X-");
 }
 
  
 if (box_X < box_X2 + 50 && box_X + 50 > box_X2 && box_Y + 50 > box_Y2 && box_Y < box_Y2 + 50) {
   hit();
   }

   
  
   function hit() {
      box2speed = boxspeed * 4 ;
   if(box_X >= box_X2 && Aispressed) {
      pushleft();
      console.log("left")
   }
   if(box_X <= box_X2 && Dispressed) {
      pushright();
      console.log("right")
   }
   if(box_Y2 >= box_Y && Sispressed) {
      pushdown();
      console.log("down");
   }
   if(box_Y2 <= box_Y && Wispressed) {
      pushup();
      console.log("up");
   }
   console.log(box2speed);
   console.log("hit worked");
}
   function pushleft() {
      if(box_X - 50 <= -50) {
         box_X2 = 0
      }
      box_X2 -= boxspeed;
   
   }
   function pushright() {
      if(box_X + 50 >= 750)  {
      box_X2 = 750
     }
     box_X2 += boxspeed;

   }
   function pushdown() {
      if(box_Y + 50 >= 550) {
         box_Y2 = 0
     }
     box_Y2 += boxspeed   
   }
   function pushup() {
      if(box_Y - 50 <= -50) {
         box_Y2 = 450
     }
     box_Y2 -= boxspeed   
   }
   



 if(box_Y < -50) {
    box_Y = 500;
 }
 if(box_Y > 500) {
    box_Y = -50;
 }

 if(box_X < -50) {
    box_X = 800;
 }
 if(box_X > 800) {
    box_X = -50;
 }

 if(box_Y2 < 0) {
    box_Y2 = 450;
 }
 if(box_Y2 > 450) {
    box_Y2 = 0;
 }

 if(box_X2 < 0) {
    box_X2 = 750;
 }
 if(box_X2 > 750) {
    box_X2 = 0;
 }

// Draw 

    // grey background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // box
    ctx.fillStyle = "black"
    ctx.fillRect(box_X, box_Y, 50, 50)

    // box
    ctx.fillStyle = "black"
    ctx.fillRect(box_X2, box_Y2, 50, 50)

   requestAnimationFrame(draw);
}


// EVENT STUFF
    document.addEventListener("keydown", keydownHandler);
    document.addEventListener("keyup", keyupHandler);

    function keydownHandler(event) {
        if (event.keyCode == 87) {
            Wispressed = true;
            console.log("w");
        }

        if (event.keyCode == 83) {
            Sispressed = true;
            console.log("S");
        }

        if (event.keyCode == 65) {
            Aispressed = true;
            console.log("A");
        }

        if (event.keyCode == 68) {
            Dispressed = true;
            console.log("D");
        }
    }

    function keyupHandler(event) {
        if (event.keyCode == 87) {
        Wispressed = false;
        }
    
        if (event.keyCode == 83) {
        Sispressed = false;
        }

        if (event.keyCode == 65) {
            Aispressed = false;
            console.log("A");
        }

        if (event.keyCode == 68) {
            Dispressed = false;
            console.log("D");
        }
    }
    