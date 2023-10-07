import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '@app-shared/shared.module';
import {UsersRoutingModule} from './users-routing.module';

import {ICommandHandler} from '@app-core/command-bus/interfaces/command-handler.interface';

import {CommandHandlerRegistryService} from '@app-core/command-bus/services/command-handler-registry.service';
import {GetUserByIdCommandHandler} from '@app-command-handlers/get-user-by-id.command-handler';
import {CreateUserCommandHandler} from '@app-command-handlers/create-user-command-handler';
import {GetUsersCommandHandler} from '@app-command-handlers/get-users.command-handler';
import {EditUserCommandHandler} from '@app-command-handlers/edit-user-command-handler';
import {DeleteUserCommandHandler} from '@app-command-handlers/delete-user-command-handler';
import {ResetUsersCommandHandler} from '@app-command-handlers/reset-users.command-handler';

import {UsersComponent} from '@app-modules/users/container/users.component';
import { CreateEditUserComponent } from '@app-modules/users/components/create-edit-user/create-edit-user.component';
import { UserPreviewComponent } from './components/user-preview/user-preview.component';
import { ResetSelectedUserCommandHandler } from '@app-command-handlers/reset-selected-user.command-handler';

const USERS_COMMAND_HANDLERS: Type<ICommandHandler>[] = [
  GetUsersCommandHandler,
  GetUserByIdCommandHandler,
  CreateUserCommandHandler,
  EditUserCommandHandler,
  DeleteUserCommandHandler,
  ResetUsersCommandHandler,
  ResetSelectedUserCommandHandler
];

@NgModule({
  declarations: [UsersComponent, CreateEditUserComponent, UserPreviewComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ],
  providers: [
    USERS_COMMAND_HANDLERS
  ]
})
export class UsersModule {
  constructor(private readonly commandHandlerRegistryService: CommandHandlerRegistryService) {
    this.commandHandlerRegistryService.registerHandlers(USERS_COMMAND_HANDLERS);
  }
}
