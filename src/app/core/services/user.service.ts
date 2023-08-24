import {Injectable} from "@angular/core";
import {ApiService} from "./api.service";
import {IRouteInterface} from "@app-core/interfaces/http.interface";
import {IApiResponse} from "@app-core/interfaces/api-response.interface";
import {IUserApi} from "src/app/data/interfaces/user.api.interface";
import {UserMapper} from "@app-core/mappers/user.mapper";
import {Observable, map} from "rxjs";
import {IUser} from "@app-core/interfaces/user.interface";

@Injectable({providedIn: 'root'})
export class UserService {
  private readonly _defaultRouteInterface: IRouteInterface = {segment: 'users/'};
  constructor(private readonly _apiService: ApiService) {}

  public getAll(): Observable<IUser[]> {
    return this._apiService.get<IApiResponse<IUserApi>>(this._defaultRouteInterface).pipe(
      map((apiResponse: IApiResponse<IUserApi>) => new UserMapper().fromApiMultiple(apiResponse.data))
    );
  }

}
