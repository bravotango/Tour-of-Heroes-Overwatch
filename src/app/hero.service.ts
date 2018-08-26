import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { AppInsightsService } from './app-insights.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  constructor(
    private messageService: MessageService,
    private appInsightsService: AppInsightsService
  ) { }

  getHeroes(): Observable<Hero[]> {
    this.appInsightsService.logPageEvent('getHeroes - Service');
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    this.appInsightsService.logPageEvent('getHeroes - Service');
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
