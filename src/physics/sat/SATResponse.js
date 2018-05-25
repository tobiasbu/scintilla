
export default class SATResponse {

    constructor()
    {
        this.a = null;
        this.b = null;
        this.overlapN = new Vector2();
        this.overlapV = new Vector2();
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        this.indexShapeA = -1;
        this.indexShapeB = -1;
        this.clear();
    }

    clear()
    {
        this.aInB = true;
        this.bInA = true;
        this.overlap = Number.MAX_VALUE;
        this.indexShapeA = -1;
        this.indexShapeB = -1;
        return this;
    }
}
