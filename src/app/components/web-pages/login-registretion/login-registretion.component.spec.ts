import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegistretionComponent } from './login-registretion.component';

describe('LoginRegistretionComponent', () => {
  let component: LoginRegistretionComponent;
  let fixture: ComponentFixture<LoginRegistretionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegistretionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegistretionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
