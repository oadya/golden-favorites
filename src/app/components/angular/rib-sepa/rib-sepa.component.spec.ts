import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RibSepaComponent } from './rib-sepa.component';

describe('RibSepaComponent', () => {
  let component: RibSepaComponent;
  let fixture: ComponentFixture<RibSepaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RibSepaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RibSepaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
