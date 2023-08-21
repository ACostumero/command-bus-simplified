import { Component, ElementRef, ViewChild } from '@angular/core';
import {IUser} from '@app-core/interfaces/user.interface';
import {DialogService} from '@app-core/services/dialog.service';
import {CreateEditUserComponent} from '../create-edit/create-edit-user/create-edit-user.component';
import {IDynamicDialogConfig} from '@app-core/interfaces/dialog.interface';
import {CommandBus} from '@app-core/command-bus/command-bus';
import {GetUsersCommand} from '@app-commands/get-users.command';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @ViewChild('filter',  {static: true}) filter!: ElementRef;
  public dataSource: IUser[] = [
    {
      "id": 1,
      "email": "george.bluth@reqres.in",
      "firstName": "George",
      "lastName": "Bluth",
      "avatar": "https://reqres.in/img/faces/1-image.jpg"
    },
    {
      "id": 2,
      "email": "janet.weaver@reqres.in",
      "firstName": "Janet",
      "lastName": "Weaver",
      "avatar": "https://reqres.in/img/faces/2-image.jpg"
    },
    {
      "id": 3,
      "email": "emma.wong@reqres.in",
      "firstName": "Emma",
      "lastName": "Wong",
      "avatar": "https://reqres.in/img/faces/3-image.jpg"
    },
    {
      "id": 4,
      "email": "eve.holt@reqres.in",
      "firstName": "Eve",
      "lastName": "Holt",
      "avatar": "https://reqres.in/img/faces/4-image.jpg"
    },
    {
      "id": 5,
      "email": "charles.morris@reqres.in",
      "firstName": "Charles",
      "lastName": "Morris",
      "avatar": "https://reqres.in/img/faces/5-image.jpg"
    },
    {
      "id": 6,
      "email": "tracey.ramos@reqres.in",
      "firstName": "Tracey",
      "lastName": "Ramos",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
    }
  ];

  public displayedColumns = ['id', 'firstName', 'lastName', 'email',  'actions'];

  constructor(private readonly _dialogService: DialogService) {}

  public openAddDialog() {
    return this._dialogService.open({
      data: {
        title: 'Crear usuario',
        contentComponent: CreateEditUserComponent,
        actions: DialogService.DEFAULT_ACTIONS,
      } as IDynamicDialogConfig<CreateEditUserComponent>,
    });
  }

  startEdit(row: unknown) {
    return this._dialogService.open({
      data: {
        title: 'Editar usuario',
        contentComponent: CreateEditUserComponent,
        contentComponentData: {
          user: row,
        },
        actions: DialogService.DEFAULT_ACTIONS,
      } as IDynamicDialogConfig<CreateEditUserComponent>,
    });
  }

  deleteItem(event: unknown) {
    console.log('delete', event);
    return this._dialogService.open({
      data: {
        title: 'Eliminar usuario',
        detail: 'Esta acción es irreversible. ¿Desea continuar?',
        actions: DialogService.DEFAULT_ACTIONS,
      } as IDynamicDialogConfig<CreateEditUserComponent>,
    });
  }

}
