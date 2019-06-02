import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [AuthService, AuthGuard],
})
export class CoreModule {}
