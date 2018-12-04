import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet.component';

const routes: Routes = [{
  path: '',
  component: WalletComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalletRoutingModule { }
