import { Component, Input } from '@angular/core';
import { Cocktail } from '../../../../core/models/cocktail.model';

@Component({
  selector: 'app-cocktail-card',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-card.component.html',
  styleUrl: './cocktail-card.component.scss',
})
export class CocktailCardComponent {
  @Input() cocktail!: Cocktail;
  @Input() ingredients: string[] = [];
}
