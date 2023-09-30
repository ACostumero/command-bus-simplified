// Core
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

import { TDrawer } from '@app-core/interfaces/drawer-service.interface';

export interface IDrawerService<T> {
	drawerData: TDrawer<T>;
	open: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class DrawerService {

	private _drawerArray: IDrawerService<unknown>[] = [];
	private readonly _drawerSource = new Subject<IDrawerService<unknown>[]>();
	private readonly _drawerOpenSource = new Subject<TDrawer<unknown>>();
	private readonly _drawerCloseSource = new Subject<TDrawer<unknown>>();

	public drawer$ = this._drawerSource.asObservable();

	constructor() {
		this._listenOpenDrawerEvent();
		this._listenCloseDrawerEvent();
	}

	public closeDrawer(drawerData: TDrawer<unknown>) {
		this._drawerCloseSource.next(drawerData);
	}

	public openDrawer(drawerData: TDrawer<unknown>) {
		this._drawerOpenSource.next(drawerData);
	}

	public openedChange(drawer: IDrawerService<unknown>): void {
		if (!drawer.open) {
			this._setDrawer(drawer);
		}
	}

	private _listenOpenDrawerEvent(): void {
		this._drawerOpenSource.pipe(
			tap((data) => {
				this._setDrawer({ drawerData: data, open: true });
			})).subscribe();
	}

	private _listenCloseDrawerEvent(): void {
		this._drawerCloseSource.pipe(
			tap((event) => {
				this._setDrawer({ drawerData: event, open: false });
			})).subscribe();
	}

	private _setDrawer(drawer: IDrawerService<unknown>) {
		if (!drawer) { return; }

		if (drawer.open) {
			return this._addDrawer(drawer);
		}

		this._deleteDrawer(drawer);
	}

	private _addDrawer(drawer: IDrawerService<unknown>): void {
		if (!this._drawerArray.some((drawerItem) => drawerItem.drawerData.type === drawer.drawerData.type)) {
			this._drawerArray = [...this._drawerArray, drawer];
			this._drawerSource.next(this._drawerArray);
		}
	}

	private _deleteDrawer(drawer: IDrawerService<unknown>): void {
		this._drawerArray = [...this._drawerArray.filter(
			(drawerItem: IDrawerService<unknown>) => drawerItem.drawerData.type !== drawer.drawerData.type)
		];
		this._drawerSource.next(this._drawerArray);
	}
}
