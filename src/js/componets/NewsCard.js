export default  class NewsCard {
  constructor(source, title, publishedAt, description, url, link) {
    this.source = source;
    this.title = title;
    this.publishedAt = publishedAt;
    this.description = description;
    this.url = url;
    this.link = link;
  }

  createCard() {
    const card = document.createElement('div');
    const cardImage = document.createElement('img');
    const article = document.createElement('div');
    const date = document.createElement('p');
    const subTitle = document.createElement('h3');
    const text = document.createElement('p');
    const newsAgency = document.createElement('p');

    card.className = 'results__card';
    cardImage.className = 'results__image';
    article.className = 'results__article';
    date.className = 'results__date';
    subTitle.className = 'results__sub-title';
    text.className = 'results__text';
    newsAgency.className = 'results__news-agency';

    date.textContent = this.formatDate(this.publishedAt)
    text.innerHTML = this.description
    if (this.url == null) {
      this.url = 'https://upload.wikimedia.org/wikipedia/commons/9/9a/%D0%9D%D0%B5%D1%82_%D1%84%D0%BE%D1%82%D0%BE.png'
    }
    cardImage.src = this.url
    newsAgency.innerHTML = this.source.name
    subTitle.innerHTML = this.title

    card.appendChild(cardImage)
    article.appendChild(date)
    article.appendChild(subTitle)
    article.appendChild(text)
    article.appendChild(newsAgency)
    card.appendChild(article)

    card.addEventListener('click', () => {
      window.open(this.link)
    })
    return card
  }

  formatDate (publishedAt) {
    const date = new Date(publishedAt);
    const mounth = {
      '0': 'января',
      '1': 'февраля',
      '2': 'марта',
      '3': 'апреля',
      '4': 'мая',
      '5': 'июня',
      '6': 'июля',
      '7': 'августа',
      '8': 'сентября',
      '9': 'октября',
      '10': 'ноября',
      '11': 'декабря',
    }
      if (date.getDate() <= 9) {
        return  `0${date.getDate()} ${mounth[date.getMonth()]}, ${date.getFullYear()}`
      }
      return `${date.getDate()} ${mounth[date.getMonth()]}, ${date.getFullYear()}`
}
}
