import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgmentComponent } from './acknowledgment.component';

describe('AcknowledgmentComponent', () => {
  let component: AcknowledgmentComponent;
  let fixture: ComponentFixture<AcknowledgmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcknowledgmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcknowledgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
