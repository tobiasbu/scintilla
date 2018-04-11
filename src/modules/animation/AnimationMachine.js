import Module from "../Module";
import DataMap from '../../structures/Map';

export default class AnimationMachine extends Module {

    constructor(moduleManager) {

        super('animation','animMachine', moduleManager);

        this.animations = new DataMap();
    }

}