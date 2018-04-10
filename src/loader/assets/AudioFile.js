import File from "../File";
import AssetTypeHandler from "./AssetTypeHandler";
import AssetsType from "../AssetsType";
import ObjectGet from "../../utils/object/ObjectGet";
import FindAudioURLPath from "./FindAudioURLPath";
import AddAsset from "../components/AddAsset";
import LoaderState from "../LoaderState";
import Environment from "../../system/PlatformEnvironment";

export default class AudioFile extends File {

    constructor(tag, url, path, xhrSettings, context) {

        

        let assetConfig = {
            tag: tag,
            type: AssetsType.audio,
            ext: ObjectGet.value(url, 'type', ''),
            responseType: 'arraybuffer',
            url: ObjectGet.value(url, 'uri', url),
            path: path,
            xhrSettings: xhrSettings
        };

        super(assetConfig);

        this.context = context;

    }

    onProcessing(processingCallback)
    {
        this.state = LoaderState.PROCESSING;

        let self = this;

        // interesting read https://github.com/WebAudio/web-audio-api/issues/1305
        this.context.decodeAudioData(this.xhrRequest.response,
            function (audioBuffer)
            {
                self.data = audioBuffer;
                self.onDone();
                processingCallback(self);
            },
            function (e)
            {
                console.error('AudioFile.onProcessing: Failed to decode audio data of the file \'' + self.tag + '\':', e.message);
                self.state = LoaderState.ERROR;
                processingCallback(self);
            }
        );

    this.context = null;

    }

    static create(loader, tag, urls, config, xhrSettings) {



        /*if ((audioConfig && audioConfig.noAudio))
        {
            console.info('Skipping loading audio \'' + key + '\' since sounds are disabled.');
            return null;
        }*/

        if (!Environment.supportWebAudio && !Environment.supportAudio) {
            console.warn('AudioFile.create: WebAudio is not supported.');
            return null;
        }

        let url = FindAudioURLPath(urls);

        if (!url) {
            console.warn('AudioFile.create: URL is not supported for audio file \'' + tag + '\'.');
            return null;
        }

        //if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio))
        //{
        return new AudioFile(tag, url, loader.path, xhrSettings,  game.audio._system.context);
        //}
        /*else
        {
            return new HTML5AudioFile(key, url, loader.path, config, game.sound.locked);
        }*/

    }

}

AssetTypeHandler.register('audio', function (tag, url, path, xhrSettings)
{

    let audio = AudioFile.create(this, tag, url, config, xhrSettings);

    if (audio)
    {
        AddAsset.call(this, audio);
    }

    return this;

});

module.exports = AudioFile;