import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavotitesLinksComponent } from './favotites-links.component';

describe('FavotitesLinksComponent', () => {
  let component: FavotitesLinksComponent;
  let fixture: ComponentFixture<FavotitesLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavotitesLinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavotitesLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
