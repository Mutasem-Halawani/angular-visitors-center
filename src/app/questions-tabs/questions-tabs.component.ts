import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { WindowResizeService } from '../services/window-resize.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-questions-tabs',
  templateUrl: './questions-tabs.component.html',
  styleUrls: ['./questions-tabs.component.css']
})
export class QuestionsTabsComponent implements OnInit {

    // @ViewChild('test') el: ElementRef;

    constructor(
        private windowResizeService: WindowResizeService,
        private renderer: Renderer2,
        element: ElementRef
    ){ }
    
    private resizeSubscription: Subscription;
    
    fullWidth = 'col-xs-12';
    halfWidth = 'display-flex';
    
    ngOnInit() {
        this.resizeSubscription = this.windowResizeService.onResize$
        .subscribe(size => {
            
            let windowSize = size.innerWidth;
            console.log(size.innerWidth)
            if(windowSize < 767){
                this.fullWidth = 'col-xs-12';
                this.halfWidth = '';
            } else if(windowSize > 767){
                this.fullWidth = '';
                this.halfWidth = 'display-flex';
            }
        });

        
        // let eventsQarousel = this.renderer(this.el())
        
        
    }
    
    ngAfterViewInit(){
        // console.log(this.el)
    
    }
    
    
    ngOnDestroy() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

}
