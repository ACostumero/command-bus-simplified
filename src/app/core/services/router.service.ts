import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private readonly _router: Router) { }

  public goToExternalPage(url: string) {
    window.open(url, '_blank');
  }

}
