import { Component, OnInit } from '@angular/core';
import { CoursesService } from "./services/courses.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor (private CoursesService:CoursesService){

  }

  ngOnInit(){
    this.CoursesService.loadCourseDetail(1)
      .subscribe(console.log);
  }
}
