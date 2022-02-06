import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLinkComponent } from './angular-link.component';

describe('AngularLinkComponent', () => {
  let component: AngularLinkComponent;
  let fixture: ComponentFixture<AngularLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
