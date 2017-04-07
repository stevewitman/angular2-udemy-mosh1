import { Component } from '@angular/core'

@Component({
    selector: 'event-binding',
    template: `
        <h2>Event Binding Component</h2>
        <button (click)="onClick($event)">Submit Button</button>
        <div (click)="onDivClick()">
            <button (click)="onClick($event)">Submit Button in Div</button>
        <div>
    `
})
export class EventBindingComponent {
    onDivClick() {
        console.log("Div click")
    }
    onClick($event) {
        // events bubble up the dom tree unless a handler prevents bubbling ...
        $event.stopPropagation(); // not angular, works in jQuery of JavaScript
        console.log("Button click", $event)
    }
}