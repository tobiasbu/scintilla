import ResourceType from "./ResourceType";


export default class Resource {

    constructor(name, type)
    {
        this.name = name || 'Resource';
        this.type = type || ResourceType.None;
    }

}