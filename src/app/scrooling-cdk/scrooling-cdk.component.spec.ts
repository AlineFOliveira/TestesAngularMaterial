import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroolingCdkComponent } from './scrooling-cdk.component';

describe('ScroolingCdkComponent', () => {
  let component: ScroolingCdkComponent;
  let fixture: ComponentFixture<ScroolingCdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScroolingCdkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScroolingCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
