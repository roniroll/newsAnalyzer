//Подключение стилей
import './pages/index-page.css'
import './pages/analytics-page.css';
import './pages/about-page.css';

//Импорт классов
import FormValidator from './js/utils/FormValidator.js';
import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/componets/NewsCard.js'
import NewsCardList from './js/componets/NewsCardList.js';

//Ипорт двух функций для подстановки даты от текущей даты и до сегодняшней даты для запроса
import {returnLastDay, returnTodayDay} from './js/utils/Days.js';

//Экземпляры классов
const formValidator = new FormValidator(document.querySelector('.search__form'),
      new NewsApi('http://newsapi.org/v2/everything?language=ru&', 'd7b692823f6c428a94d9dfb072ebd467', returnTodayDay(), returnLastDay()));
const newsApi = new NewsApi('http://newsapi.org/v2/everything?language=ru&', 'd7b692823f6c428a94d9dfb072ebd467', returnTodayDay(), returnLastDay());
const newsCardList = new NewsCardList(document.querySelector('.results__cards'), createCardFunction);
const searchForm = document.querySelector('.search__form');
const searchInput = document.querySelector('.search__input');

//Валидация формы поиска
formValidator.setEventListener();

function createCardFunction () {
  return new NewsCard (source, title, publishedAt, description, url).create()
}

var word = 'bottles';
var count = 99;
while (count > 0) {
  console.log(count + ' ' + word + ' of beer on the wall');
  console.log(count + " " + word + ' of beer,')
  console.log('Take one dowm, pass it around,');
  count = count - 1;
  if (count > 0) {
    console.log(count + ' ' + word + ' of beer on the wall');
  } else {
    console.log('No more ' + word + ' of beer on the wall.')
  }
}




