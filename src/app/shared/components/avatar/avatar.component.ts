import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  public static readonly _DEFAULT_AVATAR_SRC = '../../../../assets/images/default_avatar.png';
  @Input() src: string = AvatarComponent._DEFAULT_AVATAR_SRC;

  public setDefaultAvatar() {
    this.src = AvatarComponent._DEFAULT_AVATAR_SRC;
  }
}
