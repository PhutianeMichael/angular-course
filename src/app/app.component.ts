import { CourseCardComponent } from './course-card/course-card.component';
import { AfterViewInit, Component, ViewChildren } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit{
  courses: Course = COURSES;

  @ViewChildren(CourseCardComponent)
  cards:CourseCardComponent;

  onCardClick() {
    console.log("App component card click bubbled");
  }
  onCourseSelected(course: Course) {
    console.log(this.cards);
  }

  ngAfterViewInit() {
    console.log(this.cards);
  }
}
