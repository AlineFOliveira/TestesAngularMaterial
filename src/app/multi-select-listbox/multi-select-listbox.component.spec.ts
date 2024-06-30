import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectListboxComponent } from './multi-select-listbox.component';

describe('MultiSelectListboxComponent', () => {
  let component: MultiSelectListboxComponent;
  let fixture: ComponentFixture<MultiSelectListboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiSelectListboxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiSelectListboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
