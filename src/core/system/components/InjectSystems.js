
export default function InjectSystems(scene) {
        
    scene.game = this._game;

    for (let property in SceneSystem)
    {
        
        let sys = gameSystems[SceneSystem[property]];

        if (sys !== undefined)
            scene[sys.name] = this[sys.name];
    }

    // Special injections, input and sound:

    scene['key'] = this.game.input.keyboard;
    scene['mouse'] = this.game.input.mouse;

    /*for (let property in gameSystems) {

        let sys = gameSystems[property];
        scene[sys.name] = property[sys.system];
    }*/
}