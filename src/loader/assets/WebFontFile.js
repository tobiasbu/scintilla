import File from "../File";
import AssetsType from "../AssetsType";
import { AssetTypeHandler, LOADER_STATE } from "../LoaderState";
import Validate from "../../utils/Validate";


export default class WebFontFile extends File {

    constructor(tag, provider, fontFamily, timeout) {

        let assetConfig = {
            type: AssetsType.webFont,
            tag: tag,
            config : {
                provider : provider || 'google',
                families : fontFamily,
                timeout : timeout || 3000,
            }
        };

        super(assetConfig)

    }

    load(gameLoader) {
        this.loader = gameLoader;

        if (this.state === LOADER_STATE.FINISHED) {
            this.onDone();

            this.loader.next(this);
        } else if (this.loader.webFontLoader !== undefined && this.loader.webFontLoader.state === LOADER_STATE.DONE) {
            if (this.fontLoad !== undefined)
                this.fontLoad();
        }
        
        // Do nothing, wait for signal
    }

    fontLoad() {

        if (WebFont !== undefined) {

            this.state = LOADER_STATE.PROCESSING;

            let provider = this.config['provider'];

            if (!Validate.isArray(this.config.families)) {
                let families = [];
                families.push(this.config.families);
                this.config.families = families;
            }

            let WebFontProvider = {
                families : this.config.families
            }

            let WebFontConfig = {
                timeout : this.config.timeout,
                inactive : this.onError.bind(this),
                fontactive : this.onLoad.bind(this),
                classes : true
            }

            

            WebFontConfig[provider] = WebFontProvider;

            WebFont.load(WebFontConfig)
        }
    }

    onLoad(familyName, fvd) {

        this.data = {
            family : familyName,
            fvd : fvd
        }

        this.loader.next(this, true);

        
    }
}

AssetTypeHandler.register('webFont', function (tag, provider, fontFamily, timeout) {
    this.addAsset(new WebFontFile(tag, provider, fontFamily, timeout));
    return this;
});