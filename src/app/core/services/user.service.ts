import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {IRouteInterface} from "@app-core/interfaces/http.interface";
import {IApiResponse} from "@app-core/interfaces/api-response.interface";
import {IUserApi, IUserUpdateApi} from "@app-data/interfaces/user.api.interface";
import {UserMapper} from "@app-core/mappers/user.mapper";
import {EMPTY, Observable, map, tap} from "rxjs";
import {IUser, TUserWithoutId} from "@app-core/interfaces/user.interface";
import {HttpResponse} from "@angular/common/http";
import {UserUpdateMapper} from "@app-core/mappers/user-update.mapper";
import {HTTP_STATUS_CODE} from "@app-core/enums/http-status-code.enum";

@Injectable({providedIn: 'root'})
export class UserService {
  private static readonly _USERS_SEGMENT: string = 'users/';
  constructor(private readonly _apiService: ApiService) {}

  public getAll(): Observable<IUser[]> {
    const routeInterface: IRouteInterface = {segment: `${UserService._USERS_SEGMENT}`}

    return this._apiService.get<IApiResponse<IUserApi>>(routeInterface).pipe(
      map((apiResponse: IApiResponse<IUserApi>) => new UserMapper().fromApiMultiple(apiResponse.data))
    );
  }

  public create(newUser: TUserWithoutId) {
    const routeInterface: IRouteInterface = {segment: `${UserService._USERS_SEGMENT}`}
    return EMPTY; // Method not implemented by the API
    return this._apiService.post<HttpResponse<void>>(routeInterface, newUser);
  }

  public edit(user: IUser) {
    const routeInterface: IRouteInterface = {segment: `${UserService._USERS_SEGMENT}${user.id}`}
    return this._apiService.patch<IUserUpdateApi>(routeInterface, user).pipe(
      map((userApi: IUserUpdateApi) => new UserUpdateMapper().fromApi(userApi))
    );
  }

  public delete(userId: number) {
    const routeInterface: IRouteInterface = {
      segment: `${UserService._USERS_SEGMENT}${userId}`,
      observe: 'response'
  }
    return this._apiService.delete<HttpResponse<void>>(routeInterface).pipe(
      tap((response: HttpResponse<void>) => response.status === HTTP_STATUS_CODE.NO_CONTENT)
    );
  }

}
