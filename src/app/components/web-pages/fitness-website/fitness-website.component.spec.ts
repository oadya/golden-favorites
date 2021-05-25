import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessWebsiteComponent } from './fitness-website.component';

describe('FitnessWebsiteComponent', () => {
  let component: FitnessWebsiteComponent;
  let fixture: ComponentFixture<FitnessWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitnessWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitnessWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
