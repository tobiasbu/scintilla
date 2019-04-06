import Resource from '../Resource';
import ResourceType from '../ResourceType';

export default class BitmapFontResource extends Resource {

  constructor(name, metadata) {

    super(name, ResourceType.BitmapFont);

    this.metadata = metadata || null;
    

  }
}