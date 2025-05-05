import { Routes } from '@angular/router';
import { CocktailDetailsPageComponent } from './features/cocktails/pages/cocktail-details-page/cocktail-details-page.component';
import { CocktailListPageComponent } from './features/cocktails/pages/cocktail-list-page/cocktail-list-page.component';

export const routes: Routes = [
  { path: '', component: CocktailListPageComponent },
  { path: 'cocktail/:id', component: CocktailDetailsPageComponent },
  { path: '**', redirectTo: '' },
];
