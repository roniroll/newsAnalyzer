class NewsCard {
  constructor(source, title, publishedAt, description, url) {
    this.source = source;
    this.title = title;
    this.publishedAt = publishedAt;
    this.description = description;
    this.url = url
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

    card.appendChild(cardImage)
    article.appendChild(date)
    article.appendChild(subTitle)
    article.appendChild(text)
    article.appendChild(newsAgency)
    card.appendChild(article)

    return card
  }
}
