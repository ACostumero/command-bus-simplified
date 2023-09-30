// Core
import { Component, HostListener, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';

// Services
import { DrawerService } from '@app-core/services/drawer.service';

// Interfaces
import { IDrawerService } from '@app-core/interfaces/drawer-service.interface';

// Components
import { DrawerComponent } from '../components/drawer/drawer.component';

@Component({
	selector: 'app-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
	@ViewChildren('drawerComponent') drawers!: QueryList<DrawerComponent>;

	public drawer$: Observable<IDrawerService<unknown>[]> = this._drawerService.drawer$;

	@HostListener('document:keydown.escape', ['$event'])
	public onKeydownEsc() {
		const drawers = this.drawers.toArray();
		if (!drawers.length) { return; }

		const drawer = drawers[drawers.length - 1].drawer.drawerData;
		this.openedChange({
			drawerData: drawer,
			open: false
		});

	}


	constructor(private readonly _drawerService: DrawerService) {
	}

	public openedChange(drawer: IDrawerService<unknown>): void {
		this._drawerService.openedChange(drawer);
	}

}
