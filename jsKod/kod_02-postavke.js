//#region okvir
/// <reference path="../otter/lib-00-GameSettings.js"/>
/// <reference path="../otter/lib-01-tiled.js"/>
/// <reference path="../otter/lib-02-sensing.js"/>
/// <reference path="../otter/lib-03-display.js"/>
/// <reference path="../otter/lib-04-engine.js"/>
/// <reference path="../otter/lib-05-game.js"/>
/// <reference path="../otter/lib-06-main.js"/>
//#endregion
/// <reference path="kod_01-likovi.js"/>

// što će se pokrenuti kad se klikne button Setup:
let btnSetupGame = document.getElementById("btnSetupGame");
btnSetupGame.addEventListener("click", setup);

function setup() {

  GAME.clearSprites();

  let odabrana = GAME.activeWorldMap.name;
  GameSettings.output(odabrana);

  switch (odabrana) {
    case "v10":
      setupVjezbe10();
      break;
    case "map1":
      setupMap1();
      break;
    case "map2":
      setupMap2();
    default:
      throw "Ne postoji setup za " + GAME.activeWorldMap.name;
      break;
  }

  render_main();
}

/* LEVELS */
//1

function setupMap1(){
  GAME.clearSprites();
  GAME.activeWorldMap.setCollisions("Ground");

  let m = new Mike(1*32, 11*32, GAME.getSpriteLayer("Mike"))
  GAME.addSprite(m);
  Postavke.mike = m;

  //oppsi
  let o1 = new Opps(13, 11, GAME.getSpriteLayer("Opps1"));
  GAME.addSprite(o1);
  Postavke.opps1 = o1;
  Postavke.opps1.postavi();

  let o2 = new Opps(9, 5, GAME.getSpriteLayer("Opps2"));
  GAME.addSprite(o2);
  Postavke.opps2 = o2;
  Postavke.opps2.postavi();

  let o3 = new Opps(0, 3, GAME.getSpriteLayer("Opps3"));
  GAME.addSprite(o3);
  Postavke.opps3 = o3;
  Postavke.opps3.postavi();
  
  let o4 = new Opps(23, 11, GAME.getSpriteLayer("Opps4"));
  GAME.addSprite(o4);
  Postavke.opps4 = o4;
  Postavke.opps4.postavi();

  let o5 = new Opps(18, 2, GAME.getSpriteLayer("Opps5"));
  GAME.addSprite(o5);
  Postavke.opps5 = o5;
  Postavke.opps5.postavi();

  //projektil
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("blue"));
  GAME.addSprite(Postavke.projektil);

  //finish
  Postavke.finish = new Item(GAME.getSpriteLayer("finish"));
  Postavke.finish.visible = true;
  GAME.addSprite(Postavke.finish);

  //coins
  Postavke.coin1 = new Coin(GAME.getSpriteLayer("coin1"));
  GAME.addSprite(Postavke.coin1);

  Postavke.coin2 = new Coin(GAME.getSpriteLayer("coin2"));
  GAME.addSprite(Postavke.coin2);

  Postavke.coin3 = new Coin(GAME.getSpriteLayer("coin3"));
  GAME.addSprite(Postavke.coin3);

  Postavke.coin4 = new Coin(GAME.getSpriteLayer("coin4"));
  GAME.addSprite(Postavke.coin4);

  
}

function setupMap2(){
  GAME.clearSprites();
  GAME.setActiveWorldMap("map2");
  GAME.activeWorldMap.setCollisions("Ground");

  let m = new Mike(1*32, 11*32, GAME.getSpriteLayer("Mike"))
  GAME.addSprite(m);
  Postavke.mike = m;

  //oppsi
  let o1 = new Opps(12, 7, GAME.getSpriteLayer("Opps1"));
  GAME.addSprite(o1);
  Postavke.opps1 = o1;
  Postavke.opps1.postavi();

  let o2 = new Opps(12, 9, GAME.getSpriteLayer("Opps2"));
  GAME.addSprite(o2);
  Postavke.opps2 = o2;
  Postavke.opps2.postavi();

  let o3 = new Opps(20, 10, GAME.getSpriteLayer("Opps3"));
  GAME.addSprite(o3);
  Postavke.opps3 = o3;
  Postavke.opps3.postavi();
  
  let o4 = new Opps(27, 17, GAME.getSpriteLayer("Opps4"));
  GAME.addSprite(o4);
  Postavke.opps4 = o4;
  Postavke.opps4.postavi();

  let o5 = new Opps(25, 2, GAME.getSpriteLayer("Opps5"));
  GAME.addSprite(o5);
  Postavke.opps5 = o5;
  Postavke.opps5.postavi();


  //projektil
  Postavke.projektil = new Projektil(GAME.getSpriteLayer("blue"));
  GAME.addSprite(Postavke.projektil);

  //finish
  Postavke.finish = new Item(GAME.getSpriteLayer("finish"));
  Postavke.finish.visible = true;
  GAME.addSprite(Postavke.finish);

  //coins
  Postavke.coin1 = new Coin(GAME.getSpriteLayer("coin1"));
  GAME.addSprite(Postavke.coin1);

  Postavke.coin2 = new Coin(GAME.getSpriteLayer("coin2"));
  GAME.addSprite(Postavke.coin2);

  Postavke.coin3 = new Coin(GAME.getSpriteLayer("coin3"));
  GAME.addSprite(Postavke.coin3);

  Postavke.coin4 = new Coin(GAME.getSpriteLayer("coin4"));
  GAME.addSprite(Postavke.coin4);
}