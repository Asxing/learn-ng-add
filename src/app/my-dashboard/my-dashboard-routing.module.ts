import {RouterModule, Routes} from '@angular/router';
import {MyDashboardComponent} from './my-dashboard.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MyDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class MyDashboardRoutingModule {
}
