import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppInsightsService } from './app-insights.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, appInsightsService: AppInsightsService) { 
    appInsightsService.logPageView(this.router.url)
  }
  ngOnInit() {
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)

    });

}


}
