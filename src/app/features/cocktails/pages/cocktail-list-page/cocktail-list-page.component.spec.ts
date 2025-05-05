import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailListPageComponent } from './cocktail-list-page.component';

describe('CocktailListPageComponent', () => {
  let component: CocktailListPageComponent;
  let fixture: ComponentFixture<CocktailListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
