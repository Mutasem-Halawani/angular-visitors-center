import { Question } from './../models/questions';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// const httpOptions = new HttpHeaders({
//   'Content-Type': 'applicaton/json'
// });

@Injectable()
export class DataService {

  private questionsUrl = 'api/questions';

  constructor(
    // private http: HttpClient
  ) { }

  data = {
    "events": [
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/Layer6.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        },
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/IMG_0009.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        },
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/IMG_0004.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        },
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/Layer 13.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        },
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/Layer 11.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        },
        {
            "title": "קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט",
            "img": "./assets/img/Layer6.png",
            "day": "יום חמישי",
            "date": "12.12.2017",
            "time": "16:00"
        }
    ],
    "questions": [
        {
            "title":"גמלאים",
            "img":"./assets/img/גמלאים copy 15.png",
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
            "img":"./assets/img/גמלאים copy 15.png",
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
            "img":"./assets/img/חיילים copy 12.png",
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
            "title":"תלמידים",
            "img":"./assets/img/תלמידים copy 12.png",
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
            "title":"מורים",
            "img":"./assets/img/מורים copy1 6 copy 7.png",
            "FAQs":[
                {
                    "question":"קיימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. ל כפתור הפעמוןימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. ל כפתור הפעמון.",
                    "answer":"קיימת גישה לבעלי מוגבלויות המגיעים מהשער הראשי של הקמפוס. למגיעים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתון (יש ללחוץ על כפתור הפעמון)."
                },
                {
                    "question":"loremloremloremloremloremloremloremlemloremloremloremorem",
                    "answer":"meme2"
                },
                {
                    "question":"עים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתו",
                    "answer":"עים מהחניון הסמוך לספרייה, הגישה לבעלי מוגבלויות היא מהשער התחתו"
                },
                {
                    "question":"loremloremloremloremloremloremloremlorem",
                    "answer":"meme3"
                }
            ]
        },
        {
            "title":"מורים",
            "img":"./assets/img/גמלאים copy 15.png",
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
        }
    ]
} 

  // getData(): Observable<any>{
  //   return this.http.get(this.questionsUrl);
  // }
  getData(){
    return this.data;
  }

}
