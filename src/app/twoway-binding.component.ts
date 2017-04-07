import { Component } from '@angular/core'

@Component({
    selector: 'twoway-binding',
    template: `
        <h2>Twoway Binding Component</h2>
        <p>two-way data binding long-hand: 
        <input type="text" [value]="title" (input)="title = $event.target.value"/>
        Preview: {{ title }}
        </p>
        <p>two-way data binding ng2 way: 
        <input type="text" [(ngModel)]="title" />
        </p>
        <input type="button" value="Clear" (click)="onClick()" />
    `
})
export class TwowayBindingComponent {
    title = "default value"
    onClick() {
        this.title = "";
    }
}