import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AppComponent } from 'src/app/app.component';
import { AuthService} from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: Customer = {
    id: 0,
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    city: '',
    email: '',
    dob: '',
    telephone: '',
    role: '',
    account: {
      id: 0,
      savings: '',
      checking: '',
      debit: '',
      credit: '',
      account_owner: []
    },
    transactions: []
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(private authService: AuthService, private storageService: StorageService,
    private route: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.role = this.storageService.getUser().role;
    }
  }

  ngOnChange():void{
    this.isLoggedIn = this.storageService.isLoggedIn();
  }

  onSubmit(): void {
    this.isLoggedIn = true;
    this.authService.login(this.user).subscribe(data => {
         this.storageService.saveUser(data);
         this.appComponent.ngOnInit();
      },
      error => {
        console.log(error)
        this.isLoginFailed = true
      },
      () => {
         this.isLoginFailed = false
         this.role = this.storageService.getUser().role;
         this.reloadPage()
      }
    );
  }

  reloadPage(): void {
    this.route.navigateByUrl('profile');

  }


}
