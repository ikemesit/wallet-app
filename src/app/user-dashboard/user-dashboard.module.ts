import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletsComponent } from './wallets/wallets.component';
import { WalletComponent } from './wallet/wallet.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { DeleteWalletComponent } from './delete-wallet/delete-wallet.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    ProfileComponent, 
    WalletsComponent, 
    WalletComponent, 
    CreateWalletComponent, 
    DeleteWalletComponent, 
    TransferFundsComponent, 
    MyAccountComponent, DashboardHeaderComponent, DashboardFooterComponent, DashboardSidebarComponent
  ]
})
export class UserDashboardModule { }
