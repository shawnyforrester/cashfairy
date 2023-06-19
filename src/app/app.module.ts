import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './pages/login/login.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileBarComponent } from './components/profile-bar/profile-bar.component';

import { httpInterceptorProviders } from './helpers/http.interceptor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AccountPageComponent,
    TransactionComponent,
    MenuComponent,
    ProfileBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
