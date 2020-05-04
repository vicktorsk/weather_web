import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';


export const showUpStaggered = trigger('showUpCollection', [
    transition('* => *', [
        query(':enter',[
            style({opacity: 0, transform: 'scaleY(0)'}),
            stagger(80,[
                animate(350,style({opacity: 1, transform: 'scaleY(1)'})) 
            ])
        ], {optional: true})
    ])
]);

export const showUp = trigger('showUpElement', [
    state('in', style({opacity: 1, transform: 'scaleY(1)'})),
    transition(':enter', [
        style({opacity: 0, transform: 'scaleY(0)'}),
        animate(250)
    ])
]);