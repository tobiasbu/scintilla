
import SAT from './sat/SAT'
import SATResponse from './sat/SATResponse'

export default class Physics {


  constructor(game) {

    this.game = null;
    this.sat = null;
    this.response = null;

   
    this.game = game;
    this.colliadables = [];

  }

  init() {

    this.sat = new SAT();
    this.response = new SATResponse();

  }

  getColliadables() {
    return this.colliadables;
  }

  addColliderObj(obj) {
    this.colliadables.push(obj);
  }

  removeColliderObj(obj) {

    var i = this.colliadables.indexOf(obj);

    if(i != -1) {
      this.colliadables.splice(i, 1);
    }

  }

  clear() {

    this.colliadables = [];
    this.colliadables.length = 0;

  }



  get length() {return this.colliadables.length;}

}

