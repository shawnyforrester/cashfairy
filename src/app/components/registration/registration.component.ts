import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

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
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, 
    private router: Router){}

  ngOnInit(): void {}  

  onSubmit(): void {
    console.log(this.user);
    this.authService.register(this.user).subscribe(data => {
          console.log(data);
          this.router.navigateByUrl('login')
    },
        error => {
          this.errorMessage = error.message;
          this.isSignUpFailed = true;
        },
        () => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        }
    );
  }

}
