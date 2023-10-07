import { Component, Input } from '@angular/core';
import { IUser } from '@app-core/interfaces/user.interface';
import { UsersState } from '@app-modules/users/state/users.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent {

public readonly user$: Observable<IUser | null> = this._usersState.selectedUser$;

  @Input() onClose?: Function;

constructor(
  private readonly _usersState: UsersState) {}

public closeDrawer() {
  this.onClose?.();
}

}
