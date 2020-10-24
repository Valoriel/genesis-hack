import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.services';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
