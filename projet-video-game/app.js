let player

function setup() {
    createCanvas(1000, 563);
    background('#D9D9D9');
    world.gravity.y = 10;

    // platformes

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

    // arrivée
    cercle = new Sprite();
    cercle.color = 'lightgreen';
    cercle.collider = 'nones';
    cercle.d = 40;
    cercle.y = 50;
    cercle.x = 80;
    cercle.h = 60;

    arrive = new Sprite();
    arrive.color = 'black'
    arrive.collider = 'static'
    arrive.h = 40
    arrive.w = 120
    arrive.y = 100
    arrive.x = 80

    // mob

    let mob1 = new Sprite();
	mob1.width = 50;
	mob1.height = 100;
    mob1.collider = "kinematic"
	mob1.image = '🐯';
    mob1.x = 300;
    mob1.y = 350;

    let mob2 = new Sprite();
	mob2.width = 50;
	mob2.height = 100;
    mob2.collider = "kinematic"
	mob2.image = '🐯';
    mob2.x = 300;
    mob2.y = 350;


    let mob3 = new Sprite();
	mob3.width = 50;
	mob3.height = 100;
    mob3.collider = "kinematic"
	mob3.image = '🐯';
    mob3.x = 300;
    mob3.y = 350;

    // // perso
    player = new Sprite();
	player.width = 50;
	player.height = 50;
	player.image = '🐼';
    player.x = 50;
    player.y = 435;




    // sol
    sol = new Sprite();
    sol.collider = 'static';
    sol.color = 'brown'
    sol.h = 200;
    sol.w = 1999;
    sol.y = 560;
}



function draw() { 
    clear()
    if (kb.pressing('left')) player.vel.x = -5;
    else if (kb.pressing('right')) player.vel.x = 5;
    else if (kb.pressing(' ')) player.vel.y = 40;
    else player.vel.x = 0;
}