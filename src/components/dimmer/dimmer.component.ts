import { Component, ViewContainerRef, ViewChild, AfterViewInit, Input } from '@angular/core';

//  Turn on enableProdMode() in main.ts to use this component!

@Component({
    selector: 'dimmer',
    templateUrl: './dimmer.component.html',
})

export class DimmerComponent implements AfterViewInit {
    
    @ViewChild('dimmer') dimmer;
    
    @Input() set show(show) {
        this._show = show;
        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');

        if (show)
            this.tabBarElement.style.display = 'none'
        else
            this.tabBarElement.style.display = 'flex';
            
//        this.dimmer.nativeElement.className = '';
//        this.dimmer.nativeElement.className = 'dimmer';
    }
    
    constructor(
        private _dimmer: ViewContainerRef
    ) {}
    
    tabBarElement;
    _show;

    ngAfterViewInit() {
        this._dimmer.createEmbeddedView(this.dimmer);
    }
        
   
}