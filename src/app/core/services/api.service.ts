// Core
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IRouteHeader, IRouteInterface} from '@app-core/interfaces/http.interface';
import {API_BASE_URL} from '@app-core/constants/env.const';

// Interfaces

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _urlBase: string = API_BASE_URL;

  protected constructor(private readonly _httpClient: HttpClient) {}

  public get<T>(route: IRouteInterface): Observable<T> {
    return this._httpClient.get<T>(
      this._getRouteName(route),
      this._getHttpOptions(route)
    );
  }

  public post<T>(route: IRouteInterface, data: Object): Observable<T> {
    return this._httpClient.post<T>(
      this._getRouteName(route),
      data,
      this._getHttpOptions(route)
    );
  }

  public put<T>(route: IRouteInterface, data: Object): Observable<T> {
    return this._httpClient.put<T>(
      this._getRouteName(route),
      data,
      this._getHttpOptions(route)
    );
  }

  public patch<T>(route: IRouteInterface, data: Object): Observable<T> {
    return this._httpClient.patch<T>(
      this._getRouteName(route),
      data,
      this._getHttpOptions(route)
    );
  }

  public delete<T>(route: IRouteInterface): Observable<T> {
    return this._httpClient.delete<T>(
      this._getRouteName(route),
      this._getHttpOptions(route)
    );
  }

  private _getHttpOptions(routeInterface: IRouteInterface): Object {
    const httpParams = routeInterface.params
      ? new HttpParams({ fromObject: { ...routeInterface.params } })
      : new HttpParams();
    let httpHeaders = new HttpHeaders();

    routeInterface.headers?.forEach((header: IRouteHeader) => {
      httpHeaders = httpHeaders.append(
        Object.keys(header).toString(),
        Object.values(header).toString()
      );
    });

    return {
      headers: httpHeaders,
      params: httpParams,
      observe: routeInterface.observe!,
      responseType: routeInterface.responseType!,
      body: routeInterface.body,
    };
  }

  private _getRouteName(routeInterface: IRouteInterface): string {
    return this._urlBase + routeInterface.segment;
  }
}
