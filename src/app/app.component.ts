import { Component } from '@angular/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cashfairy-Ng';

  isAuthenticated: boolean = false;
  

  constructor(private service: StorageService) {}
  
  ngOnInit(): void {
    this.isAuthenticated = this.service.isLoggedIn();
    
  }

  

}
