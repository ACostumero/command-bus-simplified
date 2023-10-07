import {Component, DestroyRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation, inject} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {BehaviorSubject, debounceTime, distinctUntilChanged, skip, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
  public static readonly DEBOUNCE_TIME_DEFAULT = 500;

  /**
   * Mandatory to been used inside takeUntilDestroyed, because where use inside lifecycle hooks 
   * throws an error. That is because takeUntilDestroyed uses inject under the hood (that is 
   * mandatory to use inside injection context). For avoid the error, we should to pass a DestroyRef instance
   */ 
  private _destroyRef = inject(DestroyRef);

  private _searchValueSource$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input() placeholder: string = 'Search';
  @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this._searchValueSource$.pipe(
      takeUntilDestroyed(this._destroyRef),
      skip(1),
      debounceTime(SearchComponent.DEBOUNCE_TIME_DEFAULT),
      distinctUntilChanged((prev, curr) => {
        if (prev) {
          return prev.trim() === (curr?.trim() || '');
        }
        return false;
        }),
      tap((value: string) => this._emitValueChange(value))
    ).subscribe();
  }

  get searchValue(): string {
    return this._searchValueSource$.value;
  }

  public setValue(term: string) {
    this._searchValueSource$.next(term);
  }

  public clear() {
    this.setValue('');
  }

  private _emitValueChange(value: string) {
    this.valueChange.emit(value);
  }


}
