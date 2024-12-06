import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaliniteComponent } from './salinite.component';

describe('PricingComponent', () => {
  let component: SaliniteComponent;
  let fixture: ComponentFixture<SaliniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaliniteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaliniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
