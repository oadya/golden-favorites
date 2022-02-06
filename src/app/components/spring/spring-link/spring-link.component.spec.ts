import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringLinkComponent } from './spring-link.component';

describe('SpringLinkComponent', () => {
  let component: SpringLinkComponent;
  let fixture: ComponentFixture<SpringLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpringLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpringLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
