import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceWebsiteComponent } from './ecommerce-website.component';

describe('EcommerceWebsiteComponent', () => {
  let component: EcommerceWebsiteComponent;
  let fixture: ComponentFixture<EcommerceWebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommerceWebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
