import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocktailDetailsPageComponent } from './cocktail-details-page.component';

describe('CocktailDetailsPageComponent', () => {
  let component: CocktailDetailsPageComponent;
  let fixture: ComponentFixture<CocktailDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocktailDetailsPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CocktailDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
