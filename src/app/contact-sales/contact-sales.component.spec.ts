import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSalesComponent } from './contact-sales.component';

describe('ContactSalesComponent', () => {
  let component: ContactSalesComponent;
  let fixture: ComponentFixture<ContactSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
