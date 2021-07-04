import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasesDonneesComponent } from './bases-donnees.component';

describe('BasesDonneesComponent', () => {
  let component: BasesDonneesComponent;
  let fixture: ComponentFixture<BasesDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasesDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasesDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
