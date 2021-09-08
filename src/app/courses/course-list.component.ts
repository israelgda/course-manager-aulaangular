import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void{
        this.courses = [
            {
                id: 1,
                name: 'Curso de Angular',
                imageUrl: '/assets/images/cli.png',
                price: 200.00,
                code: 'XPS-8796',
                duration: 120,
                rating: 5,
                releaseDate: '04/09/2021'
            },
            {
                id: 2,
                name: 'Curso de Bootstrap',
                imageUrl: '/assets/images/http.png',
                price: 100.00,
                code: 'XPS-0096',
                duration: 80,
                rating: 3.5,
                releaseDate: '05/09/2021'
            }
        ]
    }
}