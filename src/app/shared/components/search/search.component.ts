import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, debounceTime, distinctUntilChanged, skip, Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit, OnDestroy {
  private _destroySubscriptions$: Subject<void> = new Subject<void>();
  private _searchValueSource$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public static readonly DEBOUNCE_TIME_DEFAULT = 500;

  @Input() placeholder: string = 'Search';
  @Output() onValueChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    this._searchValueSource$.pipe(
      takeUntil(this._destroySubscriptions$),
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

  ngOnDestroy() {
    this._destroySubscriptions$.next();
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
    this.onValueChange.emit(value);
  }


}
