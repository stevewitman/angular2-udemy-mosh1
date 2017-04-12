import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { CourseService } from './course.service';
import { AuthorService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { PropertyBindingComponent } from './property-binding.component';
import { ClassBindingComponent } from './class-binding.component';
import { StyleBindingComponent } from './style-binding.component';
import { EventBindingComponent } from './event-binding.component';
import { TwowayBindingComponent } from './twoway-binding.component';
import { FavoriteComponent } from './favorite.component';
import { StarsComponent } from './stars.component';
import { LikeComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { PanelComponent } from './panel.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    AuthorsComponent,
    AutoGrowDirective,
    PropertyBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    FavoriteComponent,
    StarsComponent,
    LikeComponent,
    VoterComponent,
    PanelComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CourseService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
