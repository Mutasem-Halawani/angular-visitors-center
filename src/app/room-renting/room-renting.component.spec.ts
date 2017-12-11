import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomRentingComponent } from './room-renting.component';

describe('RoomRentingComponent', () => {
  let component: RoomRentingComponent;
  let fixture: ComponentFixture<RoomRentingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomRentingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
