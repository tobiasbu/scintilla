

export const ResourceType = {
    None : -1,
    Image : 0,
}

export default class Resource {

    constructor(data, name)
    {
        this.data = data || null;
        this.name = name;
        this.type = ResourceType.None;
    }

}