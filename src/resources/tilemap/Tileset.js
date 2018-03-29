import DataList from "../../structures/List";
import TileData from './TileData'



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

    getTile(gid) {

        if (gid < this.firstgid && gid >= this.firstgid + this.gidCount)
            return null;

        return this.data.at(gid - this.firstgid);
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

        //rows = Math.floor(rows);
        //columns = Math.floor(columns);


        this.rows = rows;
        this.collumns = columns;
        this.gidCount = rows * columns;

        let u = this.margin;
        let v = this.margin;
        let x = 0;

        this.data.clear();
        //let gid = 0;

        for (let i = 0; i < this.gidCount; i++) {
            //for (let x = 0; x < colCount; x++) {
            
               // let gid = x + y * this.rows;
                this.data.push(new TileData(
                    this, 
                    this.firstgid + i,
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