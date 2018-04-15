import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInAnimation =
    trigger('fadeInAnimation', [
        // route 'enter' transition
        transition(':enter', [

            // styles at start of transition
            style({ opacity: 0 }),
            // style({ backgroundColor: 'rgba(17,34,51)' }),

            // animation and styles at end of transition  
            animate('0.3s', style({ opacity: 1 }))
            // animate('3.3s', style({ backgroundColor: 'rgba(65,34,51)'  }))
        ]),
    ]);