import { Component, OnInit,Renderer2, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
// import {OwlCarousel} from 'ngx-owl-carousel';
// import { EventManager } from '@angular/platform-browser';
// import { Observable } from 'rxjs/Observable'; 
// import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { WindowResizeService } from '../services/window-resize.service'
import { OnDestroy, OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
// import $ from 'jquery';
// import 'owl.carousel';

@Injectable()

@Component({
  selector: 'app-events-carousel',
  templateUrl: './events-carousel.component.html',
  styleUrls: ['./events-carousel.component.css']
})
export class EventsCarouselComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

    // windowWidth: any;
    private resizeSubscription: Subscription;
    
    constructor(private windowResizeService: WindowResizeService, private renderer: Renderer2,private el: ElementRef) { 
        // this.windowWidth = (window.screen.width) + "px";
        //   console.log(this.windowWidth)
    }
  
    images = [1,2,3,2,3,2,3,2,3,2,3,2,3];
    // @ViewChild('owlEvents') owlEvents: OwlCarousel
    @ViewChild('test') navArrow: ElementRef;
    carouselOptions ={
        loop: true,
        nav: true,
        center: true,
        rtl:true,
        dots: true,
        lazyLoad: true,
        items: 1,
        margin: 80,
        navContainer: '#customNavEvents',
        navText :[`<i #test class="carousel-icons icon-angle-right icon-right-arrow"></i>`,
        `<i class="carousel-icons icon-angle-left icon-left-arrow"></i>`
    ],
    responsive:{
        0:{
            nav: false,
            stagePadding: 10,
            margin: 5
        },
        375:{
            nav: false,
            stagePadding: 20,
            margin: 10
        },
        600:{
            stagePadding: 70,
            margin: 20,
            nav: false,
        },
        768:{
            nav: false,
            margin: 20,
            stagePadding: 70,
        },
        800:{
            nav: true,
            margin: 20,
            stagePadding: 100,
        },
        900:{
            stagePadding: 150,
        },
        1000:{
            stagePadding: 200,
        },
        1100:{
            stagePadding: 250,
        },
        1200:{
            stagePadding: 300,
        },
        1300:{
            stagePadding: 350,
        },
        1400:{
            stagePadding: 400,
        },
        1500:{
            stagePadding: 450,
        },
        1600:{
            stagePadding: 500,
        },
        1700:{
            stagePadding: 550,
        },
        1800:{
            stagePadding: 600,
        },
        1900:{
            stagePadding: 650,
        },
        2000:{
            items:3
        },
        3000:{
            items:4
        },
        4000:{
            items:7
        }
    }
    }

    ngOnInit() {
        this.resizeSubscription = this.windowResizeService.onResize$
        .subscribe(size => {
            console.log(size.innerWidth)

        });
    }
    
    ngAfterViewInit(){
        // let eventsCarousel = this.renderer.selectRootElement('#owl-carousel-events')
        
        // console.log(this.navArrow);

        // $('body','.category-questions-answers-header').css('width','200px');
    }
    
    ngOnChanges(){
        // this.resizeSubscription = this.windowResizeService.onResize$
        // .subscribe(size => console.log(size.innerWidth));
    }

    ngOnDestroy() {
        if (this.resizeSubscription) {
            this.resizeSubscription.unsubscribe();
        }
    }

}
