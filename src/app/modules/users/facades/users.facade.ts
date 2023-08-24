import {Injectable} from "@angular/core";
import {GetUsersCommand} from "@app-commands/get-users.command";
import {CommandBus} from "@app-core/command-bus/command-bus";
import {IUser} from "@app-core/interfaces/user.interface";
import {DialogService} from "@app-core/services/dialog.service";
import { CreateEditUserComponent } from '@app-modules/users/components/create-edit-user/create-edit-user.component';

@Injectable()
export class UsersFacade {

  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _dialogService: DialogService) {}


  public getUsers() {
    this._commandBus.dispatch(new GetUsersCommand());
  }

  public openCreateUser() {
    return this._dialogService.open({
        data: {
          title: 'Create user',
          contentComponent: CreateEditUserComponent,
          actions: DialogService.DEFAULT_ACTIONS,
        }});
  }

  public openEditUser(user: IUser) {
    this._dialogService.open({
        data: {
          title: 'Edit user',
          contentComponent: CreateEditUserComponent,
          contentComponentData: { user },
          actions: DialogService.DEFAULT_ACTIONS,
        }
      });
  }

  public openDeleteUser() {
    this._dialogService.open({
        data: {
          title: 'Delete user',
          detail: 'This action cannot be undone, do you want to continue?',
          actions: [DialogService.YES_ACTION],
        }
      });
  }



}
