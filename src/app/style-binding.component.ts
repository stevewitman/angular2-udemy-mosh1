import { Component } from '@angular/core';

@Component({
    selector: 'style-binding',
    template: `
        <h2>{{ title }}</h2>
        <button
            class="btn btn-primary" 
            [style.backgroundColor]="isActive ? 'blue' : 'gray'"
        >Submit</button>
    `
})
export class StyleBindingComponent {
    title = 'Style Binding Component';
    isActive = false;
}