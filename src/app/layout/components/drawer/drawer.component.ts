import { trigger, style, transition, animate } from '@angular/animations';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, takeUntil, tap } from 'rxjs';

import {IDrawerService} from '@app-core/interfaces/drawer-service.interface';
import {DRAWER_WIDTH} from '@app-core/enums/drawer-width.enum';
import { NavigationService } from '@app-core/services/navigation.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('inOutPaneAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(
          '250ms ease-in-out',
          style({ transform: 'translateX(0)' })
        )
      ])
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ])
    ])
  ]
})
export class DrawerComponent implements OnInit, OnDestroy {

  @Input() drawer!: IDrawerService<unknown>;

  @Output() openedChange = new EventEmitter<boolean>();

  private readonly _destroySubscriptions = new Subject<void>();
  public animationEnd = false;
  public readonly DEFAULT_WIDTH = DRAWER_WIDTH.DEFAULT;
  constructor(private readonly _navigationService: NavigationService) {}

  ngOnInit(): void {
    this._listenNavigationChanges();
  }

  ngOnDestroy(): void {
    if (!this._destroySubscriptions.closed) {
      this._destroySubscriptions.next();
      this._destroySubscriptions.complete();
    }
  }

  private _listenNavigationChanges() {
    this._navigationService.getNavigationValue()
      .pipe(
        takeUntil(this._destroySubscriptions),
        tap(() => {
          this.onOpenedChange(true);
        })
      ).subscribe();
  }

  public onOpenedChange(open: boolean) {
    this.openedChange.emit(!open);
  }

}

