

export const ResourceType = {
    None : -1,
    Image : 0,
    Tilemap : 1,
}

export default class Resource {

    constructor(name, data)
    {
        this.data = data || null;
        this.name = name;
        this.type = ResourceType.None;
    }

}