export default class NewsCardList {
  constructor(domElement, createCard) {
    this.domElement = domElement
    this.createCard = createCard
    this.count = 0
  }

  addCard(source, title, publishedAt, description, url, link) {
    this.domElement.appendChild(this.createCard(source, title, publishedAt, description, url, link))
  }

  render(result) {
    result.forEach(item => {
      this.addCard(item.source, item.title, item.publishedAt, item.description, item.urlToImage, item.url)
    })
  }

  reset () {
    this.count = 0
    this.domElement.innerHTML = '';
  }

  showMore (newsArrey) {
    this.render(newsArrey.slice(this.count, this.count +3));
    this.count += 3;
    return this.count >= newsArrey.length;
  }
}
