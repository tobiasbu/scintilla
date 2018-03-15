

export default class SceneSystem
{
    constructor(scene)
    {
        this.scene = scene;
        this.game = null;
        this.instances = null;
        this.layers = null;
        this.create = null;
    }
}