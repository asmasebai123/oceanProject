import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonesComponent } from './bones.component';

describe('EnterpriseComponent', () => {
  let component: BonesComponent;
  let fixture: ComponentFixture<BonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
