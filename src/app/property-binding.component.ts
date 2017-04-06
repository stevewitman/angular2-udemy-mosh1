import { Component } from '@angular/core'

@Component({
    selector: 'property-binding', 
    template: `
        <h2>{{ title }}</h2>
        <!-- all three are equivalent -->
        <img src="{{ imageUrl }}" />
        <img [src]="imageUrl" />
        <img bind-src="imageUrl" />
    `
})
export class PropertyBindingComponent {
    title = 'Property Binding Component';
    imageUrl = 'http://lorempixel.com/400/200'
}