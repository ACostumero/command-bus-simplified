import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './container/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'users', loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule)},
      { path: 'color-resources', loadChildren: () => import('../modules/color-resources/color-resources.module').then(m => m.ColorResourcesModule)},
      { path: '**', redirectTo: 'users'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
