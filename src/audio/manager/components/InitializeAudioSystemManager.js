import Environment from '../../../system/PlatformEnvironment';
import AudioManager from '../AudioManager';
import AddWebAudioSource from './webaudio/AddWebAudioSource';
import CreateWebAudioContext from './webaudio/CreateWebAudioContext';
import WebAudioSystem from './webaudio/WebAudioSystem';

export default function InitializeAudioSystemManager(game) {

    let audioManager = new AudioManager(game);

    if (!game.config.audio.noAudio) {

        let webAudioSupported = Environment.supportAudio && Environment.supportWebAudio;

        if (webAudioSupported && game.config.audio.webAudio) {

            let system = new WebAudioSystem(audioManager);
            CreateWebAudioContext(system);

            audioManager._system = system;
            audioManager.add = AddWebAudioSource.bind(audioManager);
            
        }
    }

    


    return audioManager;

}