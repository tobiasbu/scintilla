import DataList from "../../../structures/List";
import TileGID from './TileGID'



export default class Tileset {

    constructor(name, firstgid, tileWidth, tileHeight, margin, spacing) {

        this.name = name;
        this.firstgid = firstgid || 1;
        this.tileWidth = tileWidth || 16;
        this.tileHeight = tileHeight || 16;
        this.margin = margin || 0;
        this.spacing = spacing || 0;
        this.image = null;
        this.data = new DataList();
        this.rows = 0;
        this.collumns = 0;
        this.gidCount = 0;
    }

    getTileGID(gid) {

        if (gid === 'string') gid = parseInt(gid);

        if (gid < this.firstgid && gid >= this.firstgid + this.gidCount)
            return null;

        return this.data.at(gid - this.firstgid);
    }

    getTile(index) {

        if (index === 'string') index = parseInt(index);

        return this.data.at(index);
    }

    hasGID(gid) {
        return (
            gid >= this.firstgid &&
            gid < this.firstgid + this.gidCount
        );
    }

    updateData(imageWidth, imageHeight) {

        if (this.image !== undefined || this.image != null)
        {
            imageWidth = this.image.width;
            imageHeight = this.image.height;
        }

        //slice into tiles
        let columns = (imageHeight - this.margin * 2 + this.spacing) / (this.tileHeight + this.spacing);
        let rows = (imageWidth - this.margin * 2 + this.spacing) / (this.tileWidth + this.spacing);

        this.rows = Math.floor(rows);
        this.collumns =  Math.floor(columns);
        this.gidCount = rows * columns;

        let u = this.margin;
        let v = this.margin;
        let x = 0;

        this.data.clear();

        for (let i = 0; i < this.gidCount; i++) {

                this.data.push(new TileGID(
                    this, 
                    this.firstgid + i,
                    i,
                    u, v,
                    this.tileWidth, this.tileHeight));

            u += this.tileWidth + this.spacing;             
            x++;

            if (x >= rows)
            {
                x = 0;
                u = this.margin;
                v += this.tileHeight + this.spacing;
            }

            
        }

       
    }

    

}