import { Component } from '@angular/core';

@Component({
    selector: 'stars',
    templateUrl: './stars.component.html'
})
export class StarsComponent {
    star=0;
    onClick(n) {
        console.log(n)
    
        this.star=n

    }
}