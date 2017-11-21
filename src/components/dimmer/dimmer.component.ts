import { Component, ViewContainerRef, ViewChild, AfterViewInit, Input, NgZone } from '@angular/core';

//  Turn on enableProdMode() in main.ts to use this component!

@Component({
    selector: 'dimmer',
    templateUrl: './dimmer.component.html',
})

export class DimmerComponent implements AfterViewInit {
    
    @ViewChild('dimmer') dimmer;
    
    @Input() set show(show) {
        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');
        console.log(this.tabBarElement);

        if (show) 
            this.tabBarElement.style.display = 'none'
        else
            this.tabBarElement.style.display = 'flex';
        
        setTimeout(()=> { this._show = show }, 1500)
    }
    
    constructor(
        private _dimmer: ViewContainerRef,
        private zone: NgZone
    ) {}
    
    tabBarElement;
    _show;

    ngAfterViewInit() {
        this._dimmer.createEmbeddedView(this.dimmer);
    }
        
   
}