import File from "../File";
import AssetTypeHandler from "./AssetTypeHandler";
import AssetsType from "../AssetsType";
import ObjectGet from "../../utils/object/ObjectGet";
import FindAudioURLPath from "./FindAudioURLPath";

export default class AudioFile extends File {

    constructor(tag, url, path, xhrSettings, context) {

        this.context = audioContext;

        var assetConfig = {
            tag: tag,
            type: AssetsType.audio,
            ext: ObjectGet.value(url, 'type', ''),
            responseType: 'arraybuffer',
            url: GetFastValue(url, 'uri', url),
            path: path,
            xhrSettings: xhrSettings
        };

        super(assetConfig);

    }

    onProcessing(processingCallback)
    {
        this.state = LoaderState.PROCESSING;

        let self = this;

        // interesting read https://github.com/WebAudio/web-audio-api/issues/1305
        this.context.decodeAudioData(this.xhrLoader.response,
            function (audioBuffer)
            {
                self.data = audioBuffer;
                self.onDone();
                processingCallback(self);
            },
            function (e)
            {
                console.error('AudioFile.onProcessing: Failed to decode audio data of the file \'' + self.tag + '\':', e.message);
                self.state = CONST.FILE_ERRORED;
                processingCallback(self);
            }
        );

    this.context = null;

    }

    static create(loader, tag, urls, config, xhrSettings) {

        var game = loader.game;
        //var audioConfig = game.config.audio;
        //var deviceAudio = game.device.audio;

        /*if ((audioConfig && audioConfig.noAudio) || (!deviceAudio.webAudio && !deviceAudio.audioData))
        {
            console.info('Skipping loading audio \'' + key + '\' since sounds are disabled.');
            return null;
        }*/

        var url = FindAudioURLPath(game, urls);

        if (!url)
        {
            console.warn('AudioFile.create: URL is not supported for audio file \'' + tag + '\'.');
            return null;
        }

        //if (deviceAudio.webAudio && !(audioConfig && audioConfig.disableWebAudio))
        //{
        return new AudioFile(key, url, loader.path, xhrSettings, game.audio.context);
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