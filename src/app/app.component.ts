import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: false
  }
  onFavoriteChange($event) {
    console.log($event)
  }
  post2 = {
    voteCount: 10,
    myVote: 0
  }
  onVote($event) {
    console.log($event);
  }
}
