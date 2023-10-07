import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Observable, Subject, filter, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
// FIXME: Refactor this code
export class NavigationService {

  private navigationSubject = new Subject<boolean>();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationStart),
      tap(() => this.navigationSubject.next(true))
    ).subscribe();
  }

  getNavigationValue(): Observable<boolean> {
    return this.navigationSubject.asObservable();
  }
}
