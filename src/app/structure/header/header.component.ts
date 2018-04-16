import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import { debug } from 'util';

@Component({
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  optionSelected = 'about';
  router: Router;
  route: string;
  openedMenu: boolean = false;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, location: Location) {
    this.router = _router;
    this.route = location.path() || '';

    switch (this.route) {
      case '': { this.optionSelected = 'about'; break; }
      case '/resume': { this.optionSelected = 'resume'; break; }
      case '/experience': { this.optionSelected = 'experience'; break; }
      case '/contact': { this.optionSelected = 'contact'; break; }
      case '/skills': { this.optionSelected = 'skills'; break; }
      default: { this.optionSelected = 'about'; break; }
    }
  }

  expandMenu(){
    this.openedMenu = !this.openedMenu;
  }

  about() {
    this.optionSelected = 'about';
    this.openedMenu = false;
    this.router.navigate(['']);
  };
  resume() {
    this.optionSelected = 'resume';
    this.openedMenu = false;
    this.router.navigate(['resume']);
  };
  experience() {
    this.optionSelected = 'experience';
    this.openedMenu = false;
    this.router.navigate(['experience']);
  };
  contact() {
    this.optionSelected = 'contact';
    this.openedMenu = false;
    this.router.navigate(['contact']);
  };
  skills() {
    this.optionSelected = 'skills';
    this.openedMenu = false;
    this.router.navigate(['skills']);
  };
}
