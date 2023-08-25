import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({providedIn: 'root'})
export class LoaderState {
  private readonly _isContentLoadingSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isContentLoading$() {
    return this._isContentLoadingSource.asObservable();
  }

  set isContentLoading(value: boolean) {
    this._isContentLoadingSource.next(value);
  }

}
