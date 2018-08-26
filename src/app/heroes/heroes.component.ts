import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { AppInsightsService } from '../app-insights.service';
import { query, trigger, state, style, transition, stagger, animate, group } from '@angular/animations'; 

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({width: 120, transform: 'translateX(0)', opacity: 1})),
      transition('void => *', [
        style({width: 10, transform: 'translateX(50px)', opacity: 0}),
        group([
          animate('0.3s 0.1s ease', style({
            transform: 'translateX(0)',
            width: 120
          })),
          animate('0.3s ease', style({
            opacity: 1
          }))
        ])
      ]),
      transition('* => void', [
        group([
          animate('0.3s ease', style({
            transform: 'translateX(50px)',
            width: 10
          })),
          animate('0.3s 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ])
  ]
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(
    private appInsightsService: AppInsightsService, 
    private heroService: HeroService,
    private route: ActivatedRoute) {}
  
  ngOnInit() {
    this.getHeroes();
  }


  getHeroes(): void {
    this.appInsightsService.logPageEvent('getHeroes - heroes component');;
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
