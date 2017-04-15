import { Component, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Jesse"
  day = new Date()
  arr:number[] = [1, 4, 8, 9, 2, 6, 7, 100]
}
