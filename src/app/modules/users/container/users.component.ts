import { Component, ElementRef, ViewChild } from '@angular/core';
import {IUser} from '@app-core/interfaces/user.interface';
import {UsersFacade} from '@app-modules/users/facades/users.facade';
import { UsersState } from '@app-modules/users/state/users.state';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersFacade]
})
export class UsersComponent {

  @ViewChild('filter',  {static: true}) filter!: ElementRef;
  public users$: Observable<IUser[]> = this._usersState.users$;

  public displayedColumns = ['id', 'firstName', 'lastName', 'email',  'actions'];

  constructor(
    private readonly _usersFacade: UsersFacade,
    private readonly _usersState: UsersState,
    ) {
    this._usersFacade.getUsers();
  }

  public getAll() {
    this._usersFacade.getUsers();
  }

  public create() {
    this._usersFacade.openCreateUser();
  }

  public edit(row: IUser) {
    this._usersFacade.openEditUser(row);
  }

  public delete(event: unknown) {
    console.log('delete', event);
    this._usersFacade.openDeleteUser();

  }

}
