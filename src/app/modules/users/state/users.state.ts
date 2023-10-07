import {Injectable} from "@angular/core";
import {IUser} from "@app-core/interfaces/user.interface";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class UsersState {
  private readonly _usersSource: BehaviorSubject<IUser[]> = new BehaviorSubject<IUser[]>([]);
  private readonly _selectedUser: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

  get users$() {
    return this._usersSource.asObservable();
  }

  get selectedUser$() {
    return this._selectedUser.asObservable();
  }

  public setUsers(users: IUser[]) {
    this._usersSource.next(users);
  }

  public setSelectedUser(user: IUser | null) {
    this._selectedUser.next(user);
  }

  public updateUser(updatedUser: IUser) {
    const users = this._usersSource.value.map((user: IUser) => user.id === updatedUser.id ? updatedUser : user);
    this.setUsers([...users]);
  }

  public removeUser(userId: number) {
    const users = this._usersSource.value.filter((user: IUser) => user.id !== userId);
    this.setUsers([...users]);
  }

}
