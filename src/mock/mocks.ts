import {ArticleInterface} from '../shared/interfaces/article.interface';

export const articleListMock: Array<ArticleInterface> = [
  {
    id: '001',
    rubric: 'Финансовая грамотность',
    topic: 'Как инвесторы зарабатывают на ИИС',
    link: 'https://investments101.ru/articles/2020-07-02/kak-investory-zarabatyvayut-na-iis',
    description: 'За первый квартал 2020 года количество индивидуальных инвестиционных счетов на Московской бирже увеличилось на 407 тысяч и перевалило отметку в 2 миллиона. Если вы все еще размышляете, не открыть ли ИИС, эта статья для вас: в ней мы расскажем, как устроен счет, сколько можно заработать на нем и что можно купить на ИИС в 2020 году. ',
    dateOfPublication: '2 июля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/25/small_image.jpg?ts=1593689972',
    categories: [
      {
        categoryName: 'Облигации',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%9E%D0%B1%D0%BB%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'ИИС',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%98%D0%A1'
      },
      {
        categoryName: 'Акции',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%90%D0%BA%D1%86%D0%B8%D0%B8'
      }
    ]
  },
  {
    id: '002',
    rubric: 'Финансовая грамотность',
    topic: 'Куда вложить 100 000 рублей в 2020 году',
    link: 'https://investments101.ru/articles/2020-06-18/kuda-vlozhit-100-000-rubley-v-2020-godu',
    description: 'В мае 2020 года количество частных инвесторов на Московской бирже увеличилось на 20% и достигло отметки в 5 миллионов. Это значит, что все больше людей предпочитают инвестиции банковским депозитам. Разберемся, куда вложить 100 000 рублей, если вы только начинаете инвестировать. ',
    dateOfPublication: '18 июня 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/24/small_image.jpg?ts=1592472861',
    categories: [
      {
        categoryName: 'ETF',
        categoryLink: 'https://investments101.ru/articles?topic=ETF'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Облигации',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%9E%D0%B1%D0%BB%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8'
      },
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      }
    ]
  },
  {
    id: '003',
    rubric: 'Финансовая грамотность',
    topic: 'Как купить ETF на Московской бирже',
    link: 'https://investments101.ru/articles/2020-06-04/kak-kupit-etf-na-moskovskoy-birzhe',
    description: 'Облигации часто сравнивают с банковскими депозитами, но при этом отмечают, что они превосходят депозиты по доходности и больше подходят долгосрочным инвесторам. В этой статье мы разберем, что такое облигации, как их выбирать, сколько можно заработать на них и чем рискуют инвесторы, вкладывая деньги в этот инструмент. \n',
    dateOfPublication: '4 июня 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/23/small_image.jpg?ts=1592813992',
    categories: [
      {
        categoryName: 'Торговые платформы',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5+%D0%BF%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D1%8B'
      },
      {
        categoryName: 'ETF',
        categoryLink: 'https://investments101.ru/articles?topic=ETF'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'ИИС',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%98%D0%A1'
      }
    ]
  },
  {
    id: '004',
    rubric: 'Финансовая грамотность',
    topic: 'Что такое облигации и как их выбирать ',
    link: 'https://investments101.ru/articles/2020-05-21/chto-takoe-obligatsii-i-kak-ih-vybirat',
    description: 'Финансовая свобода — основная цель для многих людей. Хочется, чтобы сбережений и пассивного дохода хватало на привычный образ жизни. И при этом можно было не работать, а путешествовать или, например, заниматься любимым делом. Рассказываем, как прийти к финансовой свободе с помощью шести шагов. \n',
    dateOfPublication: '21 мая 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/22/small_image.jpg?ts=1590067046',
    categories: [
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Облигации',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%9E%D0%B1%D0%BB%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8'
      }
    ]
  },
  {
    id: '005',
    rubric: 'Финансовая грамотность',
    topic: '6 шагов на пути к финансовой свободе',
    link: 'https://investments101.ru/articles/2020-05-07/6-shagov-na-puti-k-finansovoy-svobode',
    description: 'Экономический кризис — нестабильное время не только на рынке ценных бумаг, но и в других сферах жизни. Малый и средний бизнес испытывает проблемы, количество рабочих мест сокращается, а финансовые перспективы становятся туманными. В такой ситуации нужно соблюдать очень важное правило — не занимать деньги. ',
    dateOfPublication: '7 мая 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/21/small_image.jpg?ts=1588864628',
    categories: [
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      }
    ]
  },
  {
    id: '006',
    rubric: 'Финансовая грамотность',
    topic: 'Почему не стоит занимать деньги в кризис',
    link: 'https://investments101.ru/articles/2020-04-30/pochemu-ne-stoit-zanimat-dengi-v-krizis',
    description: 'Частный инвестор Сергей впервые получил акции в качестве компенсации заработной платы. Это было в середине 1990-х. С тех пор он успел изучить теорию, разобраться в тонкостях фондового рынка и перейти от краткосрочных спекуляций к долгосрочным инвестициям. Вот его история. ',
    dateOfPublication: '30 апреля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/20/small_image.jpg?ts=1588253375',
    categories: [
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      }
    ]
  },
  {
    id: '007',
    rubric: 'Как я начал инвестировать',
    topic: '«Люди с разными требованиями могут найти свою нишу в инвестициях»',
    link: 'https://investments101.ru/articles/2020-04-23/lyudi-s-raznymi-trebovaniyami-mogut-nayti-svoyu-nishu-v-investitsiyah',
    description: 'Уоррена Баффета называют по разному: «провидец», «волшебник из Омахи», «оракул из Омахи». Свою первую сделку на бирже он совершил в 11 лет, его учителем был Бенджамин Грэм, а одну из самых известных публичных компаний он вырастил из простого товарищества.',
    dateOfPublication: '23 апреля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/19/small_image.jpg?ts=1587640446',
    categories: [
      {
        categoryName: 'Мировые рынки',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%9C%D0%B8%D1%80%D0%BE%D0%B2%D1%8B%D0%B5+%D1%80%D1%8B%D0%BD%D0%BA%D0%B8'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Акции',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%90%D0%BA%D1%86%D0%B8%D0%B8'
      },
      {
        categoryName: 'Трейдинг',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A2%D1%80%D0%B5%D0%B9%D0%B4%D0%B8%D0%BD%D0%B3'
      }
    ]
  },
  {
    id: '008',
    rubric: 'Финансовая грамотность',
    topic: 'Как составить личный инвестиционный план',
    link: 'https://investments101.ru/articles/2020-04-16/kak-sostavit-lichnyy-investitsionnyy-plan',
    description: 'Сегодняшний герой начал инвестировать через шесть лет после выхода на пенсию. Это случилось осенью 2019 года, когда ставки по банковским депозитам упали, и стало понятно, что они больше не покрывают инфляцию. ',
    dateOfPublication: '16 апреля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/18/small_image.jpg?ts=1596978691',
    categories: [
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      }
    ]
  },
  {
    id: '009',
    rubric: 'Кругозор',
    topic: '5 идей из фильма «Стать Уорреном Баффетом»',
    link: 'https://investments101.ru/articles/2020-04-10/5-idey-iz-filma-stat-uorrenom-baffetom',
    description: '2014-2020 © Инвестиции 101. Все права защищены. ООО «Компания Брокеркредитсервис», лицензия №154-04434-100000 от 10.01.2001\nна осуществление брокерской деятельности.',
    dateOfPublication: '10 апреля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/17/small_image.jpg?ts=1596978677',
    categories: [
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Акции',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%90%D0%BA%D1%86%D0%B8%D0%B8'
      }
    ]
  },
  {
    id: '010',
    rubric: 'Как я начал инвестировать',
    topic: '«Начинать инвестировать можно в любом возрасте»',
    link: 'https://investments101.ru/articles/2020-04-03/nachinat-investirovat-mozhno-v-lyubom-vozraste',
    description: 'Брокерское и депозитарное обслуживание осуществляет ООО «Компания БКС». Информация о компании и услугах,\nдекларация о рисках, иная подлежащая раскрытию информация (включая ссылку на страницу,\nна которой можно оставить обращение (жалобу)\n',
    dateOfPublication: '3 апреля 2020',
    imgSrc: 'https://cdn.investments101.ru/uploads/articles/16/small_image.jpg?ts=1596978663',
    categories: [
      {
        categoryName: 'ИИС',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%98%D0%A1'
      },
      {
        categoryName: 'Акции',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%90%D0%BA%D1%86%D0%B8%D0%B8'
      },
      {
        categoryName: 'Инвестирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%98%D0%BD%D0%B2%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Финансовое планирование',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%A4%D0%B8%D0%BD%D0%B0%D0%BD%D1%81%D0%BE%D0%B2%D0%BE%D0%B5+%D0%BF%D0%BB%D0%B0%D0%BD%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5'
      },
      {
        categoryName: 'Облигации',
        categoryLink: 'https://investments101.ru/articles?topic=%D0%9E%D0%B1%D0%BB%D0%B8%D0%B3%D0%B0%D1%86%D0%B8%D0%B8'
      }
    ]
  }
];

export const imageSrc = 'https://cdn.investments101.ru/uploads/articles/16/small_image.jpg?ts=1596978663';
