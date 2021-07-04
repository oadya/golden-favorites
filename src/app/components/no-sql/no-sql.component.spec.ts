import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSqlComponent } from './no-sql.component';

describe('NoSqlComponent', () => {
  let component: NoSqlComponent;
  let fixture: ComponentFixture<NoSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoSqlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
