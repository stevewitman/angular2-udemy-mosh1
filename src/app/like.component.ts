import { Component, Input } from '@angular/core'

@Component({
    selector: 'like',
    template: `
        <h2>Like Component</h2>
        <i 
            class="glyphicon glyphicon-heart"
            [style.color]="isLiked ? 'deeppink' : '#CCC'"
            (click)="onClick()"
        ></i>
        <span>{{totalLikes}}</span>
    `,
    styles: [ 
        i:hover {
            cursor: "pointer"
        }
    ]

})
export class LikeComponent {
    @Input() totalLikes = 0;

    isLiked = false;

    onClick() {  
        this.isLiked = !this.isLiked;
        this.isLiked ? this.totalLikes++ : this.totalLikes--
    }

}