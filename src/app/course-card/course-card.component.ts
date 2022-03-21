import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
})
export class CourseCardComponent implements OnInit {
  constructor() {}

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  ngOnInit(): void {}

  onCourseViewed() {
    console.log("Card component button clicked...");

    this.courseEmitter.emit(this.course);
  }

  cardClasses() {
    return this.course.category === "BEGINNER" ? "beginner" : "";
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }
}
