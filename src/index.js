//Подключение стилей
import './pages/index-page.css'
import './pages/analytics-page.css';
import './pages/about-page.css';

//Импорт классов
import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import NewsCard from './js/componets/NewsCard.js'
import NewsCardList from './js/componets/NewsCardList.js';
import SearchInput from "./js/componets/SearchInput.js";

//Ипорт двух функций для подстановки даты от текущей даты и до сегодняшней даты для запроса
import {returnLastDay, returnTodayDay, formatDate} from './js/utils/Days.js';

//Экземпляры классов
const searchForm = document.querySelector('.search__form');
const input = document.querySelector('.search__input');
const newsApi = new NewsApi('http://newsapi.org/v2/everything?language=ru&', 'd7b692823f6c428a94d9dfb072ebd467', returnTodayDay(), returnLastDay());
const dataStorage = new DataStorage();
const newsCardList = new NewsCardList(document.querySelector('.results__cards'), createCardFunction);
const searchInput = new SearchInput(submitSearchForm, searchForm, input);
const noResults = document.querySelector('.no-results');
const results = document.querySelector('.results');
const loader = document.querySelector('.loader');
const err = document.querySelector('.error');

function createCardFunction(source, title, publishedAt, description, url, link) {
  return new NewsCard(source, title, publishedAt, description, url, link).createCard()
}

function submitSearchForm(text) {
  err.classList.remove('error_visible');
  loader.classList.add('loader_visible');
  newsApi.getNews(text)
    .then((data) => {
      dataStorage.setDataStorage(data)
      if (data.totalResults) {
        //вынести в функцию
        noResults.classList.remove('no-results_visible')
        results.classList.add('results_visible')
        newsCardList.render(data.articles)
      } else {
        //вынести в функцию
        noResults.classList.add('no-results_visible')
        results.classList.remove('results_visible')
      }
    })
    .catch(() => {
      err.classList.add('error_visible')
    })
    .finally(() => {
      loader.classList.remove('loader_visible')
    })
}

searchInput.setEventListeners()


// Прижать футтер

