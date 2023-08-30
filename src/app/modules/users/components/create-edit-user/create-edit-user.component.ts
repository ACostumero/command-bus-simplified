import { Component, Inject, Input } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Dialogable, IDynamicDialogConfig} from '@app-core/interfaces/dialog.interface';
import {IUser, TCreateEditUser} from '@app-core/interfaces/user.interface';
import {TModelFormGroup} from '@app-core/types/model-form-group.type';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements Dialogable<CreateEditUserComponent> {
  @Input() user?: IUser; // For edit mode, receive the user data from the parent component
  userForm!: TModelFormGroup<TCreateEditUser>;
  isEditMode: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) private readonly _dialogData: IDynamicDialogConfig,
   private readonly _formBuilder: FormBuilder) { }
  onDialogClose(): CreateEditUserComponent {
    throw new Error('Method not implemented.');
  }
  onUpdateInfo(): void {
    throw new Error('Method not implemented.');
  }
  isCloseDisabled(): boolean {
    throw new Error('Method not implemented.');
  }

// convenience getter for easy access to form fields
get controls() { return this.userForm.controls; }


  ngOnInit() {
    this.initForm();
    if (this.user) {
      this.isEditMode = true;
      this.userForm.patchValue(this.user); // Populate the form with the received user data for editing
    }
  }

  private initForm() {
    this.userForm = this._formBuilder.nonNullable.group({
      email: ['',[Validators.required, Validators.email]],
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      avatar: ['',Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData: TCreateEditUser = this.userForm.getRawValue();
      console.log('Submitted User Data:', userData);
      this.resetForm();
    }
  }

  resetForm() {
    this.userForm.reset();
  }
}
