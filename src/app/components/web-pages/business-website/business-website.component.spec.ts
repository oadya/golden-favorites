import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessWebsiteComponent } from './business-website.component';

describe('BusinessWebsiteComponent', () => {
  let component: BusinessWebsiteComponent;
  let fixture: ComponentFixture<BusinessWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
