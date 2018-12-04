import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WalletRoutingModule } from './wallet-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletComponent } from './wallet.component';

@NgModule({
  imports: [
    CommonModule,
    WalletRoutingModule
  ],
  declarations: [
    DashboardComponent,
    WalletComponent
  ]
})
export class WalletModule { }
