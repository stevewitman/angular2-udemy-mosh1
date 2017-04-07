import { Component } from '@angular/core';

@Component({
    selector: 'favorite',
    templateUrl: './favorite.component.html'
})
export class FavoriteComponent {
    isFavorite = false;
    favClass = "glyphicon glyphicon-star-empty"
    onClick() {
        if (this.isFavorite) {
            console.log('fav')
            this.favClass = "glyphicon glyphicon-star"
            this.isFavorite = false
        } else {
            console.log('un-fav')
            this.favClass = "glyphicon glyphicon-star-empty"
            this.isFavorite = true
        }
        
    }
}