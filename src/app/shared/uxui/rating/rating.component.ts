import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  constructor() { }

  difficulties: string[] = ['Очень легко', 'Легко', 'Нормально', 'Сложно', 'Очень сложно'];

  ngOnInit(): void {
  }
}
