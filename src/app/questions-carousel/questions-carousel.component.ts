import { DataService } from './../services/data.service';
import { Question } from './../models/questions';

import { CarouselDirective } from '../directives/carousel.directive';

import {
    Component,
    Directive,
    OnInit,
    AfterViewInit,
    AfterContentInit,
    ViewChild,
    Renderer2,
    ElementRef,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// import $ from 'jquery';
// import {OwlCarousel} from 'ngx-owl-carousel';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-questions-carousel',
  templateUrl: './questions-carousel.component.html',
  styleUrls: ['./questions-carousel.component.css']
})

export class QuestionsCarouselComponent implements OnInit, AfterViewInit {

    constructor(
        private el: ElementRef,
    ) {}

    arrowState = 'answer-opened';
    borderHighlight;
    answerToggle = 'hide';
    // marginOffset = 650;
    activeItem = 0;
    
    selectedIndex = 0;
    actualIndex = 0;

    photo:any;

    ngOnInit() {
    }

    questions = [
        {
            "title":"גמלאים",
            "img":"../../assets/img/גמלאים copy 15.png",
            "FAQs":[
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme1"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme2"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme3"
                }
            ]
        },
        {
            "title":"סטודנטים",
            "img":"../../assets/img/גמלאים copy 15.png",
            "FAQs":[
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme1"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme2"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme3"
                }
            ]
        },
        {
            "title":"חיילים",
            "img":"../../assets/img/חיילים copy 12.png",
            "FAQs":[
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme1"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme2"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme3"
                }
            ]
        },
        // {
        //     "title":"תלמידים",
        //     "img":"../../assets/img/תלמידים copy 12.png",
        //     "FAQs":[
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme1"
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme2"
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme3"
        //         }
        //     ]
        // },
        // {
        //     "title":"מורים",
        //     "img":"../../assets/img/מורים copy1 6 copy 7.png",
        //     "FAQs":[
        //         {
        //             "question":"קיימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. ל כפתור הפעמוןימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. ל כפתור הפעמון.",
        //             "answer":"קיימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. למגיעים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתון (יש ללחוץ על כפתור הפעמון)."
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlemloremloremloremorem",
        //             "answer":"meme2"
        //         },
        //         {
        //             "question":"עים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתו",
        //             "answer":"עים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתו"
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme3"
        //         }
        //     ]
        // },
        // {
        //     "title":"מורים",
        //     "img":"../../assets/img/גמלאים copy 15.png",
        //     "FAQs":[
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme1"
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme2"
        //         },
        //         {
        //             "question":"loremloremloremloremloremloremloremlorem",
        //             "answer":"meme3"
        //         }
        //     ]
        // }
    ]
    
 
  
    

    toggleAnswer($event){


        console.log($event.path);
        if( this.arrowState === 'answer-opened'){
            this.arrowState = 'answer-closed';
            this.answerToggle = 'show'
        }else if ( this.arrowState === 'answer-closed'){
            this.arrowState = 'answer-opened';
            this.answerToggle = 'hide'
        }
        // console.log(this.arrowState);
        // console.log('Question clicked');
    }

    prev(){
        console.log('prev')
    }

    next(){
        console.log('next')
    }

    slideSelected(e){
        console.log(e);
    }
    
    ngAfterViewInit(){

    }

}
