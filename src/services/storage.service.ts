import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    storage = {
        
        dimScreen: false,
        cameraActive: false,
        hideTabs: false,
        fileNamingConvention: { label: 'Timestamp', value: '0' },
        uploadGoogle: false,
        
        fileNamingConventions: [
            { type: 'radio', label: 'Timestamp', value: '0' },
            { type: 'radio', label: 'Number', value: '1' }
        ],
        
        cameraSettings: {
                            focus: { value: 'auto', label: 'Auto' },
                            camera: { value: 'rear', label: 'Rear' },
                            effect: { value: 'none', label: 'None' },
                            flash: { value: 'off', label: 'None' },
                            resolution: { value: { width: 1024, height: 768 }, label: '1024×768' },
                            quality: 85
        },

        cameraOptions: {
                        focus:      [
                                        {type: 'radio', label: 'Fixed', value: 'fixed'},
                                        {type: 'radio', label: 'Automatic', value: 'auto'},
                                        {type: 'radio', label: 'Infinity', value: 'infinity'},
                                        {type: 'radio', label: 'Macro', value: 'macro'}
                                    ],
                                    
                        camera:     [
                                        {type: 'radio', label: 'Front', value: 'front'},
                                        {type: 'radio', label: 'Rear', value: 'rear'},
                                    ],
                                    
                        effect:     [
                                        {type: 'radio', label: 'None', value: 'none'},
                                        {type: 'radio', label: 'Aqua', value: 'aqua'},
                                        {type: 'radio', label: 'Blackboard', value: 'blackboard'},
                                        {type: 'radio', label: 'Mono', value: 'mono'},
                                        {type: 'radio', label: 'Negative', value: 'negative'},
                                        {type: 'radio', label: 'Posterize', value: 'posterize'},
                                        {type: 'radio', label: 'Sepia', value: 'sepia'},
                                        {type: 'radio', label: 'Solarize', value: 'solarize'},
                                        {type: 'radio', label: 'Whiteboard', value: 'whiteboard'},
                                    ],
                                    
                        flash:      [
                                        {type: 'radio', label: 'Off', value: 'off'},
                                        {type: 'radio', label: 'On', value: 'on'},
                                        {type: 'radio', label: 'Auto', value: 'auto'},
                                        {type: 'radio', label: 'Torch', value: 'torch'}
                                    ],
                                    
                        resolution: [
                                        {type: 'radio', label: '1024&times768', value: '1024;768'},
                                        {type: 'radio', label: '2048&times1024', value: '1024;768'}
                                    ]
        }
    
    }

    setValue(name, value) {
        if (value === null) return false;
        this.storage[name] = value;
        return true;
    }

    getValue(name) {
        if (typeof this.storage[name] == 'undefined') return null
        return this.storage[name];
    }
    
    fixCameraSettings(id, values) {
            for(var t in this.storage.cameraOptions[id]) {
                var found = false;
                values.forEach(value => {
                    if (this.storage.cameraOptions[id][t]['value'] == value) found = true;
                })
                if (!found)
                    this.storage.cameraOptions[id].splice(t, 1);
            }
    }
    
}