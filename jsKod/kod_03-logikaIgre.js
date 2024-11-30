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
/// <reference path="kod_02-postavke.js"/>

/**
 * Promjena stanja likova - interakcije
 */
function update_main() {
  if(GAME.activeWorldMap.name == "map1")
    Map1();
  if(GAME.activeWorldMap.name == "map2")
    Map2();
  GAME.update();
};

function Map1(){
  //Mike
  if(SENSING.left.active){
    Postavke.mike.moveLeft();
  }

  if(SENSING.right.active){
    Postavke.mike.moveRight();
  }

  if(SENSING.up.active){
    Postavke.mike.jump(40);
  }

  //oppsi
  //1
  if (Postavke.opps1.dodir) {
    if (Postavke.opps1.x <= 17*32) {
      Postavke.opps1.moveRight();
    }
    else {
      Postavke.opps1.dodir = false;
    }
  }
  if (Postavke.opps1.dodir == false) {
    if (Postavke.opps1.x > 11*32) {
      Postavke.opps1.moveLeft();
    }
    else {
      Postavke.opps1.dodir = true;
    }
  }
  
  //2
  if (Postavke.opps2.dodir) {
    if (Postavke.opps2.x <= 12*32) {
      Postavke.opps2.moveRight();
    }
    else {
      Postavke.opps2.dodir = false;
    }
  }
  if (Postavke.opps2.dodir == false) {
    if (Postavke.opps2.x > 9*32) {
      Postavke.opps2.moveLeft();
    }
    else {
      Postavke.opps2.dodir = true;
    }
  }

  //3
  if (Postavke.opps3.dodir) {
    if (Postavke.opps3.x <= 3*32) {
      Postavke.opps3.moveRight();
    }
    else {
      Postavke.opps3.dodir = false;
    }
  }
  if (Postavke.opps3.dodir == false) {
    if (Postavke.opps3.x > 0*32) {
      Postavke.opps3.moveLeft();
    }
    else {
      Postavke.opps3.dodir = true;
    }
  }

  //4
  if (Postavke.opps4.dodir) {
    if (Postavke.opps4.x <= 30*32) {
      Postavke.opps4.moveRight();
    }
    else {
      Postavke.opps4.dodir = false;
    }
  }
  if (Postavke.opps4.dodir == false) {
    if (Postavke.opps4.x > 24*32) {
      Postavke.opps4.moveLeft();
    }
    else {
      Postavke.opps4.dodir = true;
    }
  }

  //5
  if (Postavke.opps5.dodir) {
    if (Postavke.opps5.x <= 19.5*32) {
      Postavke.opps5.moveRight();
    }
    else {
      Postavke.opps5.dodir = false;
    }
  }
  if (Postavke.opps5.dodir == false) {
    if (Postavke.opps5.x > 17.5*32) {
      Postavke.opps5.moveLeft();
    }
    else {
      Postavke.opps5.dodir = true;
    }
  }

  //TOUCHUING
  //1
  if (Postavke.mike.touching(Postavke.opps1)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //2
  
  if (Postavke.mike.touching(Postavke.opps2)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //3
  if (Postavke.mike.touching(Postavke.opps3)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  
  //4
  if (Postavke.mike.touching(Postavke.opps4)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //5
  if (Postavke.mike.touching(Postavke.opps5)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }

  
  //SHOOTING
  if(SENSING.keyS.active){
    Postavke.mike.pucaj(Postavke.projektil);
  }

  //killing
  if (Postavke.projektil.touching(Postavke.opps1)) {
    Postavke.opps1.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps2)) {
    Postavke.opps2.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps3)) {
    Postavke.opps3.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps4)) {
    Postavke.opps4.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }

  if (Postavke.projektil.touching(Postavke.opps5)) {
    Postavke.opps5.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }

  
  //coins
  if (Postavke.mike.touching(Postavke.coin1)) {
    Postavke.mike.collect(Postavke.coin1);
    Postavke.coin1.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin2)) {
    Postavke.mike.collect(Postavke.coin2);
    Postavke.coin2.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin3)) {
    Postavke.mike.collect(Postavke.coin3);
    Postavke.coin3.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin4)) {
    Postavke.mike.collect(Postavke.coin4);
    Postavke.coin4.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }

  //finish
  
  if (Postavke.mike.touching(Postavke.finish)) {
    Postavke.mike.bodovi += 100;
    GameSettings.output("score: " + Postavke.mike.bodovi);
    GameSettings.output("Presli ste level");
    btnStop_click();
    setupMap2();
    btnStart_click();
    alert("MIKE! Imate još posla. Kirkland još uvijek nije potpuno siguran!")
  }
}

