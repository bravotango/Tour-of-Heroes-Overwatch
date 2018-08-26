import { Injectable } from '@angular/core';
import { environment } from '../environments/environment'
import { AppInsights } from 'applicationinsights-js'

@Injectable({
  providedIn: 'root'
})
export class AppInsightsService {
  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: environment.appInsights.instrumentationKey
  }

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
   }

   logPageView(name:string, url?:string, properties?:any, mesurements?:any, duration?:number) {
     AppInsights.trackPageView(name, url, properties, mesurements, duration)
   }

   logPageEvent(name:string, properties?:any, mesurements?:any) {
     AppInsights.trackEvent(name,properties, mesurements)
   }
}
