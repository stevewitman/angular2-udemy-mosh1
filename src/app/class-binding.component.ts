import { Component } from '@angular/core';

@Component({
    selector: 'class-binding',
    template: `
        <h2>{{ title }}</h2>
        <button class="btn btn-primary" [class.active]="isActive">Submit</button>
    `
})
export class ClassBindingComponent {
    title = 'Class Binding Component';
    isActive = false;
}