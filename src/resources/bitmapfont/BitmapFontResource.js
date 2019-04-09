import Resource from '../Resource';
import ResourceType from '../ResourceType';
import DataMap from '../../structures/Map';

export default class BitmapFontResource extends Resource {

  constructor(name, metadata, glyphs, images) {

    super(name, ResourceType.BitmapFont);

    this.metadata = metadata || null;
    /**
     * @type {DataMap}
     */
    this.glyphs = glyphs;
    /**
     * @type {ImageResource[]}
     */
    this.images = images;
    

  }

  getChar(char) {
    return this.glyphs.get(char);
  }
}