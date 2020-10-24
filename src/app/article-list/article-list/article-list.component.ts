import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articleMock = {
    id: 1,
    image: 'https://cdn.investments101.ru/uploads/articles/25/small_image.jpg?ts=1593689972',
    label: 'Финансовая грамотность',
    tag: 'Как инвесторы зарабатывают на ИИС',
    body: 'За первый квартал 2020 года количество индивидуальных инвестиционных счетов на Московской бирже\n' +
      '          увеличилось на 407 тысяч и перевалило отметку в 2 миллиона. Если вы все еще размышляете,\n' +
      '          не открыть ли ИИС, эта статья для вас: в ней мы расскажем, как устроен счет,\n' +
      '          сколько можно заработать на нем и что можно купить на ИИС в 2020 году.',
    time: '2020-07-02T14:39:00+03:00'
  };
  constructor() { }

  ngOnInit(): void {
  }

}
