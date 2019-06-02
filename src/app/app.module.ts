import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Angular Imports
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '@app/environments/environment';
import { AccountModule } from '@app/modules/account/account.module';
import { SharedModule } from '@app/shared/shared.module';

// Modules
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { AltfooterComponent } from './components/altfooter/altfooter.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreModule } from './core/core.module';
import { MockApiService } from './mock-api/mock-api.service';
import { TestComponent } from './mock-api/test.component';
// import { UtilitiesService } from './mock-api/utilities.service';
// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    AltfooterComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(MockApiService, {
          delay: 1000,
        }),
    CoreModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    AccountModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
