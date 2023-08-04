import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UsersComponent} from './container/users.component';
import {UsersRoutingModule} from './users-routing.module';
import {SharedModule} from '@app-shared/shared.module';
import { CreateEditUserComponent } from './create-edit/create-edit-user/create-edit-user.component';

@NgModule({
  declarations: [UsersComponent, CreateEditUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
