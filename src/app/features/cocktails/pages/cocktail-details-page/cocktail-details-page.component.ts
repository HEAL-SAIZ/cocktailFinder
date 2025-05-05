import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailService } from '../../../../core/services/cocktail.service';
import { Cocktail } from '../../../../core/models/cocktail.model';
import { CocktailCardComponent } from '../../components/cocktail-card/cocktail-card.component';

@Component({
  selector: 'app-cocktail-details-page',
  standalone: true,
  imports: [CocktailCardComponent],
  templateUrl: './cocktail-details-page.component.html',
  styleUrl: './cocktail-details-page.component.scss',
})
export class CocktailDetailsPageComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private cocktailService = inject(CocktailService);

  public cocktail!: Cocktail;
  public ingredients: string[] = [];
  public loading = true;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cocktailService.getCocktailById(id).subscribe({
        next: (response) => {
          const [drink] = response.drinks as Cocktail[];
          this.cocktail = drink;
          this.ingredients = this.extractIngredients(drink);
          this.loading = false;
        },
        error: (err) => {
          console.error('Failed to load cocktail', err);
          this.loading = false;
        },
      });
    }
  }

  private extractIngredients(cocktail: Cocktail): string[] {
    const ingredients: string[] = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
      if (ingredient) {
        ingredients.push(measure ? `${measure} ${ingredient}` : ingredient);
      }
    }
    return ingredients;
  }
}
