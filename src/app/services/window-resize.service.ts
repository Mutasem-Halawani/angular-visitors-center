import { EventManager } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class WindowResizeService {

    get onResize$(): Observable<Window> {
        return this.resizeSubject.asObservable();
    }

    private resizeSubject: Subject<Window>;

    constructor(private eventManager: EventManager) {
        this.resizeSubject = new Subject();
        this.eventManager.addGlobalEventListener('window', 'resize', this.onResize.bind(this));
    }

    private onResize(event: UIEvent) {
        this.resizeSubject.next(<Window>event.target);
    }
}

// $(window).scroll(function () {
//     clearTimeout($.data(this, 'scrollTimer'));
//     $.data(this, 'scrollTimer', setTimeout(function () {
//     }, 50));
// });
