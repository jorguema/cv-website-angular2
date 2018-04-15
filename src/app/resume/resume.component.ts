import { Component } from '@angular/core';
// import fade in animation
import { fadeInAnimation } from '../animations/index.animation';

@Component({
  selector: 'my-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [fadeInAnimation], 
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '', class: 'custom-component' }
})
export class ResumeComponent {

}
