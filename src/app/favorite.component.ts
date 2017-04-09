import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html',
    styles: [`
        .glyphicon-star {
            color: orange;
        }
    `]
})
export class FavoriteComponent {
    @Input() isFavorite = false;

    @Output() change = new EventEmitter();

    onClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}