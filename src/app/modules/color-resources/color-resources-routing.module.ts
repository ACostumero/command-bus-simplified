import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorResourcesComponent } from '@app-modules/color-resources/container/color-resources.component';

const routes: Routes = [
  {
    path: '',
    component: ColorResourcesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorResourcesRoutingModule {
}
