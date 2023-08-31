import {Injectable} from "@angular/core";
import {DeleteUserCommand} from "@app-commands/delete-user.command";
import {EditUserCommand} from "@app-commands/edit-user.command";
import {GetUsersCommand} from "@app-commands/get-users.command";
import {ResetUsersCommand} from "@app-commands/reset-users.command";
import {SetLoaderCommand} from "@app-commands/set-loader.command";
import {CommandBus} from "@app-core/command-bus/command-bus";
import {IUser} from "@app-core/interfaces/user.interface";
import {DialogService} from "@app-core/services/dialog.service";
import { CreateEditUserComponent } from '@app-modules/users/components/create-edit-user/create-edit-user.component';
import {filter, first, tap} from "rxjs";

@Injectable()
export class UsersFacade {

  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _dialogService: DialogService) {}


  public getUsers() {
    this._commandBus.dispatchPipeline([
      new SetLoaderCommand(true),
      new GetUsersCommand(),
      new SetLoaderCommand(false)
    ]);
  }

  public openCreateUserDialog() {
    return this._dialogService.open({
        data: {
          title: 'Create user',
          contentComponent: CreateEditUserComponent,
          actions: DialogService.DEFAULT_ACTIONS,
        }}
        );
  }

  public openEditUserDialog(user: IUser) {
    return this._dialogService.open({
        data: {
          title: 'Edit user',
          contentComponent: CreateEditUserComponent,
          contentComponentData: { user },
          actions: DialogService.DEFAULT_ACTIONS,
        }
      }).afterClosed();
  }

  public editUser(user: IUser) {
    this.openEditUserDialog(user).pipe(
      first(),
      filter(Boolean),
      tap(() => this._commandBus.dispatch(new EditUserCommand(user)))
    ).subscribe()
  }

  public openDeleteUserDialog() {
    return this._dialogService.open({
        data: {
          title: 'Delete user',
          detail: 'This action cannot be undone, do you want to continue?',
          actions: [DialogService.YES_ACTION],
        }
      }).afterClosed();
  }

  public deleteUser(userId: number) {
    this.openDeleteUserDialog().pipe(
      first(),
      filter(Boolean),
      tap(() => this._commandBus.dispatch(new DeleteUserCommand(userId)))
    ).subscribe()
  }

  public resetUsers() {
    this._commandBus.dispatch(new ResetUsersCommand())
  }

  onDestroy() {
    this.resetUsers();
  }

}
