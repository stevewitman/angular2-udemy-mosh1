import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
    selector: 'courses',
    templateUrl: 'courses.component.html'
})
export class CoursesComponent {
    title = "Courses Component";
    courses;

    constructor(courseService: CourseService) {
        this.courses = courseService.getCourses();
    }
}
