
export default function InitializeSystems() {
    
 
    // register all game systems
    for (let property in gameSystems) {

        let sys = gameSystems[property];
        this[sys.name] = new sys.system(this.game, this);
    }

    // set core system to game class
    this.game.scene = this['scene'];

    // initialize systems
    for (let property in gameSystems) {

        
        var sys = this[gameSystems[property].name];
        if (sys.init === undefined) continue;

        sys.init();
    }

        
    
}