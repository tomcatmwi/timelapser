import {Injectable} from '@angular/core';
import {NativeAudio} from '@ionic-native/native-audio';

@Injectable()
export class AudioService {

    constructor(private nativeAudio: NativeAudio) {
    }

    sounds = [
        {id: 'shutter', filename: 'assets/sound/shutter.wav'},
        {id: 'beep', filename: 'assets/sound/beep.wav'},
        {id: 'error', filename: 'assets/sound/buzzer.wav'},
    ]

    playSound(id) {
        for (let t in this.sounds)
            if (this.sounds[t].id == id)
                this.nativeAudio.preloadSimple(id, this.sounds[t].filename).then(
                    () => {
                        this.nativeAudio.play(id,
                            () => {
                                this.nativeAudio.unload(id).then(
                                    () => {},
                                    (err) => { console.log('Error unloading sound "' + id + '" from memory: ', err) }
                                )
                            });
                    },
                    (err) => {console.log('Unable to load sound "' + id + '": ', err);});
    }


}