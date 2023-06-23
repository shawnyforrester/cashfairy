import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.css']
})
export class AccountPageComponent implements OnInit {

 balance: number = 1000;


  constructor() { }

  ngOnInit(): void {
    
  }



}
