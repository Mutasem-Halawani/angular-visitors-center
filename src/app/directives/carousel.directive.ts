import {
  Directive,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[appCarousel]',
  exportAs: 'appCarousel'
})
export class CarouselDirective{
  @Input() itemsLength: number;

  @Output('selectedIndex') selectedIndexEmitter = new EventEmitter<number>();
  @Output('actualIndex') actualIndexEmitter = new EventEmitter<number>();
  
  selectedIndex = 0;

  destoryed$ = new Subject();
  // resetTimer$ = new Subject();

  ngOnInit() {
    // this.resetTimer$
    //   .startWith(null)
    //   .takeUntil(this.destroyed$)
    //   .switchMap(t => Observable.timer(5000, 5000))
    //   .subscribe(() => this.next())
  }

  actualIndex(){
    let len = this.itemsLength;

    return ((this.selectedIndex % len) + len) % len;
  }

  setIndex(index: number){
    this.selectedIndex = index;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(index);
    console.log(this.selectedIndex);
    console.log(this.actualIndexEmitter);
  }
  
  prev(){
    --this.selectedIndex;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(this.selectedIndex);
    console.log(this.selectedIndex);
  }
  
  next(){
    ++this.selectedIndex;
    this.actualIndexEmitter.next(this.actualIndex());
    this.selectedIndexEmitter.next(this.selectedIndex);
    console.log(this.selectedIndex);
  }

  ngOnDestroy(){
    this.destoryed$.next();
  }

}