function Map2(){
  if (SENSING.right.active) {
    Postavke.mike.moveRight();
  }
  if (SENSING.left.active) {
    Postavke.mike.moveLeft();
  }
  if (SENSING.up.active) {
    Postavke.mike.jump(57);
  }

  //oppsi
  //1
  if (Postavke.opps1.dodir) {
    if (Postavke.opps1.x <= 17*32) {
      Postavke.opps1.moveRight();
    }
    else {
      Postavke.opps1.dodir = false;
    }
  }
  if (Postavke.opps1.dodir == false) {
    if (Postavke.opps1.x > 8*32) {
      Postavke.opps1.moveLeft();
    }
    else {
      Postavke.opps1.dodir = true;
    }
  }
  
  //2
  if (Postavke.opps2.dodir) {
    if (Postavke.opps2.x <= 14*32) {
      Postavke.opps2.moveRight();
    }
    else {
      Postavke.opps2.dodir = false;
    }
  }
  if (Postavke.opps2.dodir == false) {
    if (Postavke.opps2.x > 11*32) {
      Postavke.opps2.moveLeft();
    }
    else {
      Postavke.opps2.dodir = true;
    }
  }

  //3
  if (Postavke.opps3.dodir) {
    if (Postavke.opps3.x <= 21*32) {
      Postavke.opps3.moveRight();
    }
    else {
      Postavke.opps3.dodir = false;
    }
  }
  if (Postavke.opps3.dodir == false) {
    if (Postavke.opps3.x > 19*32) {
      Postavke.opps3.moveLeft();
    }
    else {
      Postavke.opps3.dodir = true;
    }
  }

  //4
  if (Postavke.opps4.dodir) {
    if (Postavke.opps4.x <= 29*32) {
      Postavke.opps4.moveRight();
    }
    else {
      Postavke.opps4.dodir = false;
    }
  }
  if (Postavke.opps4.dodir == false) {
    if (Postavke.opps4.x > 27*32) {
      Postavke.opps4.moveLeft();
    }
    else {
      Postavke.opps4.dodir = true;
    }
  }

  //5
  if (Postavke.opps5.dodir) {
    if (Postavke.opps5.x <= 29*32) {
      Postavke.opps5.moveRight();
    }
    else {
      Postavke.opps5.dodir = false;
    }
  }
  if (Postavke.opps5.dodir == false) {
    if (Postavke.opps5.x > 23*32) {
      Postavke.opps5.moveLeft();
    }
    else {
      Postavke.opps5.dodir = true;
    }
  }

  //TOUCHUING
  //1
  if (Postavke.mike.touching(Postavke.opps1)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //2
  
  if (Postavke.mike.touching(Postavke.opps2)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //3
  if (Postavke.mike.touching(Postavke.opps3)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  
  //4
  if (Postavke.mike.touching(Postavke.opps4)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }
  //5
  if (Postavke.mike.touching(Postavke.opps5)) {
    Postavke.mike.zivoti -= 1;
    GameSettings.output("Life: " + Postavke.mike.zivoti);
    Postavke.mike.zivot();
    Postavke.mike.start();
  }



  //SHOOTING
  if(SENSING.keyS.active){
    Postavke.mike.pucaj(Postavke.projektil);
  }
  

  //killing
  if (Postavke.projektil.touching(Postavke.opps1)) {
    Postavke.opps1.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps2)) {
    Postavke.opps2.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps3)) {
    Postavke.opps3.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);

  }
  if (Postavke.projektil.touching(Postavke.opps4)) {
    Postavke.opps4.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }

  if (Postavke.projektil.touching(Postavke.opps5)) {
    Postavke.opps5.visible = false;
    Postavke.projektil.stop();
    Postavke.mike.bodovi += 10;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }


  //coins
  if (Postavke.mike.touching(Postavke.coin1)) {
    Postavke.mike.collect(Postavke.coin1);
    Postavke.coin1.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin2)) {
    Postavke.mike.collect(Postavke.coin2);
    Postavke.coin2.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin3)) {
    Postavke.mike.collect(Postavke.coin3);
    Postavke.coin3.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }
  if (Postavke.mike.touching(Postavke.coin4)) {
    Postavke.mike.collect(Postavke.coin4);
    Postavke.coin4.visible = false;
    GameSettings.output("score: " + Postavke.mike.bodovi);
  }

  //finish
  let gameFinished = false;
  if (Postavke.mike.touching(Postavke.finish) && !gameFinished) {
    gameFinished = true;
    Postavke.mike.bodovi += 100;
    GameSettings.output("score: " + Postavke.mike.bodovi);
    GameSettings.output("Presli ste igricu!");
    btnStop_click();
    //setupMap2();
    
    alert("Bravo! Ninja ratnik Mike O'Hearn obeshrabrio je i uspješno uništio terorističku grupu Natty team! Bombe su deaktivirane i Kirkland je siguran!!!!");
  }

} 