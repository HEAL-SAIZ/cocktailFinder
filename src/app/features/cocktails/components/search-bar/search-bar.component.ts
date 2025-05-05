import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, InputTextModule, ButtonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  searchTerm: string = '';

  @Output() search = new EventEmitter<string>();
  @Output() random = new EventEmitter<void>();

  onSearchClick() {
    this.search.emit(this.searchTerm);
  }

  onRandomClick() {
    this.random.emit();
  }
}
