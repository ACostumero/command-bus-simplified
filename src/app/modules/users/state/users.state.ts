import {Injectable} from "@angular/core";
import {IUser} from "@app-core/interfaces/user.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersState {
  private readonly _usersSource: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  private readonly _isContentLoadingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get users$() {
    return this._usersSource.asObservable();
  }

  set users(users: IUser[]) {
    this._usersSource.next(users);
  }

}
