import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {IUser} from '@app-core/interfaces/user.interface';
import {UsersFacade} from '@app-modules/users/facades/users.facade';
import { UsersState } from '@app-modules/users/state/users.state';
import {LoaderState} from '@app-shared/state/loader.state';
import {Observable, catchError, of, tap, throwError} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersFacade]
})
export class UsersComponent implements OnDestroy{

  @ViewChild('filter',  {static: true}) filter!: ElementRef;
  public users$: Observable<IUser[]> = this._usersState.users$;
  public isContentLoading$: Observable<boolean> = this._loaderState.isContentLoading$;

  public displayedColumns = ['id', 'firstName', 'lastName', 'email',  'actions'];

  constructor(
    private readonly _usersFacade: UsersFacade,
    private readonly _usersState: UsersState,
    private readonly _loaderState: LoaderState,
    ) {
    this._usersFacade.getUsers();
  }

  ngOnDestroy(): void {
    this._usersFacade.onDestroy();
  }

  public getAll() {
    this._usersFacade.getUsers();
  }

  public create() {
    this._usersFacade.openCreateUserDialog();
  }

  public edit(row: IUser) {
    this._usersFacade.editUser(row);
  }

  public delete(user: IUser) {
    console.log('delete', user);
    this._usersFacade.deleteUser(user.id);
  }

}
