import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCocktailModalComponent } from './random-cocktail-modal.component';

describe('RandomCocktailModalComponent', () => {
  let component: RandomCocktailModalComponent;
  let fixture: ComponentFixture<RandomCocktailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomCocktailModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomCocktailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
