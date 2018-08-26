import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { ActivatedRoute } from '@angular/router';
import { AppInsightsService } from '../app-insights.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  roles: string[] = ["Damage", "Offense", "Support", "Tank"];
  selectedRole: string;

  constructor(
    private appInsightsService: AppInsightsService,
    private heroService: HeroService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.appInsightsService.logPageEvent('getHeroes - dashboard component')
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    this.heroes.sort(this.dynamicSort("name"));
  }


  dynamicSort(property) {
    this.appInsightsService.logPageEvent('dynamicSort - dashboard component')
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }
}