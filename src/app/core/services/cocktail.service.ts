import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { COCKTAIL_API_URL } from '../tokens/cocktail-api.token';

@Injectable({ providedIn: 'root' })
export class CocktailService {
  private baseUrl = inject(COCKTAIL_API_URL);
  private http = inject(HttpClient);

  searchCocktails(query: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/search.php?s=${query}`);
  }

  getRandomCocktail(): Observable<any> {
    return this.http.get(`${this.baseUrl}/random.php`);
  }

  getCocktailById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/lookup.php?i=${id}`);
  }
}
