import { Component, OnInit, AfterViewInit } from '@angular/core';

// import $ from 'jquery';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})



export class AppHeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  
  ngOnInit() {
   
    
  }

  ngAfterViewInit(){
  //   $("header").affix({
  //     offset: {
  //         top:()=>{return 100}
  //     }
  // })

  // $('h1').css('color','red');

}

}
