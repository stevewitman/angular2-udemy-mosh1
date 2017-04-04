import { Component } from '@angular/core';
import { CourseService } from './course.service'

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html'
})
export class CoursesComponent {
    title = "Here is the title";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
