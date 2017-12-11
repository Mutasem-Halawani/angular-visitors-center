import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileOnlyContentComponent } from './mobile-only-content.component';

describe('MobileOnlyContentComponent', () => {
  let component: MobileOnlyContentComponent;
  let fixture: ComponentFixture<MobileOnlyContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileOnlyContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileOnlyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
