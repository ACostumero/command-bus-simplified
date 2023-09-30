import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private navigationSubject = new Subject<boolean>();

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.navigationSubject.next(true);
      }
    });
  }

  getNavigationValue(): Observable<boolean> {
    return this.navigationSubject.asObservable();
  }
}
