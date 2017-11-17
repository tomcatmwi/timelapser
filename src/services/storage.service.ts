import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    storage = {};

    setValue(name, value) {
        if (value === null) return false;
        this.storage[name] = value;
        return true;
    }

    getValue(name) {
        if (typeof this.storage[name] == 'undefined') return null
        return this.storage[name];
    }
}