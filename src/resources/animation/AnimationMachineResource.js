import Resource from "../Resource";
import ResourceType from "../ResourceType";
import DataMap from "../../structures/Map";

export default class AnimationMachineResource extends Resource {

    constructor(name) {

        super(name, ResourceType.AnimationMachine);
        this.states = new DataMap();

    }

    add(state, animation) {

        if (this.states.has(state)) {
            Console.warn("AnimationMachineResource.add: Could not add state. There is already a state called \'" + state + "\".");
            return this;
        }

        //let anim = this._cache.get(animationTag);
        if (animation !== undefined) {
            this.states.set(state, animation);
        } else {
            Console.warn("AnimationMachineResource.add: Could not add state with undefined animation.");
        }

        return this;
    }

    /// TODO
    /*create(state) {
        if (this.states.has(state)) {
            Console.warn("AnimationMachineResource.create: Could not create state. There is already a state called \'" + state + "\".");
            return this;
        }

        this.states.set(stateName, );
    }*/

    get(stateName) {
        return this.states.get(stateName);
    }

}