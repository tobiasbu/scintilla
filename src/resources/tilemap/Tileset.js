import DataList from "../../structures/List";
import TileGID from './TileGID'



export default class Tileset {

    constructor(name, firstgid, tileWidth, tileHeight, margin, spacing) {

        this.name = name;
        this.firstgid = firstgid;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.margin = margin;
        this.spacing = spacing;
        this.image = null;
        this.tilesGID = new DataList();
        this.rows = 0;
        this.collumns = 0;
        this.count = 0;
    }

    getTile(gid) {

        if (gid < this.firstgid && tileIndex >= this.firstgid + this.count)
            return null;

        return this.tilesGID.at(gid);
    } 

    hasGID(gid) {
        return (
            gid >= this.firstgid &&
            gid < this.firstgid + this.count
        );
    }

    updateData(imageWidth, imageHeight) {

        if (this.image != null)
        {
            imageWidth = this.image.width;
            imageHeight = this.image.height;
        }

        let rowCount = (imageHeight - this.margin * 2 + this.spacing) / (this.tileHeight + this.spacing);
        let colCount = (imageWidth - this.margin * 2 + this.spacing) / (this.tileWidth + this.spacing);

        rowCount = Math.floor(rowCount);
        colCount = Math.floor(colCount);

        this.count = rowCount * colCount;

        let u = this.margin;
        let v = this.margin;

        this.tilesGID.clear();
        //let gid = 0;

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {

                let gid = x + y * this.rows;
                this.tilesGID.push(new TileGID(
                    this.firstgid + gid,
                    this.tileset, 
                    u, v,
                    u + this.tileWidth, v + this.tileHeight));
                u += this.tileWidth + this.spacing;
              
            }

            u = this.tileMargin;
            v += this.tileHeight + this.spacing;
        }
    }

}