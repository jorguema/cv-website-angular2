import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  optionSelected = 'about';
  router: Router;

  constructor(private _router: Router) {
    this.router = _router;
    
    switch (this.router.url) {
      case '/': { this.optionSelected = 'about'; break; }
      case 'resume': { this.optionSelected = 'resume'; break; }
      case 'experience': { this.optionSelected = 'experience'; break; }
      case 'contact': { this.optionSelected = 'contact'; break; }
      case 'skills': { this.optionSelected = 'skills'; break; }
      default: break;
    }
  }

  about() {
    this.optionSelected = 'about';
    this.router.navigate(['']);
  };
  resume() {
    this.optionSelected = 'resume';
    this.router.navigate(['resume']);
  };
  experience() {
    this.optionSelected = 'experience';
    this.router.navigate(['experience']);
  };
  contact() {
    this.optionSelected = 'contact';
    this.router.navigate(['contact']);
  };
  skills() {
    this.optionSelected = 'skills';
    this.router.navigate(['skills']);
  };
}
