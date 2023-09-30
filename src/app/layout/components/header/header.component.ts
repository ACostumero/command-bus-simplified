// Core
import { Component } from '@angular/core';

// Services
import { DrawerService } from '@app-core/services/drawer.service';

// Interfaces, enums
import { DRAWER_WIDTH } from '@app-core/enums/drawer-width.enum';
import { TDrawer } from '@app-core/interfaces/drawer-service.interface';
import { ColorResourcesComponent } from '@app-modules/color-resources/container/color-resources.component';

// Components

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(
		private readonly _drawerService: DrawerService
	) { }

	/**
	 * Example function for how to open a drawer
	 * Remember that the drawer has a generic type that corresponds
	 * with the comopnent type that is rendered inside
	 * The props attribute are a partial of rendered component props
	 */
	public openExampleDrawer() {
		const drawerData: TDrawer<ColorResourcesComponent> = {
			props: {},
			type: ColorResourcesComponent,
			width: DRAWER_WIDTH.PREVIEW
		};
		this._drawerService.openDrawer(drawerData);
	}

	onClickLogout() {
		//
	}

}
