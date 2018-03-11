
export default class SATResponse {

    constructor()
    {
        this.a = null;
        this.b = null;
        this.overlapN = new scintilla.Vector();
        this.overlapV = new scintilla.Vector();
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
