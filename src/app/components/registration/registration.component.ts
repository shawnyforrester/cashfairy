import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'cypress/types/jquery';
import { last } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{

  form: any = {
    
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    city: '',
    email: '',
    telephone: '',
    role: '',
  }
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private authService: AuthService, 
    private router: Router){}

  ngOnInit(): void {}  

  onSubmit(): void {
    
    const { first_name, last_name, username, password, city, email, telephone, role } = this.form;

    this.authService.register(first_name, last_name, username, password, city, email, telephone, role ).subscribe({ 

      next: data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      this.router.navigate(['/login']);
    
    },
        error: err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      });
    }

}
