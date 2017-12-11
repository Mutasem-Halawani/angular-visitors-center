import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
    
    items = [1,2,3,2,3,2,3,2,3,2,3,2,3];
    arrowState = 'answer-opened';
    answerToggle = 'hide';


    constructor(private apiService: ApiService) { }

    ngOnInit() {
    }

    toggleAnswer($event){
        if( this.arrowState === 'answer-opened'){
            this.arrowState = 'answer-closed';
            this.answerToggle = 'show'
        }else if ( this.arrowState === 'answer-closed'){
            this.arrowState = 'answer-opened';
            this.answerToggle = 'hide'
        }
    }

    next(){
        console.log('next');
    }
    
    prev(){
        console.log('prev');
        
    }

}
