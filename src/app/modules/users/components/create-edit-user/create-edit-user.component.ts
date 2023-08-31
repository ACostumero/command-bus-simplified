import { Component, Inject, Input } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Dialogable, IDynamicDialogConfig} from '@app-core/interfaces/dialog.interface';
import {IUser, TUserWithoutId} from '@app-core/interfaces/user.interface';
import {TModelFormGroup} from '@app-core/types/model-form-group.type';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements Dialogable<IUser | TUserWithoutId> {
  @Input() user?: IUser; // For edit mode, receive the user data from the parent component
  userForm!: TModelFormGroup<TUserWithoutId>;

  constructor(
    @Inject(MAT_DIALOG_DATA) private readonly _dialogData: IDynamicDialogConfig,
    private readonly _formBuilder: FormBuilder) { }



  // convenience getter for easy access to form fields
  get controls() {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.initForm();
    if (this.user) {
      this.userForm.patchValue(this.user); // Populate the form with the received user data for editing
    }
  }

  public onDialogClose(): TUserWithoutId {
    if(!this.userForm.valid) throw new Error('user is not valid');
    const user: TUserWithoutId | IUser = this._getUser();
    this._resetForm();
    return user;
  }

  public onUpdateInfo(): void {
    throw new Error('Method not implemented.');
  }

  public isCloseDisabled(): boolean {
    return !this.userForm.valid;
  }

  private initForm() {
    this.userForm = this._formBuilder.nonNullable.group({
      email: ['',[Validators.required, Validators.email]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      avatar: ['',Validators.required],
    });
  }

  private _getUser(): IUser | TUserWithoutId {
    const formData: TUserWithoutId = this.userForm.getRawValue();

    if(this.user) {
      const user: IUser = {...formData, id: this.user.id};
      return user;
    }
    return formData;
  }

  private _resetForm() {
    this.userForm.reset();
  }
}
