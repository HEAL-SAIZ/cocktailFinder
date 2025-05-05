import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Cocktail } from '../../../../core/models/cocktail.model';

@Component({
  selector: 'app-random-cocktail-modal',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './random-cocktail-modal.component.html',
  styleUrl: './random-cocktail-modal.component.scss',
})
export class RandomCocktailModalComponent {
  @Input() visible: boolean = false;
  @Input() cocktail!: Cocktail;
  @Output() close = new EventEmitter<void>();
}
