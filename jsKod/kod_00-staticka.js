class Postavke {

  constructor() {
    if (this instanceof Postavke) {
      throw new Error("Statička klasa nema instance!");
    }
  }

  /** @type {Mike} */
  static mike = null;
  
  /** @type {Opps} */
  static opps1;
  static opps2;
  static opps3;
  static opps4;
  static opps5;

  /** @type {Projektil} */
  static projektil;

  /** @type {Finish} */
  static finish;

  /** @type {Coin} */
  static coin1;
  static coin2;
  static coin3;
  static coin4;

  
  /** @type {PowerUp} */
  static powerUp1;
  


  static random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  
}