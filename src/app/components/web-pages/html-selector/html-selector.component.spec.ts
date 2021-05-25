import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlSelectorComponent } from './html-selector.component';

describe('HtmlSelectorComponent', () => {
  let component: HtmlSelectorComponent;
  let fixture: ComponentFixture<HtmlSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
