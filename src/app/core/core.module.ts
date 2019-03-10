import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './services/auth/auth.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [AuthService, AuthGuard],
})
export class CoreModule {}
