import { Component, NgZone, ChangeDetectorRef, ViewContainerRef, ViewChild, AfterViewInit, Input } from '@angular/core';

//  Turn on enableProdMode() in main.ts to use this component!

@Component({
    selector: 'dimmer',
    templateUrl: './dimmer.component.html',
})

export class DimmerComponent implements AfterViewInit {
    
    @ViewChild('dimmer') dimmer;
    
    @Input() set show(show) {
        this.tabBarElement = document.querySelector('#mainTabs-tabs1 .tabbar');

        if (show) 
            this.tabBarElement.style.display = 'none'
        else
            this.tabBarElement.style.display = 'flex';
        
        setTimeout(()=> { 
            this._show = show;
            this.ngZone.run(() => { this._ref.detectChanges(); });
        }, 1500)
    }
    
    constructor(
        private _dimmer: ViewContainerRef,
        public _ref: ChangeDetectorRef,
        public ngZone: NgZone
    ) {}
    
    tabBarElement;
    _show;

    ngAfterViewInit() {
        this._dimmer.createEmbeddedView(this.dimmer);
    }
        
   
}