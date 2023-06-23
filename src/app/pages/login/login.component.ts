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

  form: any = {
   
    username: '',
    password: '',
   
   
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role = '';

  constructor(private authService: AuthService, private storageService: StorageService,
    private route: Router, private appComponent: AppComponent) { }

  ngOnInit(): void {
  
  }



  onSubmit(): void {
    const { username, password } = this.form;
    
    this.authService.login(username, password).subscribe({
      next: data => {
      
        this.storageService.saveUser(data);
        this.isLoginFailed = false
        this.isLoggedIn = true;
        this.route.navigate(['profile/'+this.storageService.getUser().id]);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
    },     
        
      });
  }




}
