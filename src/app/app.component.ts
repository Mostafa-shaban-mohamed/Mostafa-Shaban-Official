import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {filter} from 'rxjs/operators';
declare var gtag: Function;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private routerSubscription: Subscription;
  
  constructor(private router: Router) {
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    // subscribe to router events and send page views to Google Analytics
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        gtag('config', 'G-VN3JYPESC3', {'page_path': event.urlAfterRedirects});
      });
  }
  title = 'MyPortfolio';
}
