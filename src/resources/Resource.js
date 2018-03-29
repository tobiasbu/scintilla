import ResourceType from "./ResourceType";


export default class Resource {

    constructor(name, data)
    {
        //this.data = data || undefined;
        this.name = name || 'Resource';
        this.type = ResourceType.None;
    }

}