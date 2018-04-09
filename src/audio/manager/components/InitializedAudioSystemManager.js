import Environment from '../../system/PlatformEnvironment';
import AudioManager from '../AudioManager';
import AddWebAudioSource from './webaudio/AddWebAudioSource';
import CreateWebAudioContext from './webaudio/CreateWebAudioContext';
import WebAudioSystem from './webaudio/WebAudioSystem';

export default function InitializedAudioSystemManager(game) {

    let audioManager = new AudioManager(game);

    let webAudioSupported = Environment.supportAudio && Environment.supportWebAudio;

    if (webAudioSupported) {

        audioManager._system = new WebAudioSystem(audioManager);
        audioManager.add = AddWebAudioSource.bind(audioManager);
        
    }

    


    return audioManager;

}