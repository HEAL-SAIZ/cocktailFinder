import { Component, inject } from '@angular/core';
import { CocktailService } from '../../../../core/services/cocktail.service';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { RandomCocktailModalComponent } from '../../components/random-cocktail-modal/random-cocktail-modal.component';
import { Router } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { trigger, transition, style, animate } from '@angular/animations';
import { Cocktail } from '../../../../core/models/cocktail.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [
    SearchBarComponent,
    CardModule,
    DialogModule,
    SkeletonModule,
    RandomCocktailModalComponent,
  ],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
  templateUrl: './cocktail-list-page.component.html',
  styleUrl: './cocktail-list-page.component.scss',
})
export class CocktailListPageComponent {
  private router = inject(Router);
  private cocktailService = inject(CocktailService);

  public cocktails: Cocktail[] = [];
  public loading: boolean = false;
  public skeletonArray = Array(6);
  public randomCocktail!: Cocktail;
  public randomModalVisible: boolean = false;

  public onSearch(query: string): void {
    this.loading = true;
    this.cocktailService
      .searchCocktails(query)
      .pipe(take(1))
      .subscribe((response) => {
        this.cocktails = response.drinks || [];
        this.loading = false;
      });
  }

  public onRandom(): void {
    this.cocktailService
      .getRandomCocktail()
      .pipe(take(1))
      .subscribe((response) => {
        this.randomCocktail = response.drinks[0];
        this.randomModalVisible = true;
      });
  }

  public navigateToDetails(id: string): void {
    this.router.navigate(['/cocktail', id]);
  }
}
