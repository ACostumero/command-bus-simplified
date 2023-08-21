import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './container/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '@app-shared/shared.module';
import { CreateEditUserComponent } from './create-edit/create-edit-user/create-edit-user.component';
import {GetUsersCommandHandler} from '@app-command-handlers/get-users.command-handler';
import {GetUserByIdCommandHandler} from '@app-command-handlers/get-user-by-id.command-handler';
import {ICommandHandler} from '@app-core/command-bus/interfaces/command-handler.interface';
import {CommandHandlerRegistryService} from '@app-core/command-bus/services/command-handler-registry.service';
import {CreateUserCommandHandler} from '@app-command-handlers/create-user-command-handler';
import {EditUserCommandHandler} from '@app-command-handlers/edit-user-command-handler';
import {DeleteUserCommandHandler} from '@app-command-handlers/delete-user-command-handler';

const USERS_COMMAND_HANDLERS: Type<ICommandHandler>[] = [
  GetUsersCommandHandler,
  GetUserByIdCommandHandler,
  CreateUserCommandHandler,
  EditUserCommandHandler,
  DeleteUserCommandHandler
];

@NgModule({
  declarations: [UsersComponent, CreateEditUserComponent],
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
