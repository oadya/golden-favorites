import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateWebsiteOneComponent } from './template-website-one.component';

describe('TemplateWebsiteOneComponent', () => {
  let component: TemplateWebsiteOneComponent;
  let fixture: ComponentFixture<TemplateWebsiteOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateWebsiteOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateWebsiteOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
