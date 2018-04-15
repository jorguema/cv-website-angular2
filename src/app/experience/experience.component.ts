import { Component } from '@angular/core';

import { fadeInAnimation } from '../animations/index.animation';

@Component({
  selector: 'my-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '',class: 'custom-component'  }
})
export class ExperienceComponent {
    
}
