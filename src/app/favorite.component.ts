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
            console.log("un-fav'd")
            this.favClass = "glyphicon glyphicon-star-empty"
            this.isFavorite = false
        } else {
            console.log("fav'd")
            this.favClass = "glyphicon glyphicon-star"
            this.isFavorite = true
        }
        
    }
}