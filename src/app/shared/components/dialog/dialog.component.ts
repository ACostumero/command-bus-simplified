// Core
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  Inject,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import {Dialogable, IDialogAction, IDynamicDialogConfig} from '@app-core/interfaces/dialog.interface';

import {TDialogableComponent} from '@app-core/types/dialogable-component.type';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: {
    class: 'dialog-base',
  },
})
export class DialogComponent implements AfterViewInit {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  private _compRef!: ComponentRef<any>;

  constructor(
    public readonly dialog: MatDialogRef<DialogComponent>,
    private readonly _cd: ChangeDetectorRef,
    @Inject(MAT_DIALOG_DATA) public data: IDynamicDialogConfig<TDialogableComponent>,
  ) {
  }

  ngAfterViewInit(): void {
    if (this.data.contentComponent) {
      this._prepareComponent();
    }
    this._cd.detectChanges(); // Necessary for detect changes in actions
  }

  public processAction(action: IDialogAction) {
    if(action.isCancelButton) return this.dialog.close();
    const actionResult = this._executeCallback(action.callback);
    this._checkClose(action.isCloseButton, actionResult);
  }

  public checkDisabled(action: IDialogAction): boolean {
    if (!action.checkDisabled || !this._compRef) return false;
    return this._compRef.instance.isCloseDisabled();
  }

  // CHILD COMPONENT SETTINGS ==================

  private _prepareComponent() {
    if (!this.data.contentComponent) return;
    this.container.clear();
    this._compRef = this.container.createComponent(this.data.contentComponent);
    this._setComponentData(this.data.contentComponentData);
    this._compRef.changeDetectorRef.detectChanges();
  }

  private _setComponentData(data: Partial<TDialogableComponent> | undefined) {
    if (!data) return;
    Object.entries(data).forEach(([key, value]) => {
      this._compRef.setInput(key, value);
    });
  }

  // ACTION EXECUTIONS AND VALIDATIONS ==================

  private _executeCallback(callbackName?: keyof Dialogable<unknown>): true | unknown {
    if(callbackName === undefined) return true; // Standard button without specific action
    this._checkCallbackImplemented(callbackName);
    return this._compRef.instance[callbackName]();
  }

  private _checkCallbackImplemented(callbackName: keyof Dialogable<unknown>) {
    if(!this._compRef.instance[callbackName]) {
      throw new Error(`[DialogComponent] --> ${this._compRef.instance.constructor.name} hasn't been implemented ${callbackName} method`)
    }
  }

  private _checkClose(isCloseButton: boolean = false, result: unknown) {
    if (!isCloseButton) return;
    this.dialog.close(result);
  }

}
