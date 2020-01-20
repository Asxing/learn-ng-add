import {NgModel} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./my-dashboard/my-dashboard.module').then(m => m.MyDashboardModule)
  }, {
    path: 'table',
    loadChildren: () => import('./my-table/my-table.module').then(m => m.MyTableModule)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
