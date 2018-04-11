import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  interests = [
    'MUSIC',
    'WEB_DEV',
    'TRILOGIES',
    'Exercise',
    'STARTUPS',
    'TEA',
    'UX_UI',
    'CATS',
    'PRODUCTIVITY'
  ];
}
