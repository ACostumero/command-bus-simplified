import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {

  private readonly _appSettings = {
    name: 'Command Bus Simplified',
    author: 'ACostumero',
    version: 'dev'
  }

  constructor() { }

  get appSettings() {
    return this._appSettings;
  }
}
