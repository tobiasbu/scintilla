import DataMap from "../structures/Map";

export default class Cache {

    constructor(wrapperFunction) {
        this.resources = new DataMap();
        this.adderWrapper = wrapperFunction || undefined;
    }

    add(tag, asset) {

        let resource = asset;

        if (this.adderWrapper !== undefined) {
            resource = this.adderWrapper(tag, asset);
            if (resource === null)
                return null;
        }

        this.resources.insert(tag, resource);

        return resource;
    }

    has(tag) {
        return this.resources.has(tag);
    }

    get(tag) {
        return this.resources.get(tag);
    }

    erase(tag) {
        let res = this.resources.erase(tag);
        res = null;
        return this;
    }

    clear() {
        this.resources.clear();
    }

    destroy() {
        this.resources.clear();
        this.resources = null;
    }

}