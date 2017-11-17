import {Injectable} from '@angular/core';

@Injectable()
export class FormatterService {

    constructor() {}

    //  Generates hours, minutes, seconds and milliseconds from a number of seconds
    calculateTime(seconds) {

        if (isNaN(seconds)) return false;

        var d = 0;
        var hr = 0;
        var min = 0;
        var sec = Number(seconds);
        var ms = 0;

        ms = Math.round((sec - Math.floor(sec)) * 1000);

        if (sec >= 60) {
            min = sec / 60;
            sec = sec % 60;
        }

        if (min >= 60) {
            hr = min / 60;
            min = min % 60;
        }

        if (hr >= 24) {
            d = Math.floor(hr / 24);
            hr = hr % 24;
        }

        var strHr = String(Math.round(hr));
        var strMin = String(Math.round(min));
        var strSec = String(Math.round(sec));
        var strMs = String(ms);

        if (hr < 10) strHr = '0' + strHr;
        if (min < 10) strMin = '0' + strMin;
        if (sec < 10) strSec = '0' + strSec;
        if (ms < 10) strMs = '0' + strMs;
        if (ms < 100) strMs = '0' + strMs;

        var result = {hr: strHr, min: strMin, sec: strSec, ms: strMs};
        result['formatted'] = strHr + ':' + strMin + ':' + strSec + '.' + strMs;

        if (d > 0) {
            result['d'] = d;
            result['formatted'] = d + 'd ' + result['formatted'];
        }

        return (result);
    }

    //  Converts an UTC date string into a Date of local timezone
    UTCDatetoDate(date) {

        if (!(date instanceof Date))
            date = new Date(date);

        var newDate = new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1000);

        var offset = date.getTimezoneOffset() / 60;
        var hours = date.getHours();

        newDate.setHours(hours - offset);

        return newDate;
    }

    //  Formats a number
    formatNumber(value, thousandSeparator = ',', decimalSeparator = '.') {

        if (isNaN(value)) return false;

        var base = value > 0 ? String(Math.floor(Number(value))) : String(Math.ceil(Number(value)));

        var decimals = '';
        if (String(value).lastIndexOf('.') != -1)
            decimals = String(value).substr(String(value).lastIndexOf('.'), String(value).length);

        decimals = decimals.replace(/./, decimalSeparator);
        if (decimals.length > 3) decimals = decimals.substr(0, 3);

        var output = '';
        var counter = 0;

        for (var t = base.length - 1; t >= 0; t--) {
            counter++;
            output = base[t] + output;
            if (counter % 3 == 0 && (t > 0 && base[t - 1] != '-')) output = thousandSeparator + output;
        }

        return output + decimals;

    }

    //  Converts a base64 stream to a blob
    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);

        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);

            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {type: contentType});
    }
    
    //  Get current time as string
    getCurrentTimeAsString() {
        var date = new Date();
        var hourNow = String(date.getHours());
        if (Number(hourNow) < 10) hourNow = '0' + hourNow;
        var minuteNow = String(date.getMinutes());
        if (Number(minuteNow) < 10) minuteNow = '0' + minuteNow;
        var currentTime = hourNow + ':' + minuteNow;
        return currentTime;
    }
    
    //  Returns the current date formatted for filenames
    dateAsFilename(time=true, separator='_') {
                var now = new Date();
                var filename = String(now.getFullYear());
                var temp = String(now.getMonth()+1);
                if (temp.length == 1) temp = '0'+temp;
                filename += temp;
                temp = String(now.getDate());
                if (temp.length == 1) temp = '0'+temp;
                
                if (time) {
                    filename += temp + separator;
                    temp = String(now.getHours());
                    if (temp.length == 1) temp = '0'+temp;
                    filename += temp;
                    temp = String(now.getMinutes());
                    if (temp.length == 1) temp = '0'+temp;
                    filename += temp;
                    temp = String(now.getSeconds());
                    if (temp.length == 1) temp = '0'+temp;
                    filename += temp;
                }
                return filename;
    }

}
