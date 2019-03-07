import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { WalletsComponent } from './wallets/wallets.component';
import { CreateWalletComponent } from './create-wallet/create-wallet.component';
import { DeleteWalletComponent } from './delete-wallet/delete-wallet.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';

const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wallets', component: WalletsComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'create-wallet', component: CreateWalletComponent },
  { path: 'delete-wallet', component: DeleteWalletComponent},
  { path: 'transfer-funds', component: TransferFundsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDashboardRoutingModule { }
