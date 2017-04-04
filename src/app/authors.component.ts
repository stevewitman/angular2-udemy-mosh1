import { Component } from '@angular/core';

import { AuthorService } from './author.service'

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html'
})
export class AuthorsComponent {
    title = "Authors";
    authors;
    constructor(authorService: AuthorService) {
        this.authors = authorService.getAuthors();
    }
}