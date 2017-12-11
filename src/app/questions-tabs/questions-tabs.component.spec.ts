import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsTabsComponent } from './questions-tabs.component';

describe('QuestionsTabsComponent', () => {
  let component: QuestionsTabsComponent;
  let fixture: ComponentFixture<QuestionsTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
