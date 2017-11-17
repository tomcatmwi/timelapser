import { Component, ViewContainerRef, ViewChild, EventEmitter, Output } from '@angular/core';
import {ScreenOrientation} from '@ionic-native/screen-orientation';

//  Turn on enableProdMode() in main.ts to use this component!
//  Images won't load with the --livereload parameter!

@Component({
    selector: 'photoviewer',
    templateUrl: './photoviewer.component.html',
    outputs: ['getNextImage']
})

export class PhotoViewerComponent {
    
    @ViewChild('photoviewer') photoViewer;
    
    src;
    label;
    show = false;
    imgClass = 'img-portrait';
    getNextImage = new EventEmitter;
    
    constructor(
        private _photoviewer: ViewContainerRef,
        private screenOrientation: ScreenOrientation) {
    }
    
    showPicture(src, label) {
        if (src) {
            this.src = src;
            this.label = label;
            this.show = true;
        } else
            this.show = false;
    }
    
    setImageClass() {
        if (this.screenOrientation.type.indexOf('portrait') != -1)
            this.imgClass = 'img-portrait'
        else
            this.imgClass = 'img-landscape';
    }
    
    ngAfterViewInit() {
        this.setImageClass();
        this.screenOrientation.onChange().subscribe(
           () => { 
               this.setImageClass();
           }
        );
        
        this._photoviewer.createEmbeddedView(this.photoViewer);
    }
    
    nextImage(event) {
        this.getNextImage.emit({ src: this.src, dir: event.direction });
    }
   
}