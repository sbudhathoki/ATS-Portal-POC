import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionDialogComponent } from './instruction-dialog.component';

describe('InstructionDialogComponent', () => {
  let component: InstructionDialogComponent;
  let fixture: ComponentFixture<InstructionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
