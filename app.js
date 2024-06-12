let player
let mob1;
let mob2;
let mob3;
let movingUp = true;
let targetY = 0; // heigh max
let movingRight = true;
let targetX = 700; // La position cible à atteindre

function setup() {
    createCanvas(1000, 563);
    background('#D9D9D9');
    world.gravity.y = 10;

    // platforms

    platform1 = new Sprite();
    platform1.color = 'black'
    platform1.collider = 'static'
    platform1.h = 40
    platform1.w = 120
    platform1.x = 800
    platform1.y = 300

    platform2 = new Sprite();
    platform2.color = 'black'
    platform2.collider = 'static'
    platform2.h = 40
    platform2.w = 120
    platform2.x = 300
    platform2.y = 150

    platform3 = new Sprite();
    platform3.color = 'black'
    platform3.collider = 'static'
    platform3.h = 40
    platform3.w = 120
    platform3.x = 600
    platform3.y = 200

    platform4 = new Sprite();
    platform4.color = 'black'
    platform4.collider = 'static'
    platform4.h = 40
    platform4.w = 120
    platform4.x = 600
    platform4.y = 400

    // end
    circle = new Sprite();
    circle.color = 'lightgreen';
    circle.collider = 'nones';
    circle.d = 40;
    circle.y = 50;
    circle.x = 80;
    circle.h = 60;

    end = new Sprite();
    end.color = 'black'
    end.collider = 'static'
    end.h = 40
    end.w = 120
    end.y = 100
    end.x = 80

    // mob

    mob1 = new Sprite();
	mob1.width = 50;
	mob1.height = 100;
    mob1.collider = "kinematic"
	mob1.image = '🐯';
    mob1.x = 200;
    mob1.y = 200;
    mob1.debug = true;

    mob2 = new Sprite();
	mob2.width = 50;
	mob2.height = 100;
    mob2.collider = "kinematic"
	mob2.image = '🐯';
    mob2.x = 600;
    mob2.y = 350;
    mob2.debug = true;


    // mob3 = new Sprite();
	// mob3.width = 50;
	// mob3.height = 100;
    // mob3.collider = "kinematic"
	// mob3.image = '🐯';
    // mob3.x = 300;
    // mob3.y = 350;

    // player
    player = new Sprite();
	player.width = 50;
	player.height = 50;
	player.image = '🐼';
    player.x = 50;
    player.y = 435;
    player.debug = true;




    // floor
    floor = new Sprite();
    floor.collider = 'static';
    floor.color = 'brown'
    floor.h = 200;
    floor.w = 1999;
    floor.y = 560;



    gameOver = false; // follow game state
}



function draw() { 
    clear()


    if (kb.pressing('left')) player.vel.x = -5;
    else if (kb.pressing('right')) player.vel.x = 5;
    if (kb.pressing('space')) {
        player.vel.y = 40;
    }
    if (!kb.pressing('left') && !kb.pressing('right') && !kb.pressing('space')) {
        player.vel.x = 0;
      }



// Movement sprite mob 1
    if (movingUp) {
        mob1.y -= 2; // climb speed
    if (mob1.y <= targetY) {
      movingUp = false; // Stop going up and start going down
    }
    } else {
    mob1.y += 2; // descent speed
    if (mob1.y >= 200) {
      movingUp = true; // Stop going down and start going up
    }
    }

// Movement sprite mob 2 
  if (movingRight) {
    mob2.x += 2; // right movement speed
  } else {
    mob2.x -= 2; // Left movement speed
  }

  if (mob2.x >= targetX) {
      movingRight = false; // stop going right and start going left
  }

if (mob2.x <= 500) {
    movingRight = true; // stop going left and start going right
}
}