import { Pipe, PipeTransform } from '@angular/core';
import { FormatterService } from '../services/formatter.service';
import { DomSanitizer } from '@angular/platform-browser';

//  --------------------------------------------------------------------------------------
//  Displays a long number nicely formatted by decimal groups

@Pipe({ name: 'formatNumber' })
export class FormatNumberPipe implements PipeTransform {
    
  transform(value: any, thousandSeparator = ',', decimalSeparator = '.'): any {
      var _formatterService = new FormatterService();
      return _formatterService.formatNumber(value, thousandSeparator, decimalSeparator);
  }
}

//  --------------------------------------------------------------------------------------
//  Pipe to display seconds formatted as time

@Pipe({ name: 'formatSeconds' })
export class FormatSecondsPipe implements PipeTransform {
    
  transform(value: any): any {
      var _formatterService = new FormatterService();
      var time = _formatterService.calculateTime(value);
      if (!time) return ('NaN');
      if (time['d'])
        return (time['d'] + 'd '+time.hr+':'+time.min+':'+time.sec+'.'+time.ms)
      else 
        return (time.hr+':'+time.min+':'+time.sec+'.'+time.ms);
  }
}

//  --------------------------------------------------------------------------------------
//  Pipe to chop off too long strings

@Pipe({ name: 'chopString' })
export class ChopStringPipe implements PipeTransform {
  transform(value: any, length: Number): any {
      if (value.length <= length) return value;
      return value.substr(0, length)+'&hellip;';
  }
}

//  --------------------------------------------------------------------------------------
//  Pipe to format a number into filesize string (ie. 12,343.44 MB)

@Pipe({ name: 'filesize' })
export class FilesizePipe implements PipeTransform {
    
  transform(value: string, ...args) {
    if (isNaN(Number(value))) return '?';
    
    var measures = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB'];
    var temp = 0;
    var val = Number(value);
    
    while(val > temp * 1024) {
        val = val / 1024;
        temp++;
    }
    
    var _formatterService = new FormatterService();
    return _formatterService.formatNumber(val) + ' ' + measures[temp];
  }
}

//  --------------------------------------------------------------------------------------
//  Bypasses the sanitizer to allow cdvPhotoLibrary links to be used

@Pipe({
  name: 'cdvPhotoLibrary',
})
export class CdvPhotoLibraryPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string) {
    if (url != null) {
      return url.startsWith('cdvphotolibrary://') ? this.sanitizer.bypassSecurityTrustUrl(url) : url;
    }
  }
}