import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {IUser} from '@app-core/interfaces/user.interface';
import {UsersFacade} from '@app-modules/users/facades/users.facade';
import { UsersState } from '@app-modules/users/state/users.state';
import { SearchComponent } from '@app-shared/components/search/search.component';
import {LoaderState} from '@app-shared/state/loader.state';
import {Observable, catchError, of, tap, throwError} from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersFacade]
})
export class UsersComponent implements OnDestroy{

  public users$: Observable<IUser[]> = this._usersState.users$;
  public isContentLoading$: Observable<boolean> = this._loaderState.isContentLoading$;

  public displayedColumns = ['select', 'id', 'avatar', 'firstName', 'lastName', 'email',  'actions'];

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

  public preview(id: string) {
    console.log('preview', id);
    this._usersFacade.openPreview(id);
  }

  public edit(row: IUser) {
    this._usersFacade.editUser(row);
  }

  public delete(user: IUser) {
    console.log('delete', user);
    this._usersFacade.deleteUser(user.id);
  }


  selection = new SelectionModel<IUser>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    return true;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
   // 
  }

}
