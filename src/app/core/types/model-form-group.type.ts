import {FormControl, FormGroup} from "@angular/forms";

export type TModelFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
