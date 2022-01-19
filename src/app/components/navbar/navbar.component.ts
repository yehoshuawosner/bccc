import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  brandName = environment.BRAND_NAME;
  homeUri = environment.HOME_URI_PATH;
  fileUri = environment.FILES_URI_PATH;

  constructor() { }

  ngOnInit(): void {
  }

}