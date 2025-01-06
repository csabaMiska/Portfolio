import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMessageboxComponent } from './contact-messagebox.component';

describe('ContactMessageboxComponent', () => {
  let component: ContactMessageboxComponent;
  let fixture: ComponentFixture<ContactMessageboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactMessageboxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
