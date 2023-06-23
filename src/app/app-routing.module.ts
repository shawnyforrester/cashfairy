import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { TransactionComponent } from './components/transaction/transaction.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'profile/:id', component: AccountPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'profile/:id/transaction', component:TransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
