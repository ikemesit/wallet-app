// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AccountRoutingModule } from './account-routing.module';
import { SharedModule } from '@app/shared/shared.module';

// Pages
import { AccountComponent } from './account.component';
import { DashboardComponent } from '@app/account/pages/dashboard/dashboard.component';
import { ProfileComponent } from '@app/account/pages/profile/profile.component';

// Components
import { CreateWalletComponent } from '@app/account/components/create-wallet/create-wallet.component';
import { DeleteWalletComponent } from '@app/account/components/delete-wallet/delete-wallet.component';
import { TransferFundsComponent } from '@app/account/components/transfer-funds/transfer-funds.component';
import { DashboardHeaderComponent } from '@app/account/components/dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from '@app/account/components/dashboard-footer/dashboard-footer.component';
import { DashboardSidebarComponent } from '@app/account/components/dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
  imports: [CommonModule, SharedModule, AccountRoutingModule],
  declarations: [
    DashboardComponent,
    ProfileComponent,
    CreateWalletComponent,
    DeleteWalletComponent,
    TransferFundsComponent,
    DashboardHeaderComponent,
    DashboardFooterComponent,
    DashboardSidebarComponent,
    AccountComponent,
  ],
})
export class AccountModule {}
