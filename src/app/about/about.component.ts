import { Component } from '@angular/core';

import { fadeInAnimation } from '../animations/index.animation';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '', class: 'custom-component' }
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
    'PRODUCTIVITY',
    "SCI-FI",
    "TECH",
    "MEDITATION"
  ];
}
