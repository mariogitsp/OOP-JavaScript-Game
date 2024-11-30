//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion

// ovdje pišete svoje klase


class Mike extends Sprite{
    constructor(x ,y, layer){
        super(x, y, 30, 30);
        this.frame_sets = {
            "up": [1],
            "walk-up": [1],
            "right": [1],
            "walk-right": [2, 3, 4, 5, 6, 7, 8],
            "down": [1],
            "walk-down": [1],
            "left": [10],
            "walk-left": [11, 12, 13, 14, 15, 16, 17]
        };
        this.layer = layer;
        this.visible = true;
        this.direction = 90;
        this.bodovi = 0;
        this.zivoti = 5;
        this.direction = 90;
        this.milestoneReached = false;
    }
    moveRight() {
        this.direction = 90;
        this.velocity_x += 1.0;
    }
    moveLeft() {
        this.direction = 270;
        this.velocity_x -= 1.0;
    }
    
    updatePosition() {
        super.updatePosition(3.00, 0.80);

        if (this.x >= 32*32-this.width) {
          this.x = 0; 
        } else if (this.x < 0) {
            this.x = 32*32 - this.width; 
        }

        if (this.y >= 18 * 32) {
          this.start();
          this.zivoti--;
          this.zivot();
        }

        this.checkScoreMilestones();
        
    }
    
    checkScoreMilestones(){
      if(this.bodovi >= 75 && !this.milestoneReached)
        {
          this.milestoneReached = true;
          this.zivoti++;
        }
    }
    start() {
        this.x = 1*32;
        this.y = 11*32;
    }
    zivot() {
        if (this.zivoti <= 0) {
    
          alert("Life:" + this.zivoti + " Izgubili ste!");
          btnGame.dispatch(gameoverEvent);
        }
    }

    collect(c) {
      this.bodovi += c.value;
      c.start();
      console.log(this.bodovi);
    }

    pucaj(p) {
      if (this.direction == 90) {
        
        p.put = 0;
        p.x = this.x;
        p.y = this.y;
        p.visible = true;
        p.move = true;
        
        
        
      }
      else if (this.direction == 270) {
  
        p.put = 0;
        p.x = this.x;
        p.y = this.y;
        p.visible = true;
        p.moveL = true;
      }
    }
}



class Opps extends Sprite {
    constructor(x, y, layer) {
      super(x, y, 32, 32);
      this.frame_sets = {
        "up": [1],
        "walk-up": [1],
        "right": [1],
        "walk-right": [1, 2, 3, 4, 5, 6, 7, 8, 9],
        "down": [1],
        "walk-down": [1],
        "left": [11],
        "walk-left": [11, 12, 13, 14, 15, 16, 17, 18, 19]
      };
      this.layer = layer;
      this.visible = true;
      this.zivoti = 1;
  
      this.pozicije = [[x, y]];
      this.t = 0;
      this.dodir = true;
      this.brojacUdaraca=0;
    }
    
    postavi() {
      let poz = this.pozicije[this.t];
      this.x = poz[0] * 32;
      this.y = poz[1] * 32;
  
      this.t++;
      if (this.t >= this.pozicije.length) {
        this.t = 0;
      }
      this.visible = true;
    }
    moveRight() {
      this.direction = 90;
      this.velocity_x += 1.0;
    }
    moveLeft() {
      this.direction = 270;
      this.velocity_x -= 1.0;
    }
    jump(h = 60) {
      if (!this.jumping) {
        this.jumping = true;
        this.velocity_y -= h;
      }
    }
    start() {
      this.x = 0;
      this.y = 0;
    }
}  

class Collectable extends Item {
  constructor(layer) {
    super(layer);
    this.visible = true;
  }
  updatePosition() {

  }
  getType() {
    return this.constructor.name;
  }
}

class Coin extends Collectable {
  constructor(layer) {
    super(layer);
    this.value = 25;

  }
  start(a, b) {
    this.x = a;
    this.y = b;
  }
}

class Finish extends Collectable{
  constructor(layer){
    super(layer);
    this.visible = false;
  }
  start(a, b){
    this.visible = true;
    this.x = a;
    this.y = b;
  }
}

class Projektil extends Item{
  constructor(layer){
    super(layer);

    this.visible = false;
    this.put = 0;
    this.move = true;
    this.width = 20;
    this.height = 15;
    this.broji = 0;

    this.collidedPlatform = "";
  }
  get collidedPlatform(){
    return this._collidedPlatform;
  }
  set collidedPlatform(v){
    if( v != "")
      this.stop();
    this._collidedPlatform = "";
  }

  start(a, b) {
    this.x = a;
    this.y = b;
  }

  get put() {
    return this._put;
  }

  set put(v) {
    if (v >= 150) {
      this._put = 0;
      this.move = false;
      this.moveL = false;
      this.visible = false;
    }
    else {
      this._put = v;
    }
  }
  updatePosition() {

    if (this.move) {
      this.x += 10;
      this.put += 10;
    }
    if (this.moveL) {
      this.x -= 10;
      this.put += 10;
    }
  }

  stop() {
    this.visible = false;
    this.move = false;
    this.broji++;
  }
}
