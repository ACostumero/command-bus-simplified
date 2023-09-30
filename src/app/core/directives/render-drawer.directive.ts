import { ChangeDetectorRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { TDrawer } from '@app-core/interfaces/drawer-service.interface';

@Directive({
	selector: '[appRenderDrawer]'
})
export class RenderDrawerDirective<T> {

	@Input('appRenderDrawer')
	public set portal(portal: TDrawer<T> | null) {
		this._vcr.clear();
		if (portal && portal.type) {
			const cmp = this._vcr.createComponent(portal.type);
			for (const key in portal.props) {
				if (Object.prototype.hasOwnProperty.call(portal.props, key)) {
					cmp.instance[key] = portal.props[key] as T[typeof key];
				}
			}
		}
		this._cdr.markForCheck();
	}

	constructor(
		private readonly _vcr: ViewContainerRef,
		private readonly _cdr: ChangeDetectorRef
	) { }

}
