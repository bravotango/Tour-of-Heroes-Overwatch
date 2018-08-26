import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { AppInsightsService } from '../app-insights.service'
 
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
 
  constructor(
    private appInsightsService: AppInsightsService,  
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {  }
 
  ngOnInit(): void {
    this.getHero();
  }
 
  getHero(): void {
    this.appInsightsService.logPageEvent('getHero - hero detail component')
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
 
  goBack(): void {
    this.appInsightsService.logPageEvent('goBack- hero detail component')
    this.location.back();
  }

}