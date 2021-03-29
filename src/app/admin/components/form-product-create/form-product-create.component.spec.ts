import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductCreateComponent } from './form-product-create.component';

describe('FormProductCreateComponent', () => {
  let component: FormProductCreateComponent;
  let fixture: ComponentFixture<FormProductCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
